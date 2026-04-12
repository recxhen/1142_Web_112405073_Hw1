"use client"
import Image from "next/image";
import Link from "next/link";
import { IoLogoElectron } from "react-icons/io5";

export default function Menu() {
  return (
    <>
      <div className="bg-white w-[320px] h-full p-4 ">

      <Link href="/">
            <div>
              HOME icon
            </div>          
      </Link>

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
          <Link href="programming">
            <div className="bg-gray-300 p-[16px] mt-2 rounded-md">程式專案</div>
          </Link>

          

        </div>
      </>

  );
}
 