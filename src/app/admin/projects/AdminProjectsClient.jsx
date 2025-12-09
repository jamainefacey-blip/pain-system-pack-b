'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { format } from 'date-fns';
import {
  Search,
  Edit,
  Trash2,
  Globe,
  CheckSquare,
  Square,
  Calendar,
  Clock,
  Plus,
  FileText,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

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
    status: 'in-progress',
    category: 'website',
  });
  const [loading, setLoading] = useState(true);
  const [isTableCollapsed, setIsTableCollapsed] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false); // Now controlled independently
  const router = useRouter();

  // Auto-generate slug
  useEffect(() => {
    if (formData.title && !editingProject?.id) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .replace(/-+/g, '-');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, editingProject?.id]);

  // Fetch projects
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/projects?limit=1000');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
        setFilteredProjects(data);
      } else {
        toast.error('Failed to load projects');
      }
    } catch {
      toast.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Search filter
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      setFilteredProjects(projects);
      return;
    }
    const filtered = projects.filter(p =>
      p.title?.toLowerCase().includes(query) ||
      p.slug?.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query) ||
      p.category?.toLowerCase().includes(query) ||
      p.status?.toLowerCase().includes(query)
    );
    setFilteredProjects(filtered);
  }, [searchQuery, projects]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.slug.trim() || !formData.description.trim()) {
      toast.error('Title, slug, and description are required');
      return;
    }

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
      toast.success(editingProject ? 'Project updated!' : 'Project created!');
      fetchProjects();
      setFormData({ title: '', slug: '', description: '', status: 'in-progress', category: 'website' });
      setEditingProject(null);
      setIsEditorOpen(false); // Close editor after save
    } else {
      toast.error('Failed to save');
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title || '',
      slug: project.slug || '',
      description: project.description || '',
      status: project.status || 'in-progress',
      category: project.category || 'website',
    });
    setIsEditorOpen(true); // Open editor when editing
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this project permanently?')) return;
    const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
    if (res.ok) {
      toast.success('Deleted');
      fetchProjects();
      setSelectedIds(prev => { const n = new Set(prev); n.delete(id); return n; });
    }
  };

  const handleToggleStatus = async (project) => {
    const newStatus = project.status === 'active' ? 'paused' : 'active';
    const res = await fetch('/api/projects', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...project, status: newStatus }),
    });
    if (res.ok) {
      toast.success(newStatus === 'active' ? 'Published' : 'Unpublished');
      fetchProjects();
    }
  };

  const bulkAction = async (action) => {
    if (selectedIds.size === 0) return;
    if (!confirm(`Apply "${action}" to ${selectedIds.size} projects?`)) return;

    for (const id of selectedIds) {
      const project = projects.find(p => p.id === id);
      if (!project) continue;

      if (action === 'delete') {
        await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      } else if (action === 'publish') {
        await fetch('/api/projects', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...project, status: 'active' }),
        });
      } else if (action === 'unpublish') {
        await fetch('/api/projects', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...project, status: 'paused' }),
        });
      }
    }
    toast.success(`Bulk ${action} done`);
    setSelectedIds(new Set());
    fetchProjects();
  };

  const toggleSelect = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    if (selectedIds.size === filteredProjects.length && filteredProjects.length > 0) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredProjects.map(p => p.id)));
    }
  };

  const formatDate = (d) => d ? format(new Date(d), 'MMM d, yyyy') : '—';
  const formatDateTime = (d) => d ? format(new Date(d), 'MMM d, yyyy • h:mm a') : '—';

  return (
    <>
      <Toaster position="top-right" />

      <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12 max-w-7xl">
        {/* Page Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Admin • Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage all your projects in one place</p>
        </div>

        {/* Stacked Layout: Editor First, Table Below */}
        <div className="space-y-8">

          {/* Editor Panel - Always on Top */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            {/* Editor Header */}
            <div 
              className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 cursor-pointer select-none flex items-center justify-between"
              onClick={() => setIsEditorOpen(!isEditorOpen)}
            >
              <div className="flex items-center gap-3">
                {isEditorOpen ? (
                  <ChevronDown className="w-5 h-5 text-orange-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-orange-600" />
                )}
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {isEditorOpen 
                    ? (editingProject ? 'Edit Project' : 'Create New Project')
                    : 'Project Editor'
                  }
                </h2>
              </div>
              {!isEditorOpen && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditorOpen(true);
                    setEditingProject(null);
                    setFormData({ title: '', slug: '', description: '', status: 'in-progress', category: 'website' });
                  }}
                  className="text-sm font-medium text-orange-600 hover:text-orange-700"
                >
                  + New Project
                </button>
              )}
            </div>

            {/* Editor Form */}
            {isEditorOpen && (
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    placeholder="Project Title *"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 transition"
                  />

                  <input
                    type="text"
                    placeholder="Slug (auto-generated)"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 font-mono text-sm focus:ring-2 focus:ring-orange-500 transition"
                  />

                  <textarea
                    placeholder="Description *"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={5}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 resize-none transition"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                      className="px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                    >
                      <option value="active">Active</option>
                      <option value="in-progress">In Progress</option>
                      <option value="paused">Paused</option>
                    </select>

                    <select
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
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
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-5 rounded-xl text-lg shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    {editingProject ? 'Update Project' : 'Create Project'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsEditorOpen(false);
                      setEditingProject(null);
                      setFormData({ title: '', slug: '', description: '', status: 'in-progress', category: 'website' });
                    }}
                    className="w-full text-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Projects Table - Below Editor */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            {/* Table Header */}
            <div 
              className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 cursor-pointer select-none flex items-center justify-between"
              onClick={() => setIsTableCollapsed(!isTableCollapsed)}
            >
              <div className="flex items-center gap-3">
                {isTableCollapsed ? (
                  <ChevronRight className="w-5 h-5 text-orange-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-600" />
                )}
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Projects ({filteredProjects.length})
                </h2>
              </div>
              <span className="text-sm text-gray-500">Click to {isTableCollapsed ? 'expand' : 'collapse'}</span>
            </div>

            {/* Table Content */}
            {!isTableCollapsed && (
              <div className="p-6 space-y-6">
                {/* Search + Bulk */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div className="relative w-full sm:max-w-md">
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search title, slug, description..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-orange-500 transition"
                    />
                  </div>

                  {selectedIds.size > 0 && (
                    <div className="flex flex-wrap gap-3">
                      <button onClick={() => bulkAction('publish')} className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                        Publish ({selectedIds.size})
                      </button>
                      <button onClick={() => bulkAction('unpublish')} className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium">
                        Unpublish
                      </button>
                      <button onClick={() => bulkAction('delete')} className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1000px]">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-4 text-left w-12">
                          <button onClick={selectAll}>
                            {selectedIds.size === filteredProjects.length && filteredProjects.length > 0 ? (
                              <CheckSquare className="w-5 h-5 text-orange-600" />
                            ) : (
                              <Square className="w-5 h-5 text-gray-400" />
                            )}
                          </button>
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Slug</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Created</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Updated</th>
                        <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {loading ? (
                        <tr><td colSpan={9} className="text-center py-16 text-gray-500">Loading projects...</td></tr>
                      ) : filteredProjects.length === 0 ? (
                        <tr><td colSpan={9} className="text-center py-16 text-gray-500">
                          {searchQuery ? 'No matching projects' : 'No projects yet — create one!'}
                        </td></tr>
                      ) : (
                        filteredProjects.map((project) => (
                          <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            <td className="px-6 py-4">
                              <button onClick={() => toggleSelect(project.id)}>
                                {selectedIds.has(project.id) ? (
                                  <CheckSquare className="w-5 h-5 text-orange-600" />
                                ) : (
                                  <Square className="w-5 h-5 text-gray-400" />
                                )}
                              </button>
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{project.title || 'Untitled'}</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400">/{project.slug || '—'}</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-md">
                              <div className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                <span className="line-clamp-2">{project.description || 'No description'}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                                project.status === 'active'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                  : project.status === 'in-progress'
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                              }`}>
                                {project.status || 'paused'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 capitalize">{project.category || '—'}</td>
                            <td className="px-6 py-4 text-xs text-gray-500 dark:text-gray-400">
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                {formatDate(project.createdAt)}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-xs text-gray-500 dark:text-gray-400">
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                {formatDateTime(project.updatedAt)}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1.5">
                                <button onClick={() => handleEdit(project)} className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded transition" title="Edit">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleToggleStatus(project)} className="p-2 text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900 rounded transition" title={project.status === 'active' ? 'Unpublish' : 'Publish'}>
                                  <Globe className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDelete(project.id)} className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded transition" title="Delete">
                                  <Trash2 className="w-4 h-4" />
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}