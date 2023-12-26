import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import AppLayout from "@/components/Layout/App";
import { clerkAppearance, apolloClient } from "@/lib";
import { ApolloProvider } from "@apollo/client";
import FontProvider from "@/components/Layout/FontProvider";
if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const noLayout = ["/login", "/sign-up", "/_error"];

export default function App({ Component, pageProps, router }: AppProps) {
  if (
    noLayout.includes(router.pathname) ||
    router?.pathname.startsWith("/login") ||
    router?.pathname.startsWith("/sign-up")
  ) {
    return (
      <ClerkProvider publishableKey={clerkPubKey}>
        <Component {...pageProps} />
      </ClerkProvider>
    );
  }
  return (
    <ClerkProvider publishableKey={clerkPubKey} appearance={clerkAppearance}>
      <ApolloProvider client={apolloClient}>
        <AppLayout>
          <FontProvider>
            <Component {...pageProps} />
          </FontProvider>
        </AppLayout>
      </ApolloProvider>
    </ClerkProvider>
  );
}
