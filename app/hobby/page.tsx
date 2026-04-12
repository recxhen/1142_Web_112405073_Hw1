import Image from "next/image"

import Link from "next/link"

import Menu from "@/component/Menu"

import { TbArrowBackUpDouble } from "react-icons/tb";

import { FaGamepad } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function Hobby() {
  let projectData = {
    "1": { "name": "貓貓", "imageUrl": "/cat.png" },
    "2": { "name": "貓貓", "imageUrl": "/cat2.png" },
    "3": { "name": "貓貓", "imageUrl": "/cat3.png" },
    "4": { "name": "foto", "imageUrl": "/pic.jpg" },
    "5": { "name": "foto", "imageUrl": "/pic1.jpg" },
    "6": { "name": "foto", "imageUrl": "/pic2.jpg" },
    "7": { "name": "food", "imageUrl": "/foodie.png" },
  };

  return (
    <>
      <div className="flex h-full">
        <Link href="/" className="sm:hidden absolute left-2 top-2 bg-white px-2 py-1 rounded border">
          <IoMdArrowRoundBack />
        </Link>
        
        <div className="sm:block hidden">
          <Menu />
        </div>

        <div className="bg-white w-full h-full p-3 leading-loose overflow-y-auto">
          {/* 標題區 */}
          <div className="flex gap-4 p-4 w-full">
            <div className="flex items-center justify-center border border-black rounded-lg w-[60px] h-[60px] shrink-0 bg-blue-100">
              <FaGamepad size={30} />
            </div>

            <div className="flex flex-col justify-between h-[60px]">
              <div className="text-[28px] font-bold leading-none">我的興趣</div>
              <div className="text-[20px] text-gray-600 leading-none">我與我的日常</div>
            </div>
          </div>

          {/* 內容區：Grid 佈局 */}
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 m-[26px]">
            
            {/* 專案 1 - 跨兩列，且照片偏右 (bg-[70%_50%]) */}
            <div
              className="bg-amber-50 rounded-2xl flex justify-center items-center row-span-2 bg-[70%_50%] bg-cover relative overflow-hidden min-h-[320px] border border-gray-100"
              style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})` }}
            >
              
            </div>

            {/* 專案 2 */}
            <div
              className="bg-amber-50 rounded-2xl flex justify-center items-center bg-center bg-cover relative overflow-hidden min-h-[160px] border border-gray-100"
              style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})` }}
            >
              
            </div>

            {/* 專案 3 */}
            <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center bg-center bg-cover border border-gray-100"
              style={{ backgroundImage: `url(${projectData["3"]["imageUrl"]})` }}>
            </div>

            {/* 專案 4 */}
            <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center bg-center bg-cover border border-gray-100"
              style={{ backgroundImage: `url(${projectData["4"]["imageUrl"]})` }}>
            </div>

            {/* 專案 5 (Row Span 2) - 記得加上 bg-center bg-cover */}
            <div className="bg-gray-200 rounded-2xl flex justify-center items-center row-span-2 border border-gray-100 bg-center bg-cover min-h-[320px]"
              style={{ backgroundImage: `url(${projectData["5"]["imageUrl"]})` }}>
            </div>

            {/* 專案 6 - 之前漏了 bg-center bg-cover */}
            <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center bg-center bg-cover border border-gray-100"
              style={{ backgroundImage: `url(${projectData["6"]["imageUrl"]})` }}>
            </div>

            {/* 專案 7 - 之前漏了 bg-center bg-cover */}
            <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center bg-center bg-cover border border-gray-100"
              style={{ backgroundImage: `url(${projectData["7"]["imageUrl"]})` }}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}