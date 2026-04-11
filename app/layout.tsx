import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { IoLogoElectron } from "react-icons/io5";
import { cn } from "@/lib/utils";


const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "陳柏硯的個人履歷",
  description: "陳柏硯的個人履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">



        <div className="flex h-full">
          {/* 左邊 */}
          <div className="bg-white w-[320px] h-screen p-4 ">

          <div className="flex justify-center items-center w-full">
            <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center ">
              <Image src="/webpage.png" alt="webpage" width={80} height={80} />
            </div>
          </div>

            <div className="text-center">陳柏硯</div>
            <div className="text-center">簡介</div>

            <div className="flex gap-2 ">
                <div><IoLogoElectron /></div>
                <div>社群連結</div>
                <div>社群連結</div>
            </div>
            
            
            <Link href="/about">
              <div className="bg-gray-300 p-[16px] rounded-md">關於我</div>
            </Link>
            <Link href="/hobby">
              <div className="bg-gray-300 p-[16px] mt-2 rounded-md">我的興趣</div>
            </Link>
            <Link href="design">
              <div className="bg-gray-300 p-[16px] mt-2 rounded-md">設計專案</div>
            </Link>
            <Link href="code">
              <div className="bg-gray-300 p-[16px] mt-2 rounded-md">程式專案</div>
            </Link>

            

          </div>

          <div className="bg-gray-50 w-full h-screen ">
            {children}
          </div>
        </div>
        

        
        


        </body>
    </html>
  );
}
