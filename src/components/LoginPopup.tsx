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
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2F1816d02c76ee43688759ee3e3ca8810d?format=webp&width=800')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80"></div>
        </div>

        {/* Fashion Models */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-72 h-64 opacity-0 animate-fade-in">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2F30eee0bb43784c09a3914d1506476a0f?format=webp&width=800"
            alt="Fashion models"
            className="w-full h-full object-cover object-center rounded-2xl"
          />
        </div>

        {/* Login Form */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 pb-8 opacity-0 animate-slide-up shadow-2xl">
          {/* Handle */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Personalize your experience.
            </h3>
            <div className="inline-block bg-yellow-400 px-6 py-2 rounded-full">
              <span className="text-sm font-bold text-black">Let's Go!</span>
            </div>
          </div>

          {/* Phone Input */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center border-r border-gray-200 mr-4">
                <span className="text-gray-500 text-base font-medium">+91</span>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="w-full pl-16 pr-4 py-4 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-base bg-transparent transition-colors"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            className="w-full bg-purple-400 text-white py-4 rounded-full font-semibold text-base mb-6 hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => {
              if (phoneNumber.length >= 10) {
                navigate("/dashboard");
              }
            }}
          >
            Continue
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center leading-relaxed px-4">
            By continuing, I agree to Furrl's{" "}
            <span className="text-purple-500 underline font-medium">T&C</span>{" "}
            and{" "}
            <span className="text-purple-500 underline font-medium">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
