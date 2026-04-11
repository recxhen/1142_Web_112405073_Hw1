import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex h-full">
     <div className="bg-white w-[320px] h-full p-4"> 
      {/* {左邊} */}
      <div className="bg-white w-[320px] h-full ">
      
      
      <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center></div>
        <Image src="/chihiro015.jpg" alt="chihiro015" width={80} height={80} "/>
      <div>
      <div className="text-center">名字</div>
      <div className="text-center">簡介</div>

      <div className="flex gap-2">
          <div>社群連結</div>
          <div>社群連結</div>
          <div>社群連結</div>
      </div>
      <div className="bg-gray-300 p-[16px] rounded-md">我的興趣</div>

    <Link href="/about">
      <div className="bg-gray-300 p-[16px rounded-md"> 關於我</div>
    </Link>

    <Link href="/about">
      <div className="bg-gray-300 p-[16px rounded-md"> 關於我</div>
    </Link>
    
    </div>
    <div>
      <div>關於我</div>
      <div className="bg-gray-300 p-[16px] mt-2" rounded-md>設計專案</div>
      <div className="bg-gray-300 p-[16px] my-2" rounded-md>程式專案</div>
    </div>

      </div>
      <div className="bg-gray-200 w-full h-full">右邊</div>
    </div>
  );
}
