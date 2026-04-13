"use client"
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "@/component/Menu";

// 1. 定義泡泡的型別
interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function Home() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);

  // 2. 處理點擊泡泡的邏輯 (使用 useCallback 優化效能)
  const handlePop = useCallback((id: number) => {
    setScore((s) => s + 1);
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  }, []);

  // 3. 定期產生泡泡的 Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        // 限制畫面上最多同時出現 10 個泡泡
        if (prev.length < 10) {
          const id = Date.now();
          const size = Math.random() * 60 + 40;
          const x = Math.random() * 80 + 10;
          const y = Math.random() * 80 + 10;
          
          const newBubble: Bubble = { id, x, y, size };

          // 設定 3 秒後自動消失
          setTimeout(() => {
            setBubbles((latest) => latest.filter((b) => b.id !== id));
          }, 3000);

          return [...prev, newBubble];
        }
        return prev;
      });
    }, 800);

    // 清除計時器，防止記憶體洩漏
    return () => clearInterval(interval);
  }, []); // 空陣列確保計時器只會啟動一次

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden select-none">
      
      {/* 左側選單：電腦版顯示 */}
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

        {/* 背景裝飾文字 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[10vw] font-black text-white/40 italic select-none">POP IT!</h1>
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
                background: "rgba(99, 102, 241, 0.15)",
                backdropFilter: "blur(4px)",
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.25)" }}
            />
          ))}
        </AnimatePresence>

        {/* 底部提示 */}
        <div className="absolute bottom-10 left-10 text-indigo-300 font-mono text-xs">
          [ MINI GAME: POP IT TO DE-STRESS ]
        </div>
      </div>

      {/* 手機版：滿版選單 */}
      <div className="sm:hidden flex-1 flex justify-center items-center h-full bg-blue-50 p-4">
        <Menu />
      </div>

    </div>
  );
}