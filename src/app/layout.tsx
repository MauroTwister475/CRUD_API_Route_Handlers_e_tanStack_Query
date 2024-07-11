import { QueryClientProviderNext } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRUD | API Route and TanStack Query",
  description: "Created by Mauro Dennis Raimundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProviderNext>{children}</QueryClientProviderNext>
      </body>
    </html>
  );
}
