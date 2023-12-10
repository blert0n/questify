import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/login", "/sign-up"],
  debug: true,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
