// src/app/api/projects/route.js
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;
const PATH = 'src/project-store/projects.json';
const BRANCH = process.env.GITHUB_BRANCH || 'master';

let cachedProjects = null;
let cachedSha = null;

// VALIDATE ENV VARS
if (!OWNER || !REPO || !process.env.GITHUB_TOKEN) {
  console.error('Missing GitHub config:', { OWNER, REPO, hasToken: !!process.env.GITHUB_TOKEN });
}

async function getFile() {
  try {
    const { data } = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path: PATH,
      ref: BRANCH,
    });
    cachedSha = data.sha;
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    cachedProjects = JSON.parse(content);
    return cachedProjects;
  } catch (err) {
    console.error('GitHub getContent failed:', err.message);
    if (err.status === 404) {
      cachedProjects = [];
      await saveToGitHub();
      return [];
    }
    return []; // Return empty on error
  }
}

async function saveToGitHub() {
  if (!cachedProjects) return;
  const content = JSON.stringify(cachedProjects, null, 2);
  try {
    await octokit.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: PATH,
      message: `Update projects — ${new Date().toISOString()}`,
      content: Buffer.from(content).toString('base64'),
      sha: cachedSha,
      branch: BRANCH,
    });
  } catch (err) {
    console.error('GitHub save failed:', err.message);
  }
}

export async function GET(request) {
  try {
    const projects = cachedProjects || await getFile();
    const { searchParams } = new URL(request.url);
    const skip = parseInt(searchParams.get('skip') || '0');
    const limit = parseInt(searchParams.get('limit') || '50');
    const result = projects.slice(skip, skip + limit);
    return Response.json(result);
  } catch (err) {
    console.error('GET /api/projects error:', err);
    return Response.json([], { status: 500 });
  }
}

export async function POST(request) {
  try {
    const project = await request.json();
    const projects = cachedProjects || await getFile();
    const newProject = {
      ...project,
      id: project.id || Date.now().toString(),
      createdAt: project.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    projects.push(newProject);
    cachedProjects = projects;
    await saveToGitHub();
    return Response.json(newProject, { status: 201 });
  } catch (err) {
    console.error('POST error:', err);
    return new Response('Failed', { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const updates = await request.json();
    const projects = cachedProjects || await getFile();
    const index = projects.findIndex(p => p.id === updates.id);
    if (index === -1) return new Response('Not found', { status: 404 });
    projects[index] = { ...projects[index], ...updates, updatedAt: new Date().toISOString() };
    cachedProjects = projects;
    await saveToGitHub();
    return Response.json(projects[index]);
  } catch (err) {
    console.error('PUT error:', err);
    return new Response('Failed', { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const projects = cachedProjects || await getFile();
    cachedProjects = projects.filter(p => p.id !== id);
    await saveToGitHub();
    return new Response('OK');
  } catch (err) {
    console.error('DELETE error:', err);
    return new Response('Failed', { status: 500 });
  }
}