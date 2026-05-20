"use client";

import Menu from "@/component/Menu";
import Image from "next/image";
import Link from "next/link";
import { IoCodeSharp } from "react-icons/io5";

export default function Programming() {
  // 將連結 (link) 直接加入資料中
  const projectData = {
    "1": { 
      name: "區塊鏈應用", 
      imageUrl: "/blockchain.png", 
      desc: "p5js框架與數位藝術",
      link: "https://openprocessing.org/@u574646#sketches" // 簡報或作品連結
    },
    "2": { 
      name: "遊戲引擎開發", 
      imageUrl: "/unreal.png", 
      desc: "Unreal遊戲製作",
      link: "https://canva.link/ux41r58cwck1437"
    },
    "3": { 
      name: "別踩白塊兒", 
      imageUrl: "/donttouchthewhite.jpeg", 
      desc: "利用Python製作遊戲",
      link: "https://canva.link/hp82i1dhjwnohlg"
    },
    // "4": { 
    //   name: "行動 App", 
    //   imageUrl: "/mobile-app.png", 
    //   desc: "跨平台框架開發實作。",
    //   link: "https://your-presentation-url.com/app"
    // },
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="sm:block hidden shrink-0">
        <Menu />
      </div>

      <main className="flex-1 p-6 md:p-10 flex items-center justify-center">
        {/* 主方塊外殼 */}
        <div className="w-full h-full bg-slate-50 rounded-[2.5rem] 
                      shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] 
                      border border-white/40 flex flex-col overflow-hidden">
          
          {/* 內部滾動區域並隱藏滑桿 */}
          <div className="flex-1 overflow-y-auto p-10 scrollbar-hide">
            
            <div className="flex items-center gap-5 mb-12">
              <div className="bg-indigo-600 text-white p-4 rounded-2xl shadow-lg shadow-indigo-200">
                <IoCodeSharp size={30} />
              </div>
              <h1 className="text-3xl font-black text-slate-800">程式開發專案</h1>
            </div>

            {/* 網格區域 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.keys(projectData).map((key) => (
                <Link 
                  key={key}
                  href={projectData[key].link} 
                  target="_blank"  // 在新分頁打開簡報
                  rel="noopener noreferrer"
                  className="group relative h-[320px] perspective-1000 block"
                >
                  {/* 立體卡片本體 */}
                  <div className="relative w-full h-full bg-white rounded-3xl p-4 
                                transition-all duration-500 ease-out transform-gpu
                                border border-slate-100
                                shadow-[4px_4px_10px_rgba(0,0,0,0.05)]
                                group-hover:-translate-y-3 group-hover:rotate-x-2
                                group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]">
                    
                    <div className="w-full h-2/3 rounded-2xl overflow-hidden relative mb-4 shadow-inner bg-slate-100">
                      <Image 
                        src={projectData[key].imageUrl} 
                        alt={projectData[key].name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* 懸浮時顯示的提示文字 */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">查看簡報 →</span>
                      </div>
                    </div>

                    <div className="px-2">
                      <h3 className="text-xl font-bold text-slate-800">{projectData[key].name}</h3>
                      <p className="text-sm text-slate-500 mt-1 line-clamp-1">{projectData[key].desc}</p>
                    </div>

                    {/* 立體邊緣裝飾 */}
                    <div className="absolute inset-0 rounded-3xl border-b-4 border-r-4 border-slate-300/20 pointer-events-none" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}