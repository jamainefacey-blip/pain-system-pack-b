import { NextResponse } from 'next/server';

export function middleware(request) {
  const role = request.cookies.get('user_role')?.value;

  // Protect all /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (role !== 'admin') {
      return NextResponse.redirect(new URL('/(auth)/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};