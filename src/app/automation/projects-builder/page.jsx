// src/app/automation/projects-builder/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProjectsBuilder() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingProject, setEditingProject] = useState(null);
  const [form, setForm] = useState({
    slug: '',
    title: '',
    description: '',
    status: 'draft',
    category: 'website',
  });
  const router = useRouter();

  // Auth check
  useEffect(() => {
    const check = async () => {
      const res = await fetch('/api/auth/check');
      if (!res.ok) router.replace('/login');
      else fetchProjects();
    };
    check();
  }, [router]);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    if (res.ok) {
      const data = await res.json();
      setProjects(data);
    }
  };

  const filteredProjects = projects
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.slug.includes(search))
    .filter(p => filter === 'all' || p.status === filter || p.category === filter);

  const handleSave = async (e) => {
    e.preventDefault();
    const method = editingProject ? 'PUT' : 'POST';
    const url = editingProject ? `/api/projects?id=${editingProject.id}` : '/api/projects';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({ slug: '', title: '', description: '', status: 'draft', category: 'website' });
    setEditingProject(null);
    fetchProjects();
  };

  const handleEdit = (p) => {
    setEditingProject(p);
    setForm({
      slug: p.slug,
      title: p.title,
      description: p.description,
      status: p.status,
      category: p.category,
    });
  };

  const handleDelete = async (id) => {
    if (confirm('Delete forever? This cannot be undone.')) {
      await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      fetchProjects();
    }
  };

  const handleToggle = async (p) => {
    await fetch(`/api/projects?id=${p.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...p, status: p.status === 'live' ? 'draft' : 'live' }),
    });
    fetchProjects();
  };

  const bulkAction = async (action) => {
    const ids = projects.filter(p => p.status !== action).map(p => p.id);
    if (ids.length === 0) return alert(`All projects are already ${action}`);

    for (const id of ids) {
      const project = projects.find(p => p.id === id);
      await fetch(`/api/projects?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...project, status: action }),
      });
    }
    fetchProjects();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-black">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Projects Builder
            </h1>
            <p className="text-muted-foreground text-sm mt-1">System-wide project management • Auto-sync • Auto-deploy</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => bulkAction('live')}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-medium transition"
            >
              Publish All
            </button>
            <button
              onClick={() => bulkAction('draft')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-medium transition"
            >
              Unpublish All
            </button>
            <button
              onClick={() => {
  document.cookie = 'user_role=; path=/; max-age=0';
  router.push('/(auth)/login');
}}
              className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Search & Filter */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Search by title or slug..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-6 py-4 rounded-2xl border border-border bg-card/80 backdrop-blur focus:ring-4 focus:ring-orange-500/30 transition"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-6 py-4 rounded-2xl border border-border bg-card/80 backdrop-blur"
          >
            <option value="all">All Projects</option>
            <option value="live">Live Only</option>
            <option value="draft">Drafts Only</option>
            <option value="website">Website</option>
            <option value="portal">Portal</option>
            <option value="app">App</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Form Card */}
          <div className="bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">
              {editingProject ? 'Edit Project' : 'New Project'}
            </h2>
            <form onSubmit={handleSave} className="space-y-5">
              <input required placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-border bg-background/70" />
              <input required placeholder="slug (url)" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-border bg-background/70" />
              <textarea required placeholder="Description" rows={4} value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-border bg-background/70 resize-none" />
              
              <div className="flex gap-4">
                <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="flex-1 px-5 py-4 rounded-xl border border-border bg-background/70">
                  <option value="draft">Draft</option>
                  <option value="live">Live</option>
                </select>
                <select value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="flex-1 px-5 py-4 rounded-xl border border-border bg-background/70">
                  <option value="website">Website</option>
                  <option value="portal">Portal</option>
                  <option value="app">App</option>
                  <option value="builder">Builder</option>
                  <option value="system">System</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-5 rounded-xl text-lg shadow-lg transition transform hover:scale-105">
                {editingProject ? 'Update Project' : 'Create Project'}
              </button>
            </form>
          </div>

          {/* Project Cards */}
          {filteredProjects.map(p => (
            <div key={p.id} className="bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <a href={`/projects/${p.slug}`} target="_blank" className="text-sm text-orange-500 hover:underline">
                    /projects/{p.slug} ↗
                  </a>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.status === 'live' ? 'bg-green-500/20 text-green-500' : 'bg-orange-500/20 text-orange-500'}`}>
                  {p.status.toUpperCase()}
                </span>
              </div>

              <p className="text-muted-foreground mb-6">{p.description}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground capitalize">{p.category}</span>
                <div className="flex gap-3">
                  <button onClick={() => handleEdit(p)} className="text-blue-500 font-medium hover:underline">Edit</button>
                  <button onClick={() => handleToggle(p)} className={`${p.status === 'live' ? 'text-orange-500' : 'text-green-500'} font-medium hover:underline`}>
                    {p.status === 'live' ? 'Unpublish' : 'Publish'}
                  </button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-500 font-medium hover:underline">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}