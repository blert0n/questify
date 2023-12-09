import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import AppLayout from "@/components/Layout/App";
import { clerkAppearance } from "@/lib";
if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const noLayout = ["/login", "/sign-up", "/_error"];

export default function App({ Component, pageProps, router }: AppProps) {
  console.log("router", router);
  if (
    noLayout.includes(router.pathname) ||
    router?.pathname.startsWith("/login")
  ) {
    return (
      <ClerkProvider publishableKey={clerkPubKey}>
        <Component {...pageProps} />;
      </ClerkProvider>
    );
  }
  return (
    <ClerkProvider publishableKey={clerkPubKey} appearance={clerkAppearance}>
      <AppLayout>
        <Component {...pageProps} />;
      </AppLayout>
    </ClerkProvider>
  );
}
