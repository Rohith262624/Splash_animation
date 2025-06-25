import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginPopupProps {
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Mobile Container */}
      <div className="mobile-container h-full relative">
        {/* Full Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2Fb3a7fb72d8bd451cb65d264c4aeaa060?format=webp&width=800')`,
          }}
        >
          {/* Color overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#cccccc", opacity: 0.6 }}
          ></div>

          {/* User provided image layer */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-fade-in animate-delay-300">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2Ff0dab140d7624db79d02eb8c31945c33?format=webp&width=800"
              alt="Fashion models"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40"></div>
        </div>

        {/* Login Form - 1/3 Screen Coverage */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white rounded-t-3xl px-6 pt-4 pb-6 opacity-0 animate-slide-up animate-delay-600 shadow-2xl">
          {/* Handle */}
          <div className="flex justify-center mb-3">
            <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
          </div>

          {/* Header Text */}
          <div className="text-center mb-1">
            <h3 className="text-base font-normal text-gray-800 tracking-wide">
              Personalize your experience.
            </h3>
          </div>

          {/* Let's Go Button */}
          <div className="text-center mb-4">
            <div className="inline-block bg-yellow-400 px-6 py-1.5 rounded-full">
              <span className="text-sm font-bold text-black">Let's Go!</span>
            </div>
          </div>

          {/* Phone Input Section */}
          <div className="mb-4">
            <div className="flex items-center border-b border-gray-300 pb-2">
              <span className="text-gray-600 text-sm font-medium mr-3">
                +91
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="flex-1 text-sm text-gray-800 placeholder-gray-500 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            className="w-full bg-purple-400 text-white py-3 rounded-full font-medium text-sm mb-3 hover:bg-purple-500 transition-colors"
            onClick={() => {
              if (phoneNumber.length >= 10) {
                navigate("/dashboard");
              }
            }}
          >
            Continue
          </button>

          {/* Terms Text */}
          <p className="text-xs text-gray-500 text-center leading-tight">
            By continuing, I agree to Furrl's{" "}
            <button
              onClick={() => {
                window.open("/terms", "_blank");
              }}
              className="text-purple-500 underline hover:text-purple-600 transition-colors"
            >
              T&C
            </button>{" "}
            and{" "}
            <button
              onClick={() => {
                window.open("/privacy", "_blank");
              }}
              className="text-purple-500 underline hover:text-purple-600 transition-colors"
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
