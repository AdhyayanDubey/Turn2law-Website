import React from "react";
import { motion } from "framer-motion";

export default function WowAhhAnimation() {
  const count = 4;
  const items = Array.from({ length: count });
  const widthClasses = ["w-28", "w-32", "w-36", "w-40"];
  const opacities   = ["opacity-5", "opacity-10", "opacity-15", "opacity-20"];
  const boxBase     = "bg-white mb-4 aspect-[4/5] h-[20rem]";
  const speed       = 15; // seconds per full cycle

  // Calculate wrapper height so exactly 3 items (max size + margin)
  // max width = 10rem → height = 10rem * 5/4 = 12.5rem
  // mb-4 = 1rem → total per box = 13.5rem
  // 3 * 13.5rem = 40.5rem
  const wrapperH = "h-[70rem]";

  return (
    <div
      className="
        fixed top-0 left-0
        w-screen flex justify-between
        z-10 pointer-events-none
      "
    >
      {/* LEFT: scroll UP */}
      <div className={`overflow-hidden ${wrapperH} flex flex-col h-screen items-start`}>
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity
          }}
          className="flex flex-col items-start"
        >
          {[...items, ...items].map((_, i) => (
            <div
              key={i}
              className={`
                ${boxBase}
                rounded-r-2xl
                ${widthClasses[i % count]}
                ${opacities[i % count]}
              `}
            />
          ))}
        </motion.div>
      </div>

      {/* RIGHT: scroll DOWN */}
      <div className={`overflow-hidden ${wrapperH} flex flex-col h-screen items-end`}>
  <motion.div
    animate={{ y: ["-50%", "0%"] }}  // Reversed direction
    transition={{
      duration: speed,
      ease: "linear",
      repeat: Infinity
    }}
    className="flex flex-col items-end"
  >
    {[...items, ...items].map((_, i) => (  // Keep same order for seamless loop
      <div
        key={i}
        className={`
          ${boxBase}
          rounded-l-2xl
          ${widthClasses[i % count]}
          ${opacities[i % count]}
        `}
      />
    ))}
  </motion.div>
</div>
    </div>
  );
}