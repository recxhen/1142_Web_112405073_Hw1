"use client"
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { TbHomeFilled } from "react-icons/tb";

export default function Menu() {
  return (
    <div className="bg-white p-10 h-screen flex justify-center items-center"> 
      {/* 側邊欄主體 */}
      <div className="bg-blue-100 w-[280px] h-fit p-10 rounded-3xl border border-black shadow-lg shadow-black/50">
        
        {/* 回首頁 */}
        <Link href="/">
          <div className="hover:scale-110 transition-transform cursor-pointer w-fit">
            <TbHomeFilled size={30}/>
          </div>          
        </Link>

        {/* 大頭照區 */}
        <div className="flex justify-center items-center w-full mt-4">
          <div className="bg-blue-200 w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center border-black border-2 shadow-md">
            <Image src="/webpage.png" alt="webpage" width={100} height={100} className="object-cover" />
          </div> 
        </div>

        {/* 姓名與標籤 */}
        <div className="text-center text-3xl font-bold mt-4">陳柏硯</div>
        <div className="flex items-center justify-center bg-blue-300 rounded-2xl px-5 h-[40px] border border-blue-700 font-extrabold text-blue-700 mx-auto mt-3">
          NCCU AD X DCT
        </div>

        {/* 社群圖示列 - 這裡要獨立閉合 */}
        <div className="flex gap-6 justify-center mt-6 text-gray-700">
          <Link href="https://www.instagram.com/finvdbsh01/" target="_blank" className="hover:text-pink-600 transition-colors">
            <AiFillInstagram size={30}/>
          </Link>              
          <Link href="https://www.facebook.com/chen.bai.yan.630624?locale=zh_TW" target="_blank" className="hover:text-blue-600 transition-colors">
            <FaFacebook size={30}/>
          </Link>
          <a href="mailto:112405073@g.nccu.edu.tw" className="hover:text-red-500 transition-colors" title="發送郵件給我">
            <BiLogoGmail size={30}/>
          </a>
        </div>

        {/* 選單按鈕區 - 放在社群列外面，才會垂直排列 */}
        <div className="flex flex-col gap-4 mt-8">
          <Link href="/about">
            <div className="bg-white p-3 rounded-xl border-black border font-extrabold text-center hover:bg-blue-300 active:scale-95 transition-all cursor-pointer">
              關於我
            </div>
          </Link>
          <Link href="/hobby">
            <div className="bg-white p-3 rounded-xl border-black border font-extrabold text-center hover:bg-blue-300 active:scale-95 transition-all cursor-pointer">
              我的興趣
            </div>
          </Link>
          <Link href="/design">
            <div className="bg-white p-3 rounded-xl border-black border font-extrabold text-center hover:bg-blue-300 active:scale-95 transition-all cursor-pointer">
              設計專案
            </div>
          </Link>
          <Link href="/programming">
            <div className="bg-white p-3 rounded-xl border-black border font-extrabold text-center hover:bg-blue-300 active:scale-95 transition-all cursor-pointer">
              程式專案
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}