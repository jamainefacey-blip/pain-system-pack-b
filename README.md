# Website UI + Admin Projects Logic

> ⚠️ **IMPORTANT:** Always run `git pull` before pushing any code.  
> If the `projects.json` file was updated on GitHub and you push without pulling, you will overwrite the live data.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features & Structure](#features--structure)
  - [Public Website](#public-website)
  - [Admin Authentication](#admin-authentication)
  - [Portal Application](#portal-application)
  - [Automations & Project Builder](#automations--project-builder)
  - [Folder Structure](#folder-structure)
  - [Design Theme](#design-theme)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Development](#development)
- [Build & Run (Production)](#build--run-production)
- [Deployment to Netlify](#deployment-to-netlify)
- [Testing](#testing)

---

## Overview

This project includes a complete public website, an admin portal, and a project management system powered by a `projects.json` file stored in GitHub.

The website loads all its project data from `projects.json`, and the admin portal allows CRUD operations that write directly to GitHub using API requests. Each update to the file triggers Netlify to redeploy the site, ensuring all project data stays synced.

### Key Features Added

- Website Projects page displays all items from `projects.json`
- Dynamic project detail pages using `[slug]`
- `/admin/projects` provides:
  - View all
  - Create
  - Edit
  - Delete
  - Bulk edit
  - Search
- `/automations/projects-builder` enables full CRUD as well
- API endpoints created for:
  - Authentication
  - GitHub file CRUD operations
- Website pages reorganized into `/website/`
- Portal dashboard displays data from `projects.json`

### Third Update changes

Added text to the Hero section and created a new Accessibility & Inclusion page with introductory content.

Updated all project pages to reflect statuses: Live, In-Build, and Concept.

Portal functionality remains fully operational and connected to all projects.

Updated project details and descriptions according to specifications.

Added a Search button to the navigation header for global access. Currently, it’s a placeholder.
---

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Node.js**
- **TailwindCSS / CSS Modules / Styled Components**
- **GitHub API** for remote file storage
- **Netlify** deployment

---

## Features & Structure

### Public Website

- Home
- About
- Services
- Accessibility & Inclusion
- Contact
- Projects (dynamic)
- Each project has its own slug route
- Login entry point

### Admin Authentication

- Login uses:
  - `ADMIN_EMAIL`
  - `ADMIN_PASSWORD`
- Signup & reset pages exist as placeholders

### Portal Application

- Dashboard
- My Projects
- Builder
- Notifications
- Logout

### Automations & Project Builder

- CRUD for `projects.json`
- GitHub write operations
- Safe validation


### Folder Structure (Visualized)

- src/
  - app/
    - (auth)/
      - login/page.js
      - signup/page.js
      - forgot-password/page.js
    - website
      - about/page.js
      - contact/page.js
      - services/page.js
      - accessibility-&-inclusion/page.js
      - projects
        - [slug]
          - page.jsx
        - page.jsx
    - api
      - auth
        - check/route.js - checking if user is admin to make changes to rojects.json
        - login/route.js - logging in
      -projects
        - route.js - holds all logic for projects admin CRUD operations to projects.json
    - admin
      - projects
        - AdminProjectsClient.jsx
        - page.jsx
    - portal/
      - dashboard/page.js
      - builder/page.js
      - my-projects/page.js
      - notifications/page.js
      - logout/page.js
    - automations
      - vst-website-automation/
        - home/page.js
        - search/page.js
        - results/page.js
        - map/page.js
        - safety/page.js
      - projects-builder
        -page.jsx
  - components/
    - common/
      - Footer.js
      - Header.js
      - Sidebar.js
      - ThemeToggle.js
    - sections/
      - AboutSection.jsx
      - ContactSection.jsx
      - Hero.jsx
      - MeetTeam.jsx
      - ServicesOffering.jsx
      - Testimonial.js
  - assets/

### Design Theme

- Neutral, generic look:
  - Base colors: black + white
  - Accent color: orange for interactive elements (buttons, highlights)
- Provides a clean, modern appearance that can be easily adapted to a specific use case

---

## Getting Started

### Prerequisites

- Node.js (>= 14.x; or as required by your project)
- npm or yarn
- Git

.env file/environmental variables set with these variables:

ADMIN_EMAIL=email to use for login
ADMIN_PASSWORD=password used for login

GITHUB_TOKEN=github_pat_**** (click on profile -> setting -> Dveloper Option at th left sidebar botton -> Persoal Access Tokens
                              -> Fine-grained tokens -> Give it a name and add read and right permissions to all repository permissions)
GITHUB_OWNER=Github username
GITHUB_REPO=Github repository name(i.e: pain-system-pack-b)
GITHUB_BRANCH=Repo Branch(master/main etc)


---

### Installation

## Local:

https://github.com/Gabriel265/pain-system-pack-b.git
cd thepainsystem

npm install
npm run dev


## Deployment to Netlify:

1. Push your project to GitHub

Netlify pulls from your repo.

2. Connect Netlify to your GitHub repo

Go to Netlify → Add new site → Import from Git

Choose your repo

Leave defaults:

Build: npm run build

Publish: .next

3. Add environment variables

Go to:

Site Settings → Environment Variables

Add:

ADMIN_EMAIL
ADMIN_PASSWORD
GITHUB_TOKEN
GITHUB_OWNER
GITHUB_REPO
GITHUB_BRANCH

4. Enable auto-redeploy

Go to:

Site Settings → Build & Deploy → Continuous Deployment

Turn on:

Auto Publish Deploys

5. How updates work

Admin updates projects via the portal → GitHub file updates

OR admin edits the file directly in GitHub

GitHub commit triggers Netlify

Netlify rebuilds

Website shows updated data



