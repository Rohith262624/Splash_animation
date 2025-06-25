import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  // Check if this is a transition from welcome to dashboard
  const isWelcomeToDashboard = location.pathname === "/dashboard";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="relative w-full h-full"
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}

        {/* Jiggle Wipe Overlay - only for welcome to dashboard transition */}
        {isWelcomeToDashboard && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Main wipe element */}
            <motion.div
              className="absolute bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400"
              style={{
                clipPath: "circle(0% at 100% 0%)",
              }}
              initial={{
                clipPath: "circle(0% at 100% 0%)",
              }}
              animate={{
                clipPath: [
                  "circle(0% at 100% 0%)",
                  "circle(3% at 98% 2%)", // Small jiggle start
                  "circle(2% at 102% -1%)", // Jiggle left
                  "circle(4% at 96% 3%)", // Jiggle right
                  "circle(3% at 101% 1%)", // Settle
                  "circle(15% at 100% 0%)", // Start expanding
                  "circle(35% at 100% 0%)", // Faster expansion
                  "circle(70% at 100% 0%)", // Large coverage
                  "circle(150% at 100% 0%)", // Full screen wipe
                ],
              }}
              transition={{
                duration: 1.2,
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.75, 0.9, 1],
                ease: [0.4, 0, 0.2, 1],
              }}
              className="w-full h-full"
            />

            {/* Jiggle particles for extra effect */}
            <motion.div
              className="absolute top-0 right-0 w-8 h-8"
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                x: [0, -5, 8, -3, 2, 0],
                y: [0, 3, -4, 6, -2, 0],
                scale: [0, 0.5, 1, 0.8, 1.2, 0],
                rotate: [0, 15, -10, 20, -5, 0],
              }}
              transition={{
                duration: 0.8,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                ease: "easeInOut",
              }}
              className="bg-white/30 rounded-full backdrop-blur-sm"
            />

            {/* Additional sparkle effects */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{
                  top: `${5 + i * 3}%`,
                  right: `${2 + i * 2}%`,
                }}
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: [0, Math.random() * 20 - 10],
                  y: [0, Math.random() * 20 - 10],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.05,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Text overlay during transition */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.1] }}
              transition={{
                duration: 1.2,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
            >
              <div className="text-center">
                <motion.h2
                  className="text-3xl font-bold text-white drop-shadow-lg"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome to Furrl!
                </motion.h2>
                <motion.div
                  className="mt-2 w-16 h-0.5 bg-white/80 mx-auto"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
