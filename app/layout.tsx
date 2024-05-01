import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import RIghtbar from "@/components/layout/RIghtbar";
import Story from "@/components/layout/Story";

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
        <div className="flex justify-between bg-black m-0 p-0 ">
          {/* checck  */}
          <div className="hidden md:inline overflow-hidden ">
            <Sidebar />
          </div>

          <div className=" flex flex-col">
            <div className="md:hidden w-screen">
              <Navbar />
            </div>
            <div className="flex flex-1">{children}</div>
          </div>

          <div className="hidden md:flex ">
            <RIghtbar />
          </div>
        </div>
      </body>
    </html>
  );
}
