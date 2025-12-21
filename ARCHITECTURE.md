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

- Login uses variables:
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