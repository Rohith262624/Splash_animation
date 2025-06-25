import { useState, useEffect } from "react";
import LoginPopup from "../components/LoginPopup";

const Welcome = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Animation sequence timeline
    const timers = [
      // Phase 1: Show initial background and text (0-2s)
      setTimeout(() => setAnimationPhase(1), 500),

      // Phase 2: Mobile appears and woman zooms into it (2-4s)
      setTimeout(() => setAnimationPhase(2), 2000),

      // Phase 3: Add shopping icons to mobile (4-5s)
      setTimeout(() => setAnimationPhase(3), 4000),

      // Phase 4: Phone moves up, reveal login (5-7s)
      setTimeout(() => setAnimationPhase(4), 5000),

      // Phase 5: Show login popup (7s)
      setTimeout(() => setShowLogin(true), 7000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="mobile-container relative overflow-hidden">
      {/* Status Bar */}
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

      {/* Initial Background - White grid pattern from second image */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          animationPhase >= 4 ? "transform translate-y-[-100%]" : ""
        }`}
        style={{
          background: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
            #f8f9fa
          `,
          backgroundSize: "20px 20px",
        }}
      >
        {/* Logo in top right */}
        <div
          className={`absolute top-16 right-6 z-20 transition-all duration-800 ${
            animationPhase >= 1
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`absolute top-32 left-6 right-6 z-20 transition-all duration-800 delay-300 ${
            animationPhase >= 1
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          <h1
            className="text-4xl font-light text-gray-600 mb-2"
            style={{ fontFamily: "serif" }}
          >
            Stylish
          </h1>
          <h2 className="text-3xl font-bold text-gray-800">
            Homegrown
            <br />
            brands
          </h2>
        </div>

        {/* Blue Woman Image - Full size initially */}
        <div
          className={`absolute transition-all duration-2000 ${
            animationPhase < 2
              ? "bottom-0 left-0 w-full h-3/5"
              : animationPhase < 4
                ? "bottom-48 left-1/2 w-48 h-64 transform -translate-x-1/2 scale-75"
                : "bottom-48 left-1/2 w-48 h-64 transform -translate-x-1/2 -translate-y-32 scale-75"
          } ${animationPhase >= 1 ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F3a0eaa095f264d03898ed24c2288df2c%2F90a55bd3ad714779b72a3ef29795f572?format=webp&width=800"
            alt="Woman in blue dress"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Mobile Phone Frame */}
        <div
          className={`absolute transition-all duration-2000 ${
            animationPhase < 2
              ? "opacity-0 scale-0 bottom-0 left-1/2 transform -translate-x-1/2"
              : animationPhase < 4
                ? "opacity-100 scale-100 bottom-32 left-1/2 transform -translate-x-1/2"
                : "opacity-100 scale-100 bottom-64 left-1/2 transform -translate-x-1/2 -translate-y-32"
          }`}
        >
          {/* Phone Border */}
          <div className="w-52 h-96 bg-black rounded-3xl p-1 shadow-2xl">
            {/* Screen */}
            <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative">
              {/* Screen Content - Mobile Interface */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                  linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
                  #f8f9fa
                `,
                  backgroundSize: "15px 15px",
                }}
              >
                {/* Mobile Status Bar */}
                <div className="flex justify-between items-center px-4 pt-3 text-black text-xs">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 border border-black rounded-sm">
                      <div className="w-2 h-0.5 bg-black rounded-sm m-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* Logo in mobile */}
                <div className="absolute top-12 right-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                </div>

                {/* Mobile Text */}
                <div className="absolute top-20 left-4 right-4">
                  <h1
                    className="text-xl font-light text-gray-600 mb-1"
                    style={{ fontFamily: "serif" }}
                  >
                    Stylish
                  </h1>
                  <h2 className="text-lg font-bold text-gray-800">
                    Homegrown
                    <br />
                    brands
                  </h2>
                </div>

                {/* Woman image in mobile */}
                <div className="absolute bottom-16 left-2 right-2 h-32">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F3a0eaa095f264d03898ed24c2288df2c%2F90a55bd3ad714779b72a3ef29795f572?format=webp&width=800"
                    alt="Woman in blue dress"
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                </div>

                {/* Shopping Icons */}
                <div
                  className={`absolute bottom-4 left-4 right-4 flex justify-around transition-all duration-500 ${
                    animationPhase >= 3
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-4"
                  }`}
                >
                  {/* Cart Icon */}
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Heart Icon */}
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.041 1.5487 8.5C1.5487 9.959 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Search Icon */}
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="8"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="m21 21-4.35-4.35"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Profile Icon */}
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="7"
                        r="4"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Background - Revealed from bottom */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          animationPhase >= 4
            ? "transform translate-y-0"
            : "transform translate-y-full"
        }`}
      >
        <div className="grid-background h-full relative">
          <div className="grid-overlay" />

          {/* Fashion Model Image - Left Side */}
          <div className="absolute left-0 top-16 bottom-0 w-3/5 z-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2F5a053cd832c143dd9116b984296a2eb7?format=webp&width=800"
              alt="Fashion model in pink dress"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Text Content - Top Right */}
          <div className="absolute top-16 right-4 z-20 text-right space-y-2">
            <h1 className="text-3xl font-bold text-white font-inter">
              Welcome
            </h1>
            <p className="text-base text-white/90 font-serif italic">
              to a world of
            </p>
            <h2 className="text-3xl font-bold text-white font-inter">
              Fashion
            </h2>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Welcome;
