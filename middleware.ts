import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // publicRoutes: ["/login", "/sign-up", "/api/graphql", "form/:id"],
  publicRoutes: ["/login(.*)", "/sign-up(.*)", "/api(.*)", "/form/(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
