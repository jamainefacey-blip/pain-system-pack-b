'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { Search, Edit, Trash2, Globe, CheckSquare, Square } from 'lucide-react';

export default function AdminProjectsClient() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    status: 'draft',
    category: 'website',
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Auto-generate slug
  useEffect(() => {
    if (formData.title && !editingProject) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, editingProject]);

  // Fetch all projects
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/projects?limit=1000');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
        setFilteredProjects(data);
      }
    } catch (err) {
      toast.error('Failed to load projects');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Search filter
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = projects.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.slug.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
    setFilteredProjects(filtered);
  }, [searchQuery, projects]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      id: editingProject?.id || nanoid(),
      updatedAt: new Date().toISOString(),
      ...(editingProject ? {} : { createdAt: new Date().toISOString() }),
    };

    const res = await fetch('/api/projects', {
      method: editingProject ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      toast.success(editingProject ? 'Updated!' : 'Created!');
      fetchProjects();
      setFormData({ title: '', slug: '', description: '', status: 'draft', category: 'website' });
      setEditingProject(null);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      slug: project.slug,
      description: project.description,
      status: project.status,
      category: project.category,
    });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete forever?')) return;
    const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
    if (res.ok) {
      toast.success('Deleted');
      fetchProjects();
      setSelectedIds(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  };

  const handleToggleStatus = async (project) => {
    const res = await fetch('/api/projects', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...project, status: project.status === 'live' ? 'draft' : 'live' }),
    });
    if (res.ok) {
      toast.success(project.status === 'live' ? 'Unpublished' : 'Published');
      fetchProjects();
    }
  };

  const bulkAction = async (action) => {
    if (selectedIds.size === 0) return;
    if (!confirm(`Apply "${action}" to ${selectedIds.size} projects?`)) return;

    for (const id of selectedIds) {
      const project = projects.find(p => p.id === id);
      if (action === 'delete') {
        await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      } else if (action === 'publish') {
        await fetch('/api/projects', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...project, status: 'live' }),
        });
      } else if (action === 'unpublish') {
        await fetch('/api/projects', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...project, status: 'draft' }),
        });
      }
    }
    toast.success(`Bulk ${action} completed`);
    setSelectedIds(new Set());
    fetchProjects();
  };

  const toggleSelect = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    if (selectedIds.size === filteredProjects.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredProjects.map(p => p.id)));
    }
  };

  const handleLogout = () => {
    document.cookie = 'user_role=; path=/; max-age=0';
    router.push('/login');
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="h-16 md:h-20"></div>
        
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 backdrop-blur-lg bg-opacity-90">
          <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Admin • Projects
            </h1>
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition">
              Logout
            </button>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project List */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                {/* Search & Bulk Actions */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                    </div>
                    {selectedIds.size > 0 && (
                      <div className="flex gap-3">
                        <button onClick={() => bulkAction('publish')} className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition flex items-center gap-2">
                          <Globe className="w-5 h-5" /> Publish ({selectedIds.size})
                        </button>
                        <button onClick={() => bulkAction('unpublish')} className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-medium transition flex items-center gap-2">
                          <Globe className="w-5 h-5" /> Unpublish
                        </button>
                        <button onClick={() => bulkAction('delete')} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition flex items-center gap-2">
                          <Trash2 className="w-5 h-5" /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Projects Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-4 text-left">
                          <button onClick={selectAll} className="text-gray-600 dark:text-gray-300">
                            {selectedIds.size === filteredProjects.length && filteredProjects.length > 0 ? <CheckSquare /> : <Square />}
                          </button>
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Title</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Slug</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Category</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {loading ? (
                        <tr><td colSpan={6} className="text-center py-12 text-gray-500">Loading projects...</td></tr>
                      ) : filteredProjects.length === 0 ? (
                        <tr><td colSpan={6} className="text-center py-12 text-gray-500">No projects found</td></tr>
                      ) : (
                        filteredProjects.map(project => (
                          <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            <td className="px-6 py-4">
                              <button onClick={() => toggleSelect(project.id)}>
                                {selectedIds.has(project.id) ? <CheckSquare className="text-orange-600" /> : <Square />}
                              </button>
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{project.title}</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-mono">/{project.slug}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                                {project.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 capitalize">{project.category}</td>
                            <td className="px-6 py-4">
                              <div className="flex gap-2">
                                <button onClick={() => handleEdit(project)} className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition">
                                  <Edit className="w-5 h-5" />
                                </button>
                                <button onClick={() => handleToggleStatus(project)} className="p-2 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900 rounded-lg transition">
                                  {project.status === 'live' ? <Globe className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                                </button>
                                <button onClick={() => handleDelete(project.id)} className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition">
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Editor */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                  {editingProject ? 'Edit Project' : 'Create New Project'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    placeholder="Project Title"
                    value={formData.title}
                    onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 transition"
                  />
                  <input
                    placeholder="Slug (auto-generated)"
                    value={formData.slug}
                    onChange={e => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono focus:ring-2 focus:ring-orange-500 transition"
                  />
                  <textarea
                    placeholder="Description"
                    value={formData.description}
                    onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-orange-500 transition resize-none"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      value={formData.status}
                      onChange={e => setFormData(prev => ({ ...prev, status: e.target.value }))}
                      className="px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option value="draft">Draft</option>
                      <option value="live">Live</option>
                    </select>
                    <select
                      value={formData.category}
                      onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option value="website">Website</option>
                      <option value="portal">Portal</option>
                      <option value="app">App</option>
                      <option value="builder">Builder</option>
                      <option value="system">System</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-5 rounded-2xl text-xl shadow-xl transition transform hover:scale-105"
                  >
                    {editingProject ? 'Update Project' : 'Create Project'}
                  </button>
                  {editingProject && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingProject(null);
                        setFormData({ title: '', slug: '', description: '', status: 'draft', category: 'website' });
                      }}
                      className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline"
                    >
                      Cancel Edit
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}