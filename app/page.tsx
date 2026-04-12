"use client"
import Image from "next/image"
import Link from "next/link"
import MetaBalls from '@/components/MetaBalls';
import Menu from "@/component/Menu"


export default function Home() {
  return (
    <>
      <div className="flex h-full justify-center">
        <div className="sm:block hidden">
        {/*電腦版*/}
          電腦版本 Menu
          <Menu/>
        </div>
        <div className="sm:hidden ">
         {/*手機版*/}
           <Menu/>
        </div>
            {/* <MetaBalls
              color="#444444"
              cursorBallColor="#444444"
              cursorBallSize={2}
              ballCount={15}
              animationSize={400}
              enableMouseInteraction
              enableTransparency={true}
              hoverSmoothness={0.15}
              clumpFactor={1}
              speed={0.3}
            /> */}
      </div>
    </>

  );
}
 