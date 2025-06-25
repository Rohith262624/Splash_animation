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

        {/* Bubble Transition Overlay - only for welcome to dashboard transition */}
        {isWelcomeToDashboard && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Main bubble element */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600"
              initial={{
                clipPath: "circle(0% at 100% 0%)",
              }}
              animate={{
                clipPath: "circle(150% at 100% 0%)",
              }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
            />

            {/* Subtle ripple effect at the start point */}
            <motion.div
              className="absolute top-0 right-0 w-4 h-4 bg-white/20 rounded-full"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 2, 0],
                opacity: [0, 0.6, 0.3, 0],
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />

            {/* Secondary ripple */}
            <motion.div
              className="absolute top-0 right-0 w-6 h-6 bg-white/10 rounded-full"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 1.5, 0],
                opacity: [0, 0.4, 0.2, 0],
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
