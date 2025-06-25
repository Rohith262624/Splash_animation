import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Animation sequence timeline
    const timers = [
      // Phase 1: Show welcome screen (0-3s)
      setTimeout(() => setAnimationPhase(1), 500),

      // Phase 2: Start bubble transition (3s)
      setTimeout(() => setAnimationPhase(2), 3000),

      // Phase 2.5: Complete bubble transition to shopping screen (3.5s)
      setTimeout(() => setAnimationPhase(2.5), 3500),

      // Phase 3: Cart comes up from bottom AND Blue woman exits (5-7s)
      setTimeout(() => setAnimationPhase(3), 5000),

      // Phase 4: Show disclaimer (7-9s)
      setTimeout(() => setAnimationPhase(4), 7000),

      // Phase 5: Show disclaimer (9-10s)
      setTimeout(() => setAnimationPhase(5), 9000),

      // Phase 6: Scroll to login page (10s)
      setTimeout(() => {
        setAnimationPhase(6);
        // Navigate to login page after scroll animation completes
        setTimeout(() => navigate("/login"), 1000);
      }, 10000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [navigate]);

  return (
    <div className="mobile-container relative overflow-hidden">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 pt-3 text-white text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          </div>
          <svg
            className="w-6 h-3 text-white ml-2"
            fill="currentColor"
            viewBox="0 0 24 12"
          >
            <path d="M1 4h2v4H1V4zm4-1h2v6H5V3zm4-1h2v8H9V2zm4 0h2v8h-2V2zm4 1h2v6h-2V3z" />
          </svg>
          <div className="w-6 h-3 border border-white rounded-sm ml-1">
            <div className="w-4 h-1 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Phase 1: Welcome Screen */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          animationPhase >= 2 ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="grid-background h-full relative">
          <div className="grid-overlay" />

          {/* Fashion Model Image - More to the left */}
          <div
            className={`absolute -left-16 top-16 bottom-0 w-4/5 z-10 transition-all duration-800 ${
              animationPhase >= 1
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2F5a053cd832c143dd9116b984296a2eb7?format=webp&width=800"
              alt="Fashion model in pink dress"
              className="w-full h-full object-cover object-left"
            />
          </div>

          {/* Text Content - Top Right - Bigger text */}
          <div
            className={`absolute top-20 right-4 z-20 text-right space-y-3 transition-all duration-800 delay-300 ${
              animationPhase >= 1
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
          >
            <h1 className="text-5xl font-bold text-white font-inter">
              Welcome
            </h1>
            <p
              className="text-3xl text-white/90 italic"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              to a world of
            </p>
          </div>
        </div>
      </div>

      {/* Phase 2-4: Shopping Screen with Bubble Transition */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          animationPhase >= 2 && animationPhase < 6
            ? "opacity-100"
            : "opacity-0"
        } ${animationPhase >= 6 ? "transform -translate-y-full transition-transform duration-1500 ease-in-out" : ""}`}
        style={{
          background: `
            linear-gradient(rgba(200,200,200,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,200,200,0.15) 1px, transparent 1px),
            #ffffff
          `,
          backgroundSize: "24px 24px",
          clipPath:
            animationPhase < 2
              ? "circle(0px at 85% 15%)"
              : animationPhase >= 2.5
                ? "circle(150% at 85% 15%)"
                : "circle(50% at 85% 15%)",
          transition: "clip-path 1.5s cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
      >
        {/* Status Bar for shopping (black) */}
        <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 pt-3 text-black text-sm font-medium">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black/50 rounded-full"></div>
            </div>
            <svg
              className="w-6 h-3 text-black ml-2"
              fill="currentColor"
              viewBox="0 0 24 12"
            >
              <path d="M1 4h2v4H1V4zm4-1h2v6H5V3zm4-1h2v8H9V2zm4 0h2v8h-2V2zm4 1h2v6h-2V3z" />
            </svg>
            <div className="w-6 h-3 border border-black rounded-sm ml-1">
              <div className="w-4 h-1 bg-black rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>

        {/* Logo in top right */}
        <div className="absolute top-16 right-6 z-20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F3a0eaa095f264d03898ed24c2288df2c%2F448051771e134fcca96484d086b1ffea?format=webp&width=800"
            alt="Furrl Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="absolute top-28 right-6 z-20 text-right">
          <h1
            className="text-2xl font-light text-gray-600 mb-4"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Stylish
          </h1>
        </div>

        {/* Homegrown brands - moved down and left */}
        <div className="absolute top-40 right-12 z-20 text-right">
          <h2 className="text-xl font-bold text-gray-800">Homegrown brands</h2>
        </div>

        {/* Blue Woman Image - Left side initially - Made even bigger */}
        <div
          className={`absolute left-0 top-16 bottom-0 w-4/5 z-20 transition-all duration-4000 ${
            animationPhase >= 2.5 && animationPhase < 3
              ? "opacity-100 transform translate-x-0 scale-100"
              : animationPhase >= 3
                ? "opacity-0 transform translate-x-40 translate-y-32 scale-50"
                : "opacity-0"
          }`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F3a0eaa095f264d03898ed24c2288df2c%2F90a55bd3ad714779b72a3ef29795f572?format=webp&width=800"
            alt="Woman in blue dress"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Cart Interface Image - Smaller, centered, transitions with blue woman */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-40 h-56 z-30 transition-all duration-2000 ${
            animationPhase < 3
              ? "opacity-0 translate-y-full bottom-[-400px]"
              : "opacity-100 translate-y-0 bottom-32"
          }`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F3a0eaa095f264d03898ed24c2288df2c%2F27101a47b96b4bf8ba4ec2725d0d5dc2?format=webp&width=800"
            alt="Furrl shopping interface"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Disclaimer Text - Below cart, appears with zoom animations */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-40 transition-all duration-2000 ${
            animationPhase >= 4
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {/* Warning Triangle Icon */}
          <div className="flex justify-center mb-2">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9V13M12 17H12.01M4.22 18L12 4L19.78 18H4.22Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Disclaimer Text - All in one line, black text */}
          <div className="space-y-1">
            <p className="text-lg font-medium text-black whitespace-nowrap">
              Our Looks are addictive..
            </p>
            <p className="text-base text-gray-500">Scroll at your own risk!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
