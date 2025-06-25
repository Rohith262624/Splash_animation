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

      {/* Logo in top-right corner */}
      <div className="absolute top-6 right-6 z-20">
        <div className="text-white font-inter font-bold text-xl opacity-0 animate-fade-in animate-delay-300">
          Furrl
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Typography Section */}
        <div className="flex-1 flex flex-col justify-center px-8">
          <div className="text-center space-y-2">
            {/* Welcome */}
            <h1 className="text-4xl font-bold text-white font-inter opacity-0 animate-text-reveal">
              Welcome
            </h1>

            {/* to a world of */}
            <p className="text-xl text-white/90 font-serif italic opacity-0 animate-text-reveal animate-delay-300">
              to a world of
            </p>

            {/* Fashion */}
            <h2 className="text-4xl font-bold text-white font-inter opacity-0 animate-text-reveal animate-delay-600">
              Fashion
            </h2>
          </div>
        </div>

        {/* Fashion Model Image */}
        <div className="relative flex-shrink-0 h-80 opacity-0 animate-slide-in-bottom animate-delay-900">
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-80">
            {/* Fashion model placeholder - replace with actual image */}
            <div className="w-full h-full bg-gradient-to-t from-purple-900/30 via-purple-800/20 to-transparent rounded-t-3xl border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="text-white/50 text-center">
                <div className="w-24 h-24 bg-white/5 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V4H13V5.5L7 7V9L13 7.5L21 9ZM13 10.5V13H11V10.5L5 12V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V12L13 10.5Z" />
                  </svg>
                </div>
                <p className="text-xs font-inter text-white/40">
                  Fashion Model
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Welcome;
