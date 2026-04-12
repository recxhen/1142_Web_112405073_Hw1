import Menu from "@/component/Menu";
import Image from "next/image"
import Link from "next/link"

export default function Design() {
  return (
    <>
      <div className="flex h-full">
        <Link href="/" className="sm:hidden absolute top-2 left-2 bg-white">
          <div>
            返回icon
          </div>          
        </Link>
        <div className="sm:block hidden">
          <Menu/>
        </div>
        <div className="bg-red-500 w-full">
          design 設計專案
        </div>
      </div>

    </>

  );
}
