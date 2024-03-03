"use client";

import { ThemeProvider } from "next-themes";

import NextTopLoader from "nextjs-toploader";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <NextTopLoader color="#019342" showSpinner={false} />
      {children}
    </ThemeProvider>
  );
}
