import { useState } from "react";

interface LoginPopupProps {
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="fixed inset-0 z-50">
      {/* Full Screen Background */}
      <div className="login-background w-full h-full relative">
        {/* Fashion Models Image */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-80 h-72">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2Fdac61f52c2474369bf95c8828313009b?format=webp&width=800"
            alt="Fashion models"
            className="w-full h-full object-cover object-center"
          />

          {/* Decorative flowers */}
          <div className="absolute bottom-0 right-0 w-16 h-16 opacity-80">
            <svg
              className="w-full h-full text-pink-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 pb-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-1">
              Personalize your experience.
            </h3>
            <div className="inline-block bg-yellow-400 px-4 py-2 rounded-full">
              <span className="text-sm font-bold text-black">Let's Go!</span>
            </div>
          </div>

          {/* Phone Input */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                <span className="text-gray-500 text-base">+91</span>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="w-full pl-16 pr-4 py-4 border-b-2 border-gray-200 focus:border-purple-500 outline-none text-base bg-transparent"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            className="w-full bg-purple-400 text-white py-4 rounded-full font-medium text-base mb-4 hover:bg-purple-500 transition-colors"
            onClick={() => {
              // Handle continue logic here
              console.log("Continue with phone:", phoneNumber);
            }}
          >
            Continue
          </button>

          {/* Terms */}
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
