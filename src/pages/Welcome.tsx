import { useState, useEffect } from "react";
import LoginPopup from "../components/LoginPopup";

const Welcome = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Show login popup after welcome animations complete
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mobile-container grid-background relative">
      <div className="grid-overlay" />

      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-6 pt-3 text-white text-sm font-medium">
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

      {/* Text Content - Top Right */}
      <div className="absolute top-16 right-4 z-20 text-right space-y-2">
        {/* Welcome */}
        <h1 className="text-3xl font-bold text-white font-inter opacity-0 animate-text-reveal">
          Welcome
        </h1>

        {/* to a world of */}
        <p className="text-base text-white/90 font-serif italic opacity-0 animate-text-reveal animate-delay-300">
          to a world of
        </p>

        {/* Fashion */}
        <h2 className="text-3xl font-bold text-white font-inter opacity-0 animate-text-reveal animate-delay-600">
          Fashion
        </h2>
      </div>

      {/* Fashion Model Image - Left Side (Full Coverage) */}
      <div className="absolute left-0 top-16 bottom-0 w-3/5 z-10 opacity-0 animate-slide-in-bottom animate-delay-600">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2F5a053cd832c143dd9116b984296a2eb7?format=webp&width=800"
          alt="Fashion model in pink dress"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle gradient overlay to help text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Login Popup */}
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Welcome;
