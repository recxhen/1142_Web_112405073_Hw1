"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "@/component/Menu";

export default function Home() {
  const [bubbles, setBubbles] = useState([]);
  const [score, setScore] = useState(0);

  // 產生新泡泡的邏輯
  const addBubble = () => {
    const id = Date.now();
    const size = Math.random() * 60 + 40; // 泡泡大小 40px ~ 100px
    const x = Math.random() * 80 + 10; // 限制在 10% ~ 90% 的寬度
    const y = Math.random() * 80 + 10;
    
    const newBubble = { id, x, y, size };
    setBubbles((prev) => [...prev, newBubble]);

    // 3秒後自動消失（如果沒被點擊）
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== id));
    }, 3000);
  };

  // 定期產生泡泡
  useEffect(() => {
    const interval = setInterval(() => {
      if (bubbles.length < 10) addBubble();
    }, 800);
    return () => clearInterval(interval);
  }, [bubbles]);

  const handlePop = (id) => {
    setScore((s) => s + 1);
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden select-none">
      
      {/* 左側選單 */}
      <div className="sm:block hidden h-full shrink-0 z-20">
        <Menu />
      </div>

      {/* 右側遊戲區 */}
      <div className="flex-1 relative bg-gradient-to-br from-blue-50 to-indigo-50 sm:block hidden overflow-hidden cursor-crosshair">
        
        {/* 計分板 */}
        <div className="absolute top-10 right-10 z-10 text-right">
          <div className="text-sm font-mono text-indigo-400 uppercase tracking-widest">Score</div>
          <motion.div 
            key={score}
            initial={{ scale: 1.2, color: "#4f46e5" }}
            animate={{ scale: 1, color: "#6366f1" }}
            className="text-6xl font-black text-indigo-500"
          >
            {score.toString().padStart(2, '0')}
          </motion.div>
        </div>

        {/* 遊戲提示 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[10vw] font-black text-white/40 italic">POP IT!</h1>
        </div>

        {/* 泡泡渲染區 */}
        <AnimatePresence>
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              onClick={() => handlePop(bubble.id)}
              className="absolute rounded-full border-2 border-white shadow-inner cursor-pointer"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: bubble.size,
                height: bubble.size,
                background: "rgba(0, 0, 128, 0.1)",
                backdropFilter: "blur(4px)",
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0)" }}
            />
          ))}
        </AnimatePresence>

        {/* 底部小字 */}
        <div className="absolute bottom-10 left-10 text-indigo-300 font-mono text-xs">
          [ MINI GAME: POP IT ]
        </div>
      </div>

      {/* 手機版 */}
      <div className="sm:hidden flex-1 flex justify-center items-center h-full bg-blue-50">
        <Menu />
      </div>

    </div>
  );
}