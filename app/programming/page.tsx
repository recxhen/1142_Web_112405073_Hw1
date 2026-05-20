"use client";

import Menu from "@/component/Menu";
import Image from "next/image";
import Link from "next/link";
import { IoCodeSharp } from "react-icons/io5";

// 1. 定義型別 (放在組件外)
interface ProgramProject {
  name: string;
  imageUrl: string;
  desc: string;
  link: string;
}

export default function Programming() {
  // 2. 定義資料 (確保 Record 型別解決之前的 index 錯誤)
  const projectData: Record<string, ProgramProject> = {
    "1": { 
      name: "區塊鏈應用", 
      imageUrl: "/blockchain.png", 
      desc: "智能合約開發與 Web3 整合。",
      link: "https://openprocessing.org/@u574646#sketches" 
    },
    "2": { 
      name: "遊戲引擎開發", 
      imageUrl: "/unreal.png", 
      desc: "Unreal 遊戲美術與製作",
      link: "https://canva.link/5kkad1cpoqnfwnj"
    },
    "3": { 
      name: "別踩白塊兒", 
      imageUrl: "/donttouchthewhite.jpeg", 
      desc: "Python 2D 遊戲開發。",
      link: "https://canva.link/hp82i1dhjwnohlg"
    }
  }; // <--- 檢查這裡是否只有一個分號，沒有多餘的 }

  // 3. 正確的 return 區塊
  return (
    <div className="flex h-screen overflow-hidden">
      {/* 左側選單 */}
      <div className="sm:block hidden shrink-0">
        <Menu />
      </div>

      {/* 右側內容：立體化容器 */}
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
                    
                    <div className="w-full h-2/3 rounded-2xl overflow-hidden relative mb-4 shadow-inner bg-slate-100">
                      <Image 
                        src={projectData[key].imageUrl} 
                        alt={projectData[key].name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">查看簡報 →</span>
                      </div>
                    </div>

                    <div className="px-2">
                      <h3 className="text-xl font-bold text-slate-800">{projectData[key].name}</h3>
                      <p className="text-sm text-slate-500 mt-1 line-clamp-1">{projectData[key].desc}</p>
                    </div>

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