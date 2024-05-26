import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Rightbar from "@/components/layout/rightbar";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insta Clone",
  description: "Top level clone",
  authors: [{ name: "flashey", url: "github.com/ronitey35" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between">
          <Sidebar />
          <div className="flex-grow overflow-y-scroll">{children}</div>

          <Rightbar />
        </div>
      </body>
    </html>
  );
}
