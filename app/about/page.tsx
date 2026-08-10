"use client";

import Image from "next/image";
import Menu from "@/component/Menu";
import Link from "next/link";
import { PiAcornBold } from "react-icons/pi";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function About() {
  const experiences = [
    {
      title: "政大通NCCUPass",
      time: "2025 - 2026",
      desc: "我負責思考包括社群媒體與線下活動等各種創意的推廣方式促使下載量增長，透過對數據洞察在校學生喜好",
      tags: ["將互動率穩定維持在 5% 的高水準", "負責與團隊溝通協作，確保進度如期完成"],
      color: "bg-blue-500"
    },
    {
      title: "2026政大徵才月",
      time: "2025 - 2026",
      desc: "共同策劃並執行校園最大規模的線下活動，並專注於優化博覽會整體參與體驗。",
      tags: ["展現靈活的反應能力與執行力", "負責對組間的溝通，長期與行銷組協作"],
      color: "bg-emerald-500"
    },
    {
      title: "政大策略管理中心",
      time: "2024 - 2026",
      desc: "整理出版文件、公文收發、檔案歸檔、文具採購、接待訪客、費用報支及設備維護",
      tags: ["協助主管日常辦公室管理", "迎合主管的的喜好"],
      color: "bg-amber-500"
    },
    {
      title: "凱絡媒體服務股份有限公司",
      time: "2026 - 2026",
      desc: "掌握全媒體特性與投放機制，能透過數據分析解讀廣告成效並優化素材",
      tags: ["媒體企劃", "數據分析","廣告優化"],
      color: "bg-red-500"
    }
  ];

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

      {/* 右側內容：立體化方塊包裝區 */}
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center overflow-hidden">
        
        {/* 立體主方塊外殼 */}
        <div className="w-full h-full max-w-5xl bg-slate-50 rounded-[3rem] 
                      shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),20px_20px_40px_rgba(0,0,0,0.1)] 
                      border border-white/50 flex flex-col overflow-hidden relative">
          
          {/* 內部滾動區域 */}
          <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
            
            {/* 標題區 */}
            <div className="flex gap-6 mb-12 items-center">
              <div className="flex items-center justify-center bg-linear-to-br from-green-400 to-green-600 
                            rounded-2xl w-16 h-16 shadow-lg shadow-green-100 text-white shrink-0">
                <PiAcornBold size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">關於我</h1>
                <p className="text-slate-500 font-medium mt-1">大學的經歷與成長軌跡</p>
              </div>
            </div>

            {/* 經歷列表：由上至下排列 */}
            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-[2rem] p-8 
                            border border-slate-100 shadow-[4px_4px_20px_rgba(0,0,0,0.05)]
                            transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                >
                  {/* 立體側邊條：增加視覺厚度 */}
                  <div className={`absolute left-0 top-10 bottom-10 w-1.5 ${exp.color} rounded-r-full shadow-[2px_0_10px_rgba(0,0,0,0.1)]`} />

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h3 className="text-2xl font-black text-slate-800">{exp.title}</h3>
                    <span className="px-4 py-1 bg-slate-100 text-slate-500 rounded-full text-sm font-bold border border-slate-200">
                      {exp.time}
                    </span>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    {exp.desc}
                  </p>

                  {/* 特色標籤區 */}
                  <div className="flex flex-wrap gap-3">
                    {exp.tags.map((tag, tIndex) => (
                      <div 
                        key={tIndex}
                        className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-sm text-slate-500 font-medium"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${exp.color}`} />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div> {/* 結束滾動區 */}
        </div> {/* 結束立體外殼 */}
      </main>
    </div>
  );
}