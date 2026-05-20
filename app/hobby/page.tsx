"use client";

import { useState } from "react";
import Menu from "@/component/Menu";
import Image from "next/image";
import Link from "next/link";
import { FaGamepad, FaCat, FaCameraRetro, FaUtensils } from "react-icons/fa";
import { IoMdArrowRoundBack, IoMdClose } from "react-icons/io";
import React from "react"; // 確保有導入 React

export default function Hobby() {
// 在組件內部，修改 useState 這行
const [activeAlbum, setActiveAlbum] = useState<HobbyItem | null>(null);
  // 1. 先定義單個興趣項目的介面
interface HobbyItem {
  title: string;
  icon: React.ReactNode; 
  color: string;
  description: string;
  images: string[];
}

// 2. 使用 Record<string, HobbyItem> 來定義資料物件
const hobbyData: Record<string, HobbyItem> = {
  cat: {
    title: "貓貓",
    icon: <FaCat size={30} />,
    color: "from-orange-400 to-amber-600",
    description: "這是我的貓貓夥伴，陪伴我度過寫程式的每一天。",
    images: ["/cat.png", "/cat2.png", "/cat3.png"]
  },
  foto: {
    title: "Foto",
    icon: <FaCameraRetro size={30} />,
    color: "from-blue-400 to-indigo-600",
    description: "透過鏡頭記錄生活，捕捉那些稍縱即逝的美好瞬間。",
    images: ["/pic.jpg", "/pic1.jpg", "/pic2.jpg"]
  },
  food: {
    title: "Food",
    icon: <FaUtensils size={30} />,
    color: "from-rose-400 to-red-600",
    description: "熱愛探索巷弄美食，對味道與視覺擺盤有一定的堅持。",
    images: ["/foodie.png"]
  }
};

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 行動端返回 */}
      <Link href="/" className="sm:hidden absolute left-4 top-4 z-20 bg-white p-2 rounded-full shadow-lg">
        <IoMdArrowRoundBack size={24} />
      </Link>
      
      <div className="sm:block hidden shrink-0">
        <Menu />
      </div>

      {/* 右側立體容器 */}
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full max-w-7xl bg-slate-50 rounded-[3rem] 
                      shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),20px_20px_40px_rgba(0,0,0,0.1)] 
                      border border-white/50 flex flex-col overflow-hidden">
          
          <div className="flex-1 overflow-y-auto p-8 md:p-12">
            {/* 標題區 */}
            <div className="flex gap-6 mb-12 items-center">
              <div className="flex items-center justify-center bg-gradient-to-br from-pink-400 to-rose-600 
                            rounded-2xl w-16 h-16 shadow-lg shadow-rose-100 text-white shrink-0">
                <FaGamepad size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">我的興趣</h1>
                <p className="text-slate-500 font-medium mt-1">我與我的日常</p>
              </div>
            </div>

            {/* 興趣大項目排列 - 一排三個 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {Object.keys(hobbyData).map((key) => (
                <div 
                  key={key}
                  onClick={() => setActiveAlbum(hobbyData[key])}
                  className="group relative h-[400px] cursor-pointer perspective-1000"
                >
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden 
                                shadow-xl transition-all duration-500 group-hover:-translate-y-4 
                                group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-white">
                    {/* 背景首圖 */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${hobbyData[key].images[0]})` }}
                    />
                    {/* 漸層遮罩 */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`} />
                    
                    {/* 圖示與文字 */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${hobbyData[key].color} mb-4 shadow-lg`}>
                        {hobbyData[key].icon}
                      </div>
                      <h2 className="text-3xl font-black tracking-widest">{hobbyData[key].title}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* 相冊彈出 Modal */}
      {activeAlbum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-6xl h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95">
            
            {/* 關閉按鈕 */}
            <button 
              onClick={() => setActiveAlbum(null)}
              className="absolute top-6 right-6 z-10 bg-slate-100 hover:bg-slate-200 p-3 rounded-full transition-colors"
            >
              <IoMdClose size={24} />
            </button>

            {/* 彈窗內容區 */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${activeAlbum.color} text-white`}>
                  {activeAlbum.icon}
                </div>
                <h2 className="text-4xl font-black text-slate-800">{activeAlbum.title} 相簿</h2>
              </div>

              {/* 相片網格 */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {activeAlbum.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border-4 border-white">
                    <Image src={img} alt="hobby" fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* 下方描述文字區 */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-2">Description</h4>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {activeAlbum.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}