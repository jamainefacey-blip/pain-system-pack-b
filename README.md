# Websiste UI + Admin Projects Logic

WARNING: ALways run git pull before pushing code to sync with the projects.json file otherwise it will be overiddien if local commits are pushed.
---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features & Structure](#features--structure)
  - [Public Website](#public-website)
  - [Portal (Authentication) Section](#portal-authentication-section)
  - [VST Application Section](#vst-application-section)
  - [Folder Structure (Visualized)](#folder-structure-visualized)
  - [Design Theme](#design-theme)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Development](#development)
- [Build & Run (Production)](#build-run-production)
- [Testing](#testing)
- [Deployment](#deployment)

---

## Overview

The dummy web application is implemented according to Phase 1 requirements. It includes:

- Placeholder pages, navigation flows, layouts, and a clean folder structure
- A neutral theme (black, white, orange accents)
- Distinct sections for Public Website, Portal (authentication), and VST application areas

Key notes:
- Some components currently use structural placeholder blocks

Changes:  - Added front end page that views projects from the projects.json file in built website.
          - LOGIN goes to portal and can navigate to all admin related routes: automation/projects builder, vst, admin/projects etc
          - Admin page route to view all projects, add new projects and perform other CRUD operations. Even allows bulk edits. Search feature
          -impeented automation/projects-buider to allow CRUD
            Note: Admin fetches and performs CRUD operations to the github file. So dont forget to set the required .env files
            -moved all website pages into a website folder as per instructions.
            added api folder that holds routes to check if user is logged in, and admin another  route for making changes to projects.json

---

## Tech Stack

- Next.js 16
- React 19+ (App Router)
- Styling: CSS Modules / Tailwind CSS / Styled Components 
- Node.js
- npm or yarn
- Github - Project.json file storage

---

## Features & Structure

### Public Website

- Header with navigation:
  - Home
  - About
  - Contact
  - Services
  - Login
- Footer (consistent navigation)
- Homepage sections:
  - Hero
  - About
  - Services preview
  - Contact
  - Optional testimonial (toggle as needed)

### Admin Authentication Section

- Entry point: Login button on header navigates to the Login Page
-Login page uses .env variables: ADMIN_EMAIL and ADMIN_PASSWORD
- Authentication placeholders:
  - Login 
  - Signup
  - Forgot Password
  - (Note: No real authentication logic yet for signu and forgot password)

### Portal Application Section
- Entry via Portal Home button on side bar
- Portal Dashboard (static routing):
  - Sidebar navigation:
    - Dashboard
    - My Projects
    - Notifications
    - Builder
    - Logout (returns to login)

### VST Application Section

- Entry via VST Home button on side bar
- VST home with a sidebar to:
  - VST Home
  - Search
  - Results
  - Map
  - Safety
- No API calls or data handling in this stage

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

### Installation

```bash  
# clone the repository  
git clone https://github.com/Gabriel265/thepainsystem.git  
cd thepainsystem  

# install dependencies  
npm install  
# or  
yarn install 


# start in development mode (hot-reload)
npm run dev
# or
yarn dev


# build for production
npm run build
# start the production server
npm run start