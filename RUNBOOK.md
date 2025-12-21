## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Git

.env file/environmental variables set with these variables:

ADMIN_EMAIL=email to use for login
ADMIN_PASSWORD=password used for login

GITHUB_TOKEN=github_pat_**** (click on profile -> setting -> Developer Option at th left sidebar botton -> Persoal Access Tokens
                              -> Fine-grained tokens -> Give it a name and add read and right permissions to all repository permissions)
GITHUB_OWNER=Github username
GITHUB_REPO=Github repository name(i.e: pain-system-pack-b)
GITHUB_BRANCH=Repo Branch(main) - this is where the projects.json file is read from


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