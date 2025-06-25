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
            <div className="w-full h-full rounded-t-3xl overflow-hidden relative">
              <img
                src="https://images.pexels.com/photos/32711822/pexels-photo-32711822.jpeg"
                alt="Fashion model in elegant dress"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
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
