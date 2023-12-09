import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import AppLayout from "@/components/Layout/App";
if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <AppLayout>
        <Component {...pageProps} />;
      </AppLayout>
    </ClerkProvider>
  );
}
