import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Otavio | Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer and AI Engineer specializing in Next.js, Node.js, LangChain, and LLM integrations. Building AI-powered applications and chatbots.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "LangChain",
    "LLM",
    "Chatbots",
  ],
  authors: [{ name: "Luis Otavio" }],
  openGraph: {
    title: "Luis Otavio | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer and AI Engineer specializing in Next.js, Node.js, and LLM integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
