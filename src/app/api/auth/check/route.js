// src/app/api/auth/check/route.js
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const role = cookies().get('user_role')?.value;

  if (role === 'admin') {
    return NextResponse.json({ role: 'admin' });
  }

  return new NextResponse('Unauthorized', { status: 401 });
}