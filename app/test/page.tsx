"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [targetPos, setTargetPos] = useState({ top: 0, left: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setTargetPos({ top: rect.top, left: rect.left });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#3b3935] flex items-center justify-center p-8 relative">
      {/* Animated absolute box from center to grid cell */}
      {!animationComplete && (
        <motion.div
          initial={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            scale:.1,
            opacity: 0,
          }}
          animate={{
            top: targetPos.top,
            left: targetPos.left,
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setAnimationComplete(true)}
          className="absolute w-[440px] h-[160px] bg-[#dcd0b6] rounded-2xl z-50"
        />
      )}

      {/* The grid */}
      <div className="grid grid-cols-4 grid-rows-3 gap-4 bg-[#1c1c1a] p-6 rounded-3xl w-[900px] h-[600px] relative z-10">
        {/* Target cell for largest box */}
        <div
          ref={targetRef}
          className={`${
            animationComplete ? "bg-[#dcd0b6]" : "bg-transparent"
          } rounded-2xl col-span-2 row-span-1`}
        />

        {/* Other grid boxes (shown after main animation) */}
        {animationComplete && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#c4b9a2] rounded-2xl col-span-1 row-span-1"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#dcd0b6] rounded-2xl col-span-1 row-span-1"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#dcd0b6] rounded-2xl col-span-1 row-span-1"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#6e685f] rounded-2xl col-span-1 row-span-1"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[#dcd0b6] rounded-2xl col-span-2 row-span-2"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#dcd0b6] rounded-2xl col-span-1 row-span-1"
            />
          </>
        )}
      </div>
    </main>
  );
}
