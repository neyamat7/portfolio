import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DraggableInterests({ interests }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-8">
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-4">Beyond Coding</h3>

        <div className="flex flex-wrap gap-4 justify-center items-center h-auto min-h-[110px]">
          {interests.map((interest, index) => (
            <Tooltip.Provider key={interest.title}>
              <Tooltip.Root
                open={openIndex === index}
                onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
                delayDuration={50}
              >
                <Tooltip.Trigger asChild>
                  <motion.div
                    drag
                    dragConstraints={{
                      top: -100,
                      left: -100,
                      right: 100,
                      bottom: 100,
                    }}
                    dragElastic={0.5}
                    className={`bg-gradient-to-br ${interest.color} p-0.5 rounded-2xl cursor-grab active:cursor-grabbing`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="bg-gray-900 rounded-2xl p-2 flex flex-col gap-1 justify-center items-center min-w-40 w-full">
                      <div className="text-xl">{interest.icon}</div>
                      <h4 className="text-white font-semibold text-base">
                        {interest.title}
                      </h4>
                    </div>
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    onPointerEnter={() => setOpenIndex(null)}
                    side="top"
                    align="center"
                    className="z-[9999] w-80 max-w-[95vw] rounded-2xl bg-white/20 backdrop-blur-2xl text-white text-sm px-6 py-5 shadow-2xl border border-white/20 animate-fadeInFloat"
                    sideOffset={20}
                  >
                    <div className="text-lg font-semibold mb-2">
                      {interest.title}
                    </div>
                    <div className="leading-relaxed text-base text-white/90">
                      {interest.description}
                    </div>
                    <Tooltip.Arrow className="fill-white/20" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}
        </div>
      </div>
    </div>
  );
}
