"use client"
import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react';
import { IoCodeSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";





export default function Programming() {
  let projectData = {
    "1":{
      "name":"區塊鏈應用",
      "imageUrl": "/blockchain.png"
    },
    "2":{
      "name":"遊戲引擎開發",
      "imageUrl": "/unreal.png"
    },
  };

  return (
    <>
      <div className="flex h-full">
        <Link href="/" className="sm:hidden absolute top-2 left-2 bg-white">
          <div>
            <IoMdArrowRoundBack />
          </div>          
        </Link>
        <div className="sm:block hidden">
          <Menu/>
        </div>
        <div className="w-full">
          <div className="bg-white h-full w-full p-3 leading-loose">
          <div className="flex gap-4 p-4"> 
  
            {/* 1. 左側方框：固定寬高 */}
            <div className="flex items-center justify-center border border-black rounded-lg w-[60px] h-[60px] shrink-0 bg-blue-100">
              <IoCodeSharp size={20} />
            </div>

            {/* 2. 右側文字：高度必須與方框一致 (h-[80px])，並使用 justify-between */}
            <div className="flex flex-col justify-between h-[60px]"> 
              <div className="text-[28px] font-bold leading-none">
                程式專案
              </div>
              <div className="text-[20px] text-gray-600 leading-none">
                這裡收錄我的程式學習
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-4 m-[26px] h-[900px]">
            {/* 左邊方塊 (Project 1) */}
            <div 
              className="flex-1 bg-amber-50 rounded-2xl flex justify-center items-center bg-center bg-cover relative overflow-hidden"
              style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})` }}
            >
              <div className="text-white text-2xl text-bold bg-black/15 w-full h-[80px] flex justify-center items-center backdrop-blur-sm absolute bottom-0">
                {projectData["1"]["name"]}
              </div>
            </div>

            {/* 右邊方塊 (Project 2) */}
            <div 
              className="flex-1 bg-amber-50 rounded-2xl flex justify-center items-center bg-center bg-cover relative overflow-hidden"
              style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})` }}
            >
              <div className="text-white text-2xl text-bold bg-black/15 w-full h-[80px] flex justify-center items-center backdrop-blur-sm absolute bottom-0">
                {projectData["2"]["name"]}
              </div>
            </div>
          
            

          </div>
          </div>      
        </div>
      </div>
      
    </>

  );
}
