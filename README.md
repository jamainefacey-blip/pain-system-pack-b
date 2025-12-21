pain-system-pack-b Website Application
Overview 
The websitesholds both placeholder pages and functional pages.
Placeholder pages include: Functionality starts from login where we use environmental variables no hardcoded credentials. The other functionality is on projects with with CRUD operations working with the projects.json file as the database.

1. Website (Public Area) 

Header 
The top navigation includes: - Home - About - Contact - Accessibility - Login (Button)

Footer 
Mirrors the header for consistent navigation with some additional links if need be. 

Homepage 

The homepage contains: - Hero area - About section - Services preview - Contact section

header and footer files are in src/components/common/ folder. home page sections are in src/components/sections/ folder. 
Website pages are in src/app/website/ folder.

2. Administrator Area
Entry point is the Login

Uses environmental variables that have to be set in .env file locally or in vercel/netlify environmental variables sections.
variable names are ADMIN_EMAIL & ADMIN_PASSWORD. here we have three main sections admin, portal and automation folders. admin folders holds a projects folder that holds the CRUD operations on the projects. Automation has two folders projects-builder also projects CRUD operations and vst-website-sutomation for vst place holder. Laastly we have the portal folder which has /builder, /dashboard, /notifcation and /projects folders. in each main folder for the three sections there is alayout file that hold the rules on which buttons from the sidebar, to display depensing on which section we are for easy navigation between the three sections.

          i. ADMIN SYSTEM
              - Admin login; project table; create/edit/delete; JSON sync

          ii.PORTAL (PRIVATE / ADMIN — PHASE 1)
              - Admin login only
              - Project CRUD (create, read, update, delete)
              - Status tagging: idea / build / live

          iii. Autmation

              i. PROJECTS BUILDER
                    - Create, edit, delete projects; toggle Draft/Live; write to JSON.

              ii. VST AUTOMATION FOLDER
                    - VST-specific only; no global logic.

3. All routing is done with files in the folder src/app/api/ folder. 
  i.auth - this holds route for login credentials check and also a route to check if user is admin or not
  ii. projects - this now hold the admin side logic for CRUD operation to the projects.json file in github. Since we cant change the fie directly in production in vercel/netlif since its all static after build, we use this fiel which changes the actual projects.json file stored in github.

4. FOLDER STRUCTURE
/src/components
    - /common - footer, header and sidebar
    - /section - landing page sections (hero,about,services,contact)
/src/app/
    - /(auth) - login page(login)
    - /project-store/projects.json
    - /admin
    - /portal
      - /builder
      - /dashboard
      - /notifications
      - /projects
    - /website
      - /about
      - /accessibility-&-inclusion
      - /contact
      - /projects
      - /services
    - /automation/projects-builder
    - /automation/vst-website-automation
    - /api
      - /auth
        - check
        - login
      - /projects

/src/project-store/projects.json

5. Deloyemnt. Now we use two main branches for this, the main branch which is set for deployment for production in vercel and the ai-deploy branch which is used for development. When there is a push on ai-deploy branch 

6. code is in easy structure and format for easy AI assited development. Code can be given to ai models and can easily understand structure with the imports and comments in most files.