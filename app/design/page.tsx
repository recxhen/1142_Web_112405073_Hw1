
"use client";

import Menu from "@/component/Menu";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

// 1. 先定義結構
interface DesignProject {
  name: string;
  imageUrl: string;
  previewUrl: string;
  desc: string;
}

export default function Design() {
  // 2. 使用 Record 強制定義 key 為 string
  const projectData: Record<string, DesignProject> = {
    "1": { 
      name: "人機互動設計", 
      imageUrl: "/114-1sportsappredesign.png",
      previewUrl: "https://canva.link/d5hnnk2gknbs8rs",
      desc: "專注於使用者流暢度的運動 APP 重新設計案。"
    },
    "2": { 
      name: "人機介面", 
      imageUrl: "/歐歐睏海報.png",
      previewUrl: "https://www.figma.com/proto/qCBo1wCdjbeOR3TELYVZ3h/%E4%BA%BA%E6%A9%9F%E4%BB%8B%E9%9D%A2-%E6%9C%9F%E6%9C%AB%E5%B0%88%E6%A1%88?node-id=288-698&p=f&t=N8d01Wse7KW1mEVS-1&scaling=scale-down&content-scaling=fixed&page-id=206%3A62",
      desc: "透過視覺心理學優化的睡眠管理介面。"
    },
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Link href="/" className="sm:hidden absolute top-4 left-4 z-20 bg-white p-2 rounded-full shadow-lg">
        <IoMdArrowRoundBack size={24} />
      </Link>

      <div className="sm:block hidden shrink-0">
        <Menu />
      </div>

      <main className="flex-1 p-6 md:p-10 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-slate-50 rounded-[3rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),20px_20px_40px_rgba(0,0,0,0.1)] border border-white/50 flex flex-col overflow-hidden relative">
          <div className="flex-1 overflow-y-auto scrollbar-hide p-10">
            <div className="flex gap-6 mb-12 items-center">
              <div className="flex items-center justify-center bg-linear-to-br from-blue-500 to-blue-700 rounded-2xl w-16 h-16 shadow-lg shadow-blue-100 text-white shrink-0">
                <MdOutlineDesignServices size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">設計專案</h1>
                <p className="text-slate-500 font-medium mt-1">這裡收錄我的各種介面規劃專案</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.keys(projectData).map((key) => {
                // *** 關鍵修復：明確告訴 TS 這是一個合法的 Key ***
                const project = projectData[key as keyof typeof projectData];
                
                return (
                  <Link 
                    key={key}
                    href={project.previewUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative h-[320px] perspective-1000 block"
                  >
                    <div className="relative w-full h-full bg-white rounded-3xl p-4 transition-all duration-500 ease-out transform-gpu border border-slate-100 shadow-[4px_4px_10px_rgba(0,0,0,0.05)] group-hover:-translate-y-3 group-hover:rotate-x-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]">
                      <div className="w-full h-2/3 rounded-2xl overflow-hidden relative mb-4 shadow-inner bg-slate-100">
                        <Image 
                          src={project.imageUrl} 
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white font-bold bg-blue-600/60 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">查看作品細節 →</span>
                        </div>
                      </div>
                      <div className="px-2">
                        <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
                        <p className="text-sm text-slate-500 mt-1 line-clamp-1">{project.desc}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}