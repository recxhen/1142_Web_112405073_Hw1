"use client";

import Menu from "@/component/Menu";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Design() {
  const projectData = {
    "1": { 
      name: "人機互動設計", 
      imageUrl: "/114-1sportsappredesign.png",
      previewUrl: "https://canva.link/d5hnnk2gknbs8rs", // 這裡放入 Canva 或作品連結
      desc: "專注於使用者流暢度的運動 APP 重新設計案。"
    },
    "2": { 
      name: "人機介面", 
      imageUrl: "/歐歐睏海報.png",
      previewUrl: "https://www.figma.com/proto/qCBo1wCdjbeOR3TELYVZ3h/%E4%BA%BA%E6%A9%9F%E4%BB%8B%E9%9D%A2-%E6%9C%9F%E6%9C%AB%E5%B0%88%E6%A1%88?node-id=288-698&p=f&t=N8d01Wse7KW1mEVS-1&scaling=scale-down&content-scaling=fixed&page-id=206%3A626",
      desc: "透過視覺心理學優化的睡眠管理介面。"
    },
    // 你可以依序增加第三個、第四個專案...
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 行動端返回按鈕 */}
      <Link href="/" className="sm:hidden absolute top-4 left-4 z-20 bg-white p-2 rounded-full shadow-lg">
        <IoMdArrowRoundBack size={24} />
      </Link>

      {/* 左側選單 */}
      <div className="sm:block hidden shrink-0">
        <Menu />
      </div>

      {/* 右側內容：立體化容器 */}
      <main className="flex-1 p-6 md:p-10 flex items-center justify-center overflow-hidden">
        
        {/* 主方塊外殼 (Neumorphism Style) */}
        <div className="w-full h-full bg-slate-50 rounded-[3rem] 
                      shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),20px_20px_40px_rgba(0,0,0,0.1)] 
                      border border-white/50 flex flex-col overflow-hidden relative">
          
          {/* 內部滾動區域並隱藏滑桿 (需搭配 global.css 的 scrollbar-hide) */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-10">
            
            {/* 標題區 */}
            <div className="flex gap-6 mb-12 items-center">
              <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 
                            rounded-2xl w-16 h-16 shadow-lg shadow-blue-100 text-white shrink-0">
                <MdOutlineDesignServices size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">設計專案</h1>
                <p className="text-slate-500 font-medium mt-1">這裡收錄我的各種介面規劃專案</p>
              </div>
            </div>

            {/* 網格區域：一排三個 (md:grid-cols-3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.keys(projectData).map((key) => (
                <Link 
                  key={key}
                  href={projectData[key].previewUrl} 
                  target="_blank" 
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
                    
                    {/* 圖片預覽區 */}
                    <div className="w-full h-2/3 rounded-2xl overflow-hidden relative mb-4 shadow-inner bg-slate-100">
                      <Image 
                        src={projectData[key].imageUrl} 
                        alt={projectData[key].name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* 懸浮提示 */}
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold bg-blue-600/60 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
                          查看作品細節 →
                        </span>
                      </div>
                    </div>

                    {/* 文字描述區 */}
                    <div className="px-2">
                      <h3 className="text-xl font-bold text-slate-800">{projectData[key].name}</h3>
                      <p className="text-sm text-slate-500 mt-1 line-clamp-1">{projectData[key].desc}</p>
                    </div>

                    {/* 立體視覺邊緣 (厚度感) */}
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