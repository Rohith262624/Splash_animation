import { useState } from "react";

interface LoginPopupProps {
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 opacity-0 animate-fade-in"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] bg-white rounded-t-3xl z-50 opacity-0 animate-slide-up shadow-2xl">
        {/* Handle */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="px-6 pb-8 pt-2">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 font-inter mb-2">
              Personalize your experience
            </h3>
            <div className="flex items-center justify-center text-purple-600">
              <span className="text-base font-medium">Let's go</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Phone Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-800 mb-3 font-inter">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center border-r border-gray-200">
                <span className="text-gray-600 text-base font-medium">+91</span>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your mobile number"
                className="w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 font-inter text-base transition-colors"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            className="w-full bg-black text-white py-4 rounded-xl font-semibold font-inter hover:bg-gray-800 transition-colors text-base shadow-lg"
            onClick={() => {
              // Handle continue logic here
              console.log("Continue with phone:", phoneNumber);
            }}
          >
            Continue
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed px-2">
            By continuing, you agree to our{" "}
            <span className="text-purple-600 underline font-medium">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-purple-600 underline font-medium">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
