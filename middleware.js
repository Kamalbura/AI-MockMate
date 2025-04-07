import { authMiddleware } from "@clerk/nextjs/server";

// Simple authentication middleware with fallback for development
export default process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  ? authMiddleware({
      publicRoutes: ["/", "/api/webhook"],
    })
  : (req) => Response.next();

// Route matcher configuration
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};