import { useState } from "react";

interface LoginPopupProps {
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Bottom Sheet */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] bg-white rounded-t-3xl z-50 opacity-0 animate-slide-up">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="px-6 pb-8 pt-4">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 font-inter">
              Personalize your experience
            </h3>
            <div className="flex items-center justify-center mt-2 text-purple-600">
              <span className="text-sm font-medium">Let's go</span>
              <svg
                className="w-4 h-4 ml-1"
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <span className="text-gray-500 text-sm">+91</span>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your mobile number"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-inter"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            className="w-full bg-black text-white py-3 rounded-lg font-medium font-inter hover:bg-gray-800 transition-colors"
            onClick={() => {
              // Handle continue logic here
              console.log("Continue with phone:", phoneNumber);
            }}
          >
            Continue
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
            By continuing, you agree to our{" "}
            <span className="text-purple-600 underline">Terms of Service</span>{" "}
            and{" "}
            <span className="text-purple-600 underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
