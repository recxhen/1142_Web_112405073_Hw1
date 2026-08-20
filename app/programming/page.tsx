"use client";

import Menu from "@/component/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCodeSharp, IoClose } from "react-icons/io5";

interface ProgramProject {
  name: string;
  imageUrl: string;
  desc: string;
  detail?: string;
  link: string;
  isAppScreenshot?: boolean;
  isExpandable?: boolean;
}

export default function Programming() {
  // 圖片放大
  const [previewImage, setPreviewImage] = useState<{
    url: string;
    name: string;
  } | null>(null);

  // 控制第 1、2 項展開
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const projectData: Record<string, ProgramProject> = {
    "1": {
      name: "記帳 App",
      imageUrl: "/expense_app.png",
      desc: "Flutter 開發記帳工具，支援日／月／年篩選、收支分開統計及自訂分類。",
      detail:
        "使用 Flutter 開發記帳工具，提供日、月、年不同時間區間的收支篩選，並將收入與支出分開統計。使用者也可以依照需求建立自訂分類，方便管理日常財務。",
      link: "#",
      isAppScreenshot: true,
      isExpandable: true,
    },

    "2": {
      name: "天氣預報 App",
      imageUrl: "/weather_app.png",
      desc: "Flutter 串接 Open-Meteo API，採 Model/Service 架構，支援多城市天氣查詢。",
      detail:
        "使用 Flutter 串接 Open-Meteo 公開 API，採用 Model / Service 分層架構處理資料模型與非同步 API 請求，提供全球城市即時天氣與未來 7 天預報查詢。",
      link: "#",
      isAppScreenshot: true,
      isExpandable: true,
    },
    "3": {
      name: "叢林考察誌",
      imageUrl: "/mindgame.png",
      desc: "運用 Next.js / React 開發的小測驗。",
      link: "https://1142-web-112405073-hw2.vercel.app/",
    },

    "4": {
      name: "逃出糖果屋",
      imageUrl: "/candyhouse.png",
      desc: "運用 Next.js / React 開發的遊戲。",
      link: "https://final-web-design-dusky.vercel.app/",
    },

    "5": {
      name: "區塊鏈應用",
      imageUrl: "/blockchain.png",
      desc: "以 p5js 框架開發的互動藝術作品。",
      link: "https://openprocessing.org/@u574646#sketches",
    },

    "6": {
      name: "遊戲引擎開發",
      imageUrl: "/unreal.png",
      desc: "Unreal 遊戲美術與製作",
      link: "https://canva.link/5kkad1cpoqnfwnj",
    },

    "7": {
      name: "別踩白塊兒",
      imageUrl: "/donttouchthewhite.jpeg",
      desc: "Python 2D 遊戲開發。",
      link: "https://canva.link/hp82i1dhjwnohlg",
    },

    
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* =========================
          左側選單
      ========================= */}
      <div className="sm:block hidden shrink-0">
        <Menu />
      </div>

      {/* =========================
          右側主要內容
      ========================= */}
      <main className="flex-1 p-6 md:p-10 flex items-center justify-center">

        <div
          className="
            w-full
            h-full
            bg-slate-50
            rounded-[2.5rem]
            shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
            border
            border-white/40
            flex
            flex-col
            overflow-hidden
          "
        >

          {/* =========================
              內容滾動區
          ========================= */}
          <div className="flex-1 overflow-y-auto p-10 scrollbar-hide">

            {/* 標題 */}
            <div className="flex items-center gap-5 mb-12">

              <div
                className="
                  bg-indigo-600
                  text-white
                  p-4
                  rounded-2xl
                  shadow-lg
                  shadow-indigo-200
                "
              >
                <IoCodeSharp size={30} />
              </div>

              <h1 className="text-3xl font-black text-slate-800">
                程式開發專案
              </h1>

            </div>

            {/* =========================
                專案 Grid
            ========================= */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

              {Object.keys(projectData).map((key) => {
                const project = projectData[key];

                const isExpanded =
                  expandedCard === key;

                /*
                 * =====================================
                 * 第 1、2 項
                 * =====================================
                 */
                if (project.isExpandable) {
                  return (
                    <div
                      key={key}
                      className="w-full"
                    >

                      {/* =========================
                          整張可展開卡片
                      ========================= */}
                      <div
                        onClick={() => {
                          setExpandedCard(
                            isExpanded ? null : key
                          );
                        }}
                        className={`
                          group
                          relative
                          w-full
                          bg-white
                          rounded-3xl
                          p-4
                          border
                          border-slate-100
                          shadow-[4px_4px_10px_rgba(0,0,0,0.05)]
                          cursor-pointer
                          transition-all
                          duration-500
                          ease-out
                          hover:-translate-y-2
                          hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]
                          ${
                            isExpanded
                              ? "shadow-[0_20px_40px_-10px_rgba(0,0,0,0.18)]"
                              : ""
                          }
                        `}
                      >

                        {/* =========================
                            App 圖片
                        ========================= */}
                        <div
                          className="
                            w-full
                            h-[200px]
                            rounded-2xl
                            overflow-hidden
                            relative
                            mb-4
                            bg-slate-800
                            shadow-inner
                            cursor-zoom-in
                          "
                          onClick={(e) => {
                            // 避免圖片點擊同時觸發展開
                            e.stopPropagation();

                            setPreviewImage({
                              url: project.imageUrl,
                              name: project.name,
                            });
                          }}
                        >

                          <Image
                            src={project.imageUrl}
                            alt={project.name}
                            fill
                            className="
                              object-contain
                              p-3
                              transition-transform
                              duration-700
                              group-hover:scale-105
                            "
                          />

                          {/* 圖片 hover */}
                          <div
                            className="
                              absolute
                              inset-0
                              bg-black/20
                              opacity-0
                              group-hover:opacity-100
                              transition-opacity
                              flex
                              items-center
                              justify-center
                              pointer-events-none
                            "
                          >
                            <span
                              className="
                                text-white
                                font-bold
                                bg-black/40
                                px-4
                                py-2
                                rounded-full
                                backdrop-blur-sm
                              "
                            >
                              放大檢視 →
                            </span>
                          </div>

                        </div>

                        {/* =========================
                            卡片標題
                        ========================= */}
                        <div className="px-2">

                          <div className="flex items-center justify-between">

                            <h3 className="text-xl font-bold text-slate-800">
                              {project.name}
                            </h3>

                            {/* 展開箭頭 */}
                            <span
                              className={`
                                text-indigo-600
                                text-xl
                                transition-transform
                                duration-500
                                ${
                                  isExpanded
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            >
                              ↓
                            </span>

                          </div>

                          <p className="text-sm text-slate-500 mt-1">
                            {project.desc}
                          </p>

                        </div>

                        {/* =========================
                            詳細介紹
                            只有展開時才顯示
                        ========================= */}
                        <div
                          className={`
                            transition-all
                            duration-500
                            ease-in-out
                            overflow-hidden
                            ${
                              isExpanded
                                ? "max-h-[500px] opacity-100 mt-6"
                                : "max-h-0 opacity-0 mt-0"
                            }
                          `}
                        >

                          <div
                            className="
                              border-t
                              border-slate-100
                              pt-5
                              px-2
                            "
                          >

                            {/* 標題 */}
                            <div className="flex items-center gap-2 mb-3">

                              <div
                                className="
                                  w-2
                                  h-2
                                  rounded-full
                                  bg-indigo-600
                                "
                              />

                              <h4
                                className="
                                  font-bold
                                  text-slate-800
                                "
                              >
                                專案介紹
                              </h4>

                            </div>

                            {/* 詳細文字 */}
                            <p
                              className="
                                text-sm
                                text-slate-600
                                leading-7
                              "
                            >
                              {project.detail}
                            </p>

                            {/* 技術標籤 */}
                            <div className="flex flex-wrap gap-2 mt-5">

                              {key === "1" && (
                                <>
                                  <span
                                    className="
                                      px-3
                                      py-1
                                      bg-indigo-50
                                      text-indigo-600
                                      rounded-full
                                      text-xs
                                      font-bold
                                    "
                                  >
                                    Flutter
                                  </span>

                                  <span
                                    className="
                                      px-3
                                      py-1
                                      bg-indigo-50
                                      text-indigo-600
                                      rounded-full
                                      text-xs
                                      font-bold
                                    "
                                  >
                                    Dart
                                  </span>

                                  <span
                                    className="
                                      px-3
                                      py-1
                                      bg-indigo-50
                                      text-indigo-600
                                      rounded-full
                                      text-xs
                                      font-bold
                                    "
                                  >
                                    App Development
                                  </span>
                                </>
                              )}

                              {key === "2" && (
                                <>
                                  <span
                                    className="
                                      px-3
                                      py-1
                                      bg-indigo-50
                                      text-indigo-600
                                      rounded-full
                                      text-xs
                                      font-bold
                                    "
                                  >
                                    Flutter
                                  </span>

                                  <span
                                    className="
                                      px-3
                                      py-1
                                      bg-indigo-50
                                      text-indigo-600
                                      rounded-full
                                      text-xs
                                      font-bold
                                    "
                                  >
                                    Dart
                                  </span>

                                  <span
                                    className="
                                      px-3
                                      py-1
                                      bg-indigo-50
                                      text-indigo-600
                                      rounded-full
                                      text-xs
                                      font-bold
                                    "
                                  >
                                    REST API
                                  </span>

                                  <span
                                    className="
                                      px-3
                                      py-1
                                      bg-indigo-50
                                      text-indigo-600
                                      rounded-full
                                      text-xs
                                      font-bold
                                    "
                                  >
                                    Model / Service
                                  </span>
                                </>
                              )}

                            </div>

                            {/* 收起 */}
                            <div
                              className="
                                mt-5
                                text-xs
                                font-bold
                                text-indigo-600
                              "
                            >
                              點擊卡片收起 ↑
                            </div>

                          </div>

                        </div>

                        {/* 裝飾邊框 */}
                        <div
                          className="
                            absolute
                            inset-0
                            rounded-3xl
                            border-b-4
                            border-r-4
                            border-slate-300/20
                            pointer-events-none
                          "
                        />

                      </div>

                    </div>
                  );
                }

                /*
                 * =====================================
                 * 第 3～7 項
                 * 維持原本 Link
                 * =====================================
                 */
                return (
                  <Link
                    key={key}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      relative
                      h-[320px]
                      perspective-1000
                      block
                    "
                  >

                    <div
                      className="
                        relative
                        w-full
                        h-full
                        bg-white
                        rounded-3xl
                        p-4
                        transition-all
                        duration-500
                        ease-out
                        transform-gpu
                        border
                        border-slate-100
                        shadow-[4px_4px_10px_rgba(0,0,0,0.05)]
                        group-hover:-translate-y-3
                        group-hover:rotate-x-2
                        group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)]
                      "
                    >

                      {/* 圖片 */}
                      <div
                        className="
                          w-full
                          h-2/3
                          rounded-2xl
                          overflow-hidden
                          relative
                          mb-4
                          bg-slate-100
                          shadow-inner
                        "
                      >

                        <Image
                          src={project.imageUrl}
                          alt={project.name}
                          fill
                          className="
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />

                        <div
                          className="
                            absolute
                            inset-0
                            bg-black/20
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <span
                            className="
                              text-white
                              font-bold
                              bg-black/40
                              px-4
                              py-2
                              rounded-full
                              backdrop-blur-sm
                            "
                          >
                            查看作品 →
                          </span>
                        </div>

                      </div>

                      {/* 文字 */}
                      <div className="px-2">

                        <h3
                          className="
                            text-xl
                            font-bold
                            text-slate-800
                          "
                        >
                          {project.name}
                        </h3>

                        <p
                          className="
                            text-sm
                            text-slate-500
                            mt-1
                            line-clamp-1
                          "
                        >
                          {project.desc}
                        </p>

                      </div>

                      {/* 裝飾 */}
                      <div
                        className="
                          absolute
                          inset-0
                          rounded-3xl
                          border-b-4
                          border-r-4
                          border-slate-300/20
                          pointer-events-none
                        "
                      />

                    </div>

                  </Link>
                );
              })}

            </div>

          </div>

        </div>

      </main>

      {/* =========================
          圖片放大燈箱
      ========================= */}
      {previewImage && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-6
            md:p-16
          "
          onClick={() => setPreviewImage(null)}
        >

          {/* 關閉 */}
          <button
            type="button"
            onClick={() => setPreviewImage(null)}
            className="
              absolute
              top-6
              right-6
              md:top-10
              md:right-10
              text-white
              bg-white/10
              hover:bg-white/20
              rounded-full
              p-3
              transition-colors
              z-10
            "
            aria-label="關閉"
          >
            <IoClose size={26} />
          </button>

          {/* 圖片 */}
          <div
            className="
              relative
              w-full
              h-full
              max-w-md
              flex
              flex-col
              items-center
              justify-center
            "
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

            <p className="text-white/80 text-sm mt-4">
              {previewImage.name}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}