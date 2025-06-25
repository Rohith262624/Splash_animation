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

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col pt-16">
        {/* Welcome Text */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white font-inter tracking-wide opacity-0 animate-text-reveal">
            Welcome
          </h1>
        </div>

        {/* Fashion Model Image */}
        <div className="relative h-96 opacity-0 animate-slide-in-bottom animate-delay-600">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-96">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2Fb69a2f089fd245f4a565a41bfd514c26?format=webp&width=800"
              alt="Fashion model in pink dress"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 right-8 w-12 h-12 opacity-80">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-12"></div>
          </div>
          <div className="absolute bottom-4 right-16 w-8 h-8 opacity-60">
            <svg
              className="w-full h-full text-pink-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Bottom Phone Frame */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-black rounded-3xl border-4 border-gray-800 flex items-center justify-center opacity-0 animate-fade-in animate-delay-1200">
          <div className="w-40 h-16 bg-white rounded-2xl flex items-center justify-center">
            <span className="text-purple-400 text-lg font-bold font-inter">
              Furrl
            </span>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Welcome;
