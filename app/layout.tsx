import { Navigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " p-4"}>
        <div className="min-h-screen bg-background">
          <div className="grid lg:grid-cols-[300px_1fr]">
            <Sidebar />
            <main className="flex flex-col min-h-screen">
              <Navigation />
              <div className="flex-1  px-5 pt-5">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
