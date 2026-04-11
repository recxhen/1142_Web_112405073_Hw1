import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex h-full">

      <div className="bg-gray-200 w-[320px] h-screen">


        <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
          <Image src="/chihiro015.jpg" alt="chihiro015" width={80} height={80} />
        </div>

        <div className="text-center">名字</div>
        <div className="text-center">簡介</div>

        <div className="flex gap-2">
            <div>社群連結</div>
            <div>社群連結</div>
            <div>社群連結</div>
        </div>

        <Link href="/about">
          <div className="bg-gray-300 p-[16px rounded-md"> 關於我</div>
        </Link>

        <Link href="/about">
          <div className="bg-gray-300 p-[16px rounded-md"> 關於我</div>
        </Link>

        <Link href="/about">
          <div className="bg-gray-300 p-[16px rounded-md"> 關於我</div>
        </Link>

        <Link href="/about">
          <div className="bg-gray-300 p-[16px rounded-md"> 關於我</div>
        </Link>

      </div>

      <div className="bg-gray-200 w-full h-screen- ">右邊</div>
    </div>
  );
}
