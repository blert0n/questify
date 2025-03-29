import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import AppLayout from "@/components/Layout/App";
import { clerkAppearance, QuestifyApolloProvider } from "@/lib";
import FontProvider from "@/components/Layout/FontProvider";
import { Analytics } from "@vercel/analytics/react";

if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const noLayout = ["/login", "/sign-up", "/_error"];

export default function App({ Component, pageProps, router }: AppProps) {
  if (
    noLayout.includes(router.pathname) ||
    router?.pathname.startsWith("/login") ||
    router?.pathname.startsWith("/sign-up") ||
    router?.pathname === "/form/[id]" ||
    router?.pathname === "/form/[id]/success"
  ) {
    return (
      <ClerkProvider publishableKey={clerkPubKey}>
        <Analytics />
        <QuestifyApolloProvider>
          <FontProvider>
            <Component {...pageProps} />
          </FontProvider>
        </QuestifyApolloProvider>
      </ClerkProvider>
    );
  }
  return (
    <ClerkProvider publishableKey={clerkPubKey} appearance={clerkAppearance}>
      <Analytics />
      <QuestifyApolloProvider>
        <AppLayout>
          <FontProvider>
            <Component {...pageProps} />
          </FontProvider>
        </AppLayout>
      </QuestifyApolloProvider>
    </ClerkProvider>
  );
}
