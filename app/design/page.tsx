import Menu from "@/component/Menu";

import Image from "next/image"

import Link from "next/link"

import { TbArrowBackUpDouble } from "react-icons/tb";

import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function Design() {
  let projectData = {
    "1": { "name": "人機互動設計", "imageUrl": "/114-1sportsappredesign.png" },
    "2": { "name": "人機介面", "imageUrl": "/歐歐睏海報.png" },
  };

  return (
    <>
      <div className="flex h-full">
        <Link href="/" className="sm:hidden absolute top-2 left-2 bg-white">
          <div><IoMdArrowRoundBack />
          </div>
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>

        <div className="w-full">
          {/* 主容器：控制背景與內距 */}
          <div className="bg-white h-full w-full p-3 leading-loose overflow-y-auto">
            
            {/* 標題區 */}
            <div className="flex gap-4 p-4 w-full">
              <div className="flex items-center justify-center border border-black rounded-lg w-[60px] h-[60px] shrink-0 bg-blue-100">
                <MdOutlineDesignServices size={30} />
              </div>
              <div className="flex flex-col justify-between h-[60px]">
                <div className="text-[28px] font-bold leading-none">設計專案</div>
                <div className="text-[20px] text-gray-600 leading-none">這裡收錄我的各種介面規劃專案</div>
              </div>
            </div>

            {/* 內容區：垂直排列 (flex-col) */}
            <div className="flex flex-col gap-6 m-[26px]"> 
              
              {/* Project 1 */}
              <div 
                className="w-full bg-amber-100 rounded-2xl flex justify-center items-center 
                          bg-center bg-cover relative overflow-hidden h-[700px] border border-gray-200"
                style={{ backgroundImage: `url(${projectData["1"]?.imageUrl || ''})` }}
              >
                <div className="text-white text-2xl font-bold bg-black/30 w-full h-[70px] flex justify-center items-center backdrop-blur-sm absolute bottom-0">
                  {projectData["1"]?.name}
                </div>
              </div>

              {/* Project 2 */}
              <div
                className="w-full bg-amber-50 rounded-2xl flex justify-center items-center 
                          bg-center bg-cover relative overflow-hidden h-[700px] border border-gray-200"
                style={{ backgroundImage: `url(${projectData["2"]?.imageUrl || ''})` }}
              >
                <div className="text-white text-2xl font-bold bg-black/30 w-full h-[80px] flex justify-center items-center backdrop-blur-sm absolute bottom-0">
                  {projectData["2"]?.name}
                </div>
              </div>

            </div> {/* 結束內容區 */}
          </div> {/* 結束主容器 */}
        </div> {/* 結束 w-full */}
      </div> {/* 結束 flex h-full */}
    </>
  );
}