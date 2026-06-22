import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueueProvider } from "@/components/providers/queue-provider";
import { QueuePanel } from "@/components/queue-panel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Alkot Downloader",
    template: "%s | Alkot Downloader",
  },
  description: "Download videos and audio easily with Alkot Downloader.",
  keywords: ["video downloader", "audio downloader", "alkot downloader"],
  authors: [{ name: "Aalekh Sharma" }],
  creator: "Aalekh Sharma",
  metadataBase: new URL("https://your-render-url.onrender.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-render-url.onrender.com",
    title: "Alkot Downloader",
    description: "Fast video and audio downloads.",
    siteName: "Alkot Downloader",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alkot Downloader",
    description: "Fast video and audio downloads.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <QueueProvider>
              <Header />
              <main className="flex-1 flex flex-col">{children}</main>
              <Footer />
              <Toaster position="top-center" />
              <QueuePanel />
            </QueueProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
