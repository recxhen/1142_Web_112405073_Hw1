"use client";

import Menu from "@/component/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCodeSharp, IoClose } from "react-icons/io5";

// 1. 定義型別 (放在組件外)
interface ProgramProject {
  name: string;
  imageUrl: string;
  desc: string;
  link: string;
  isAppScreenshot?: boolean; // 標記這是手機 App 截圖，顯示時要完整呈現、不裁切
}

export default function Programming() {
  // 放大檢視目前顯示的圖片；null 代表沒有開啟燈箱
  const [previewImage, setPreviewImage] = useState<{ url: string; name: string } | null>(null);

  // 2. 定義資料 (確保 Record 型別解決之前的 index 錯誤)
  const projectData: Record<string, ProgramProject> = {
    "1": {
      name: "區塊鏈應用",
      imageUrl: "/blockchain.png",
      desc: "智能合約開發與 Web3 整合。",
      link: "https://openprocessing.org/@u574646#sketches",
    },
    "2": {
      name: "遊戲引擎開發",
      imageUrl: "/unreal.png",
      desc: "Unreal 遊戲美術與製作",
      link: "https://canva.link/5kkad1cpoqnfwnj",
    },
    "3": {
      name: "別踩白塊兒",
      imageUrl: "/donttouchthewhite.jpeg",
      desc: "Python 2D 遊戲開發。",
      link: "https://canva.link/hp82i1dhjwnohlg",
    },
    "4": {
      name: "叢林考察誌",
      imageUrl: "/mindgame.png",
      desc: "運用 Next.js / React 開發的小測驗。",
      link: "https://1142-web-112405073-hw2.vercel.app/",
    },
    "5": {
      name: "逃出糖果屋",
      imageUrl: "/candyhouse.png",
      desc: "運用 Next.js / React 開發的遊戲。",
      link: "https://final-web-design-dusky.vercel.app/",
    },
    "6": {
      name: "質感記帳 App",
      imageUrl: "/expense_app.png",
      desc: "用 Flutter 開發，自行設計狀態管理與日期篩選邏輯，做出支援日/月/年區間篩選、收支分開統計與自訂分類的記帳工具。",
      link: "#",
      isAppScreenshot: true,
    },
    "7": {
      name: "天氣預報 App",
      imageUrl: "/weather_app.png",
      desc: "用 Flutter 串接 Open-Meteo 公開 API 開發，採 Model/Service 分層架構處理非同步請求與錯誤處理，做出可查詢全球城市即時天氣與未來 7 天預報的應用程式。",
      link: "#",
      isAppScreenshot: true,
    },
  };

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
        <div
          className="w-full h-full bg-slate-50 rounded-[2.5rem] 
                      shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] 
                      border border-white/40 flex flex-col overflow-hidden"
        >
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
              {Object.keys(projectData).map((key) => {
                const project = projectData[key];

                const cardInner = (
                  <div
                    className="relative w-full h-full bg-white rounded-3xl p-4 
                                transition-all duration-500 ease-out transform-gpu
                                border border-slate-100
                                shadow-[4px_4px_10px_rgba(0,0,0,0.05)]
                                group-hover:-translate-y-3 group-hover:rotate-x-2
                                group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]"
                  >
                    <div
                      className={`w-full h-2/3 rounded-2xl overflow-hidden relative mb-4 shadow-inner ${
                        project.isAppScreenshot ? "bg-slate-800" : "bg-slate-100"
                      }`}
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.name}
                        fill
                        // App 截圖是直長形，用 object-contain 讓完整畫面都顯示出來、不被裁切；
                        // 其他橫式作品縮圖維持 object-cover 填滿裁切的效果。
                        className={`transition-transform duration-700 ${
                          project.isAppScreenshot
                            ? "object-contain group-hover:scale-105 p-3"
                            : "object-cover group-hover:scale-110"
                        }`}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                          {project.isAppScreenshot ? "放大檢視 →" : "查看作品 →"}
                        </span>
                      </div>
                    </div>

                    <div className="px-2">
                      <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
                      <p className="text-sm text-slate-500 mt-1 line-clamp-1">{project.desc}</p>
                    </div>

                    <div className="absolute inset-0 rounded-3xl border-b-4 border-r-4 border-slate-300/20 pointer-events-none" />
                  </div>
                );

                // App 截圖：點擊開啟放大燈箱，不跳轉外部連結
                if (project.isAppScreenshot) {
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setPreviewImage({ url: project.imageUrl, name: project.name })}
                      className="group relative h-[320px] perspective-1000 block text-left"
                    >
                      {cardInner}
                    </button>
                  );
                }

                // 其他作品：維持原本點擊跳轉外部連結的行為
                return (
                  <Link
                    key={key}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative h-[320px] perspective-1000 block"
                  >
                    {cardInner}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* 放大檢視燈箱：點擊 App 截圖卡片時彈出 */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 md:p-16"
          onClick={() => setPreviewImage(null)}
        >
          <button
            type="button"
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            aria-label="關閉"
          >
            <IoClose size={26} />
          </button>

          <div
            className="relative w-full h-full max-w-md flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={previewImage.url}
                alt={previewImage.name}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <p className="text-white/80 text-sm mt-4">{previewImage.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}