"use client"
import Image from "next/image"
import Link from "next/link"
import MetaBalls from '@/components/MetaBalls';

export default function Home() {
  return (
    <>
      首頁
      <MetaBalls
        color="#444444"
        cursorBallColor="#444444"
        cursorBallSize={2}
        ballCount={15}
        animationSize={30}
        enableMouseInteraction
        enableTransparency={true}
        hoverSmoothness={0.15}
        clumpFactor={1}
        speed={0.3}
      />
      
    </>

  );
}
