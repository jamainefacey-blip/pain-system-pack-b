'use client';
import React, { useState } from 'react';

export default function ProjectsPage() {
  const [view, setView] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');

  const projects = [
    { id: 1, status: 'active', color: 'from-orange-400 to-orange-600' },
    { id: 2, status: 'completed', color: 'from-orange-500 to-orange-700' },
    { id: 3, status: 'active', color: 'from-orange-300 to-orange-500' },
    { id: 4, status: 'pending', color: 'from-orange-400 to-orange-600' },
    { id: 5, status: 'active', color: 'from-orange-500 to-orange-700' },
    { id: 6, status: 'completed', color: 'from-orange-300 to-orange-500' },
    { id: 7, status: 'active', color: 'from-orange-400 to-orange-600' },
    { id: 8, status: 'pending', color: 'from-orange-500 to-orange-700' },
    { id: 9, status: 'active', color: 'from-orange-300 to-orange-500' },
    { id: 10, status: 'completed', color: 'from-orange-400 to-orange-600' },
    { id: 11, status: 'active', color: 'from-orange-500 to-orange-700' },
    { id: 12, status: 'pending', color: 'from-orange-300 to-orange-500' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'completed': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'pending': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div className="w-full max-w-full">
      {/* Header Spacer */}
      <div className="h-16 md:h-20 lg:h-24"></div>
      
      {/* Header Section */}
      <div className="mb-6 md:mb-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
              Manage and track all your projects in one place
            </p>
          </div>
          
          {/* Create New Button */}
          <button className="self-start lg:self-center px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
            <span className="text-xl">+</span>
            New Project
          </button>
        </div>

        {/* Filters and View Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 text-gray-700 dark:text-gray-300"
            >
              <option value="recent">Most Recent</option>
              <option value="name">Name</option>
              <option value="status">Status</option>
              <option value="modified">Last Modified</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setView('grid')}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                view === 'grid'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                view === 'list'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {[
            { label: 'Total Projects', value: '12', icon: '📁' },
            { label: 'Active', value: '6', icon: '⚡' },
            { label: 'Completed', value: '4', icon: '✓' },
            { label: 'Pending', value: '2', icon: '⏳' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-8 px-4 sm:px-6 lg:px-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-orange-400 dark:hover:border-orange-600 p-4 sm:p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            {/* Project Thumbnail */}
            <div className={`relative bg-gradient-to-br ${project.color} h-40 sm:h-48 rounded-lg mb-4 overflow-hidden shadow-md group-hover:shadow-lg transition-shadow`}>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
              
              {/* Placeholder Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white rounded-lg"></div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)} backdrop-blur-sm`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-2">
              {/* Title Placeholder */}
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-4/5 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors"></div>
              
              {/* Description Placeholders */}
              <div className="space-y-1.5">
                <div className="h-3.5 bg-gray-200 dark:bg-gray-800 rounded"></div>
                <div className="h-3.5 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full border-2 border-white dark:border-gray-900"
                    ></div>
                  ))}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">2 days ago</span>
              </div>
            </div>

            {/* Hover Actions */}
            <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="flex-1 px-3 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg transition-colors">
                Open
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                •••
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pb-8 px-4 sm:px-6 lg:px-8">
        <button className="px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 border border-gray-300 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-600 rounded-lg transition-all duration-200 hover:shadow-md">
          Load More Projects
        </button>
      </div>
    </div>
  );
}