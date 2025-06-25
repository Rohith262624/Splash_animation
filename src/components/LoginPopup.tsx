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
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#cccccc", opacity: 0.6 }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40"></div>
        </div>

        {/* Login Form - Pixel Perfect Design */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl px-6 pt-6 pb-8 opacity-0 animate-slide-up shadow-2xl">
          {/* Handle */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
          </div>

          {/* Header Text */}
          <div className="text-center mb-2">
            <h3 className="text-lg font-normal text-gray-800 tracking-wide">
              Personalize your experience.
            </h3>
          </div>

          {/* Let's Go Button */}
          <div className="text-center mb-8">
            <div className="inline-block bg-yellow-400 px-8 py-2 rounded-full">
              <span className="text-sm font-bold text-black">Let's Go!</span>
            </div>
          </div>

          {/* Phone Input Section */}
          <div className="mb-8">
            <div className="flex items-center border-b border-gray-300 pb-3">
              <span className="text-gray-600 text-base font-medium mr-4">
                +91
              </span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="flex-1 text-base text-gray-800 placeholder-gray-500 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            className="w-full bg-purple-400 text-white py-4 rounded-full font-medium text-base mb-6 hover:bg-purple-500 transition-colors"
            onClick={() => {
              if (phoneNumber.length >= 10) {
                navigate("/dashboard");
              }
            }}
          >
            Continue
          </button>

          {/* Terms Text */}
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By continuing, I agree to Furrl's{" "}
            <span className="text-purple-500 underline">T&C</span> and{" "}
            <span className="text-purple-500 underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
