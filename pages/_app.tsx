import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import AppLayout from "@/components/Layout/App";
import { clerkAppearance, apolloClient } from "@/lib";
import {
  barlow,
  inter,
  lato,
  lobster,
  lora,
  merriweather,
  nunito,
  openSans,
  oswald,
  roboto,
  robotoCondensed,
  robotoMono,
  ubuntu,
} from "@/lib/fonts";
import { ApolloProvider } from "@apollo/client";
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
          <div
            className={`${barlow.variable} ${inter.variable} ${lato.variable} ${lobster.variable} ${lora.variable} ${merriweather.variable} ${nunito.variable} ${openSans.variable} ${oswald.variable} ${roboto.variable} ${robotoCondensed.variable} ${robotoMono.variable} ${ubuntu.variable}`}
          >
            <Component {...pageProps} />
          </div>
        </AppLayout>
      </ApolloProvider>
    </ClerkProvider>
  );
}
