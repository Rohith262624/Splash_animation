import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mobile-container grid-background relative overflow-hidden">
      <div className="grid-overlay" />

      {/* Furrl Logo Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-white font-inter tracking-widest opacity-0 animate-fade-in-scale">
            Furrl
          </h1>
          <div className="mt-4 w-20 h-0.5 bg-white/60 mx-auto opacity-0 animate-fade-in animate-delay-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
