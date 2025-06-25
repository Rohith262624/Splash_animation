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
    <div className="mobile-container grid-background relative">
      <div className="grid-overlay" />

      {/* Furrl Logo Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white font-inter tracking-wider opacity-0 animate-fade-in-scale">
            Furrl
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Splash;
