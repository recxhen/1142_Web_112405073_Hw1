"use client"
import Image from "next/image"
import Menu from "@/component/Menu"
import Link from "next/link";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { PiAcornBold } from "react-icons/pi";
import { IoMdArrowRoundBack } from "react-icons/io";




export default function About() {


  return (
    <>
      <div className="flex h-full">
        <Link href="/" className="sm:hidden absolute top-2 left-2 bg-white">
          <div><IoMdArrowRoundBack size={20}/>
          </div>
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>

        <div className="w-full">
          <div className="bg-white h-full w-full p-3 leading-loose">
            {/* 頂部標題區 */}
            <div className="flex gap-4 p-4">
              <div className="flex items-center justify-center border border-black rounded-lg w-[60px] h-[60px] shrink-0 bg-blue-100">
                <PiAcornBold size={30}/>
              </div>
              <div className="flex flex-col justify-between h-[60px]">
                <div className="text-[28px] font-bold leading-none">關於我</div>
                <div className="text-[20px] text-gray-600 leading-none">大學的經歷</div>
              </div>
            </div>

            {/* 經歷列表區 */}
            <div className="flex flex-col gap-6 m-[26px]">
              {/* 經歷 1 */}
              <div className="bg-white p-6 rounded-2xl border border-black shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-black">政大通NCCUPass</h3>
                  <span className="text-gray-500 text-sm">2025 - 2026</span>
                </div>
                <p className="text-gray-700 leading-relaxed">我負責思考包括社群媒體與線下活動等各種創意的推廣方式促使下載量增長，透過對數據洞察在校學生喜好</p>
                <ul className="mt-3 list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>將互動率穩定維持在 5% 的高水準</li>
                  <li>負責與團隊溝通協作，確保進度如期完成</li>
                </ul>
              </div>

              {/* 經歷 2 */}
              <div className="bg-white p-6 rounded-2xl border border-black shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-black">2026政大徵才月</h3>
                  <span className="text-gray-500 text-sm">2025 - 2026</span>
                </div>
                <p className="text-gray-700 leading-relaxed">共同策劃並執行校園最大規模的線下活動，並專注於優化博覽會整體參與體驗。</p>
                <ul className="mt-3 list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>展現靈活的反應能力與執行力</li>
                  <li>負責對組間的溝通，長期與行銷組協作</li>
                </ul>
              </div> {/* <--- 原本這裡少了一個閉合標籤 */}

              {/* 經歷 3 */}
              <div className="bg-white p-6 rounded-2xl border border-black shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-black">政大策略管理中心</h3>
                  <span className="text-gray-500 text-sm">2024 - 2026</span>
                </div>
                <p className="text-gray-700 leading-relaxed">整理出版文件、公文收發、檔案歸檔、文具採購、接待訪客、費用報支及設備維護</p>
                <ul className="mt-3 list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>協助主管日常辦公室管理</li>
                  <li>迎合主管的的喜好</li>
                </ul>
              </div>
            </div> {/* 結束經歷列表區 */}
          </div> {/* 結束 bg-white h-full */}
        </div> {/* 結束 w-full */}
      </div> {/* 結束 flex h-full */}
    </>
  );
}