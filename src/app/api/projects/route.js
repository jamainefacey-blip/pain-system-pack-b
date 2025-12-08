export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";




const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const branch = process.env.GITHUB_BRANCH || "master";
const token = process.env.GITHUB_TOKEN;

const githubFilePath = "src/project-store/projects.json";

console.log("ENV CHECK:", {
  owner,
  repo,
  branch,
  hasToken: !!token,
  path: githubFilePath
});
/* --------------------- Helpers --------------------- */

async function getFromGitHub() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${githubFilePath}?ref=${branch}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "User-Agent": "NextApp"
        }
      }
    );

    if (!res.ok) {
      console.log("GET FAILED:", res.status, await res.text());
      return [];
    }

    const data = await res.json();
    const decoded = Buffer.from(data.content, "base64").toString("utf8");
    return JSON.parse(decoded);
  } catch (err) {
    console.log("GET ERROR:", err);
    return [];
  }
}

async function pushToGitHub(updatedJSON) {
  if (!owner || !repo || !token) return;

  const metaRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${githubFilePath}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "User-Agent": "NextApp"
      }
    }
  );

  if (!metaRes.ok) {
    console.log("META FAILED:", metaRes.status, await metaRes.text());
    return;
  }

  const meta = await metaRes.json();

  await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${githubFilePath}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "NextApp"
      },
      body: JSON.stringify({
        message: "Update projects.json",
        content: Buffer.from(updatedJSON).toString("base64"),
        sha: meta.sha,
        branch
      }),
    }
  );
}


function isAdmin(req) {
  const role = req.cookies.get("user_role")?.value;
  return role === "admin";
}



/* --------------------- Routes --------------------- */

export async function GET() {
  const data = await getFromGitHub();
  return NextResponse.json(data);
}

export async function POST(req) {
  if (!isAdmin(req)) return new NextResponse("Unauthorized", { status: 401 });


  const body = await req.json();
  const projects = await getFromGitHub();

  body.id = body.id || Date.now().toString();
  body.createdAt = new Date().toISOString();
  body.updatedAt = new Date().toISOString();

  projects.push(body);

  await pushToGitHub(JSON.stringify(projects, null, 2));

  return NextResponse.json({ success: true, item: body });
}

export async function PUT(req) {
  if (!isAdmin(req)) return new NextResponse("Unauthorized", { status: 401 });


  const body = await req.json();
  let projects = await getFromGitHub();

  projects = projects.map(p =>
    p.id === body.id ? { ...p, ...body, updatedAt: new Date().toISOString() } : p
  );

  await pushToGitHub(JSON.stringify(projects, null, 2));

  return NextResponse.json({ success: true, item: body });
}

export async function DELETE(req) {
  if (!isAdmin(req)) return new NextResponse("Unauthorized", { status: 401 });

  const id = new URL(req.url).searchParams.get("id");
  let projects = await getFromGitHub();

  projects = projects.filter(p => p.id !== id);

  await pushToGitHub(JSON.stringify(projects, null, 2));

  return NextResponse.json({ success: true });
}
