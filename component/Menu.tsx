"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { TbHomeFilled } from "react-icons/tb";

export default function Menu() {
  return (
    <div className="bg-transparent p-4 md:p-8 h-full flex items-stretch">
      {/* 側邊欄主體：立體突起方塊 */}
      <div className="bg-slate-100 w-[280px] h-full p-10 rounded-[3rem] 
                    shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] 
                    border border-white/50 flex flex-col items-center overflow-y-auto">
        
        {/* 回首頁：立體小圓鈕 */}
        <Link href="/" className="self-start">
          <div className="bg-slate-100 p-3 rounded-2xl shadow-[4px_4px_8px_#cbcbcb,-4px_-4px_8px_#ffffff] 
                        hover:shadow-[inset_2px_2px_5px_#cbcbcb,inset_-2px_-2px_5px_#ffffff] 
                        transition-all cursor-pointer text-slate-600 active:scale-95">
            <TbHomeFilled size={24}/>
          </div>          
        </Link>

        {/* 大頭照區：內嵌凹陷感 */}
        <div className="flex justify-center items-center w-full mt-6">
          <div className="bg-slate-100 w-[110px] h-[110px] rounded-full p-1
                        shadow-[inset_6px_6px_12px_#cbcbcb,inset_-6px_-6px_12px_#ffffff] 
                        flex justify-center items-center overflow-hidden">
            <Image src="/webpage.png" alt="webpage" width={100} height={100} className="rounded-full object-cover shadow-sm" />
          </div> 
        </div>

        {/* 姓名與標籤 */}
        <div className="text-center text-2xl font-black text-slate-800 mt-6 tracking-tight">陳柏硯</div>
        <div className="flex items-center justify-center bg-blue-500 rounded-xl px-5 py-2 
                      shadow-[4px_4px_10px_rgba(59,130,246,0.3)] text-white text-xs font-black mx-auto mt-4 uppercase tracking-wider">
          NCCU AD X DCT
        </div>
        
        {/* 社群圖示：微立體感 */}
        <div className="flex gap-6 justify-center mt-8">
          {[
            { icon: <AiFillInstagram size={24}/>, href: "https://www.instagram.com/finvdbsh01/", color: "hover:text-pink-500" },
            { icon: <FaFacebook size={22}/>, href: "https://www.facebook.com/chen.bai.yan.630624?locale=zh_TW", color: "hover:text-blue-600" },
            { icon: <BiLogoGmail size={24}/>, href: "mailto:112405073@g.nccu.edu.tw", color: "hover:text-red-500" }
          ].map((item, i) => (
            <Link key={i} href={item.href} target="_blank" 
                  className={`bg-slate-100 p-3 rounded-xl shadow-[4px_4px_8px_#cbcbcb,-4px_-4px_8px_#ffffff] 
                            ${item.color} text-slate-500 transition-all active:shadow-inner active:scale-95`}>
              {item.icon}
            </Link>
          ))}
        </div>

        {/* 選單按鈕區：垂直排列立體按鈕 */}
        <div className="flex flex-col gap-5 mt-10 w-full">
          {[
            { name: "關於我", href: "/about" },
            { name: "我的興趣", href: "/hobby" },
            { name: "設計專案", href: "/design" },
            { name: "程式專案", href: "/programming" }
          ].map((btn) => (
            <Link href={btn.href} key={btn.href}>
              <div className="bg-slate-100 py-4 px-6 rounded-2xl font-black text-slate-700 text-center
                            shadow-[6px_6px_12px_#cbcbcb,-6px_-6px_12px_#ffffff] 
                            hover:shadow-[2px_2px_5px_#cbcbcb,-2px_-2px_5px_#ffffff]
                            hover:-translate-y-0.5
                            active:shadow-[inset_4px_4px_8px_#cbcbcb,inset_-4px_-4px_8px_#ffffff]
                            active:translate-y-0.5
                            transition-all cursor-pointer">
                {btn.name}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}