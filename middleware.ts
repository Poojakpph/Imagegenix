import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { authMiddleware, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

// Define your authMiddleware configuration
const auth = authMiddleware({
  publicRoutes: ['/api/webhooks/clerk'],
});

// Define your clerkMiddleware configuration
const clerk = clerkMiddleware({
 
});

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  // Apply Clerk middleware
  const clerkResponse = await clerk(req, event);

  // Apply auth middleware if the request is not public
  if (!isPublicRoute(req)) {
    return auth(req, event);
  }

  return clerkResponse;
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
