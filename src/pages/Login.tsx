import LoginPopup from "../components/LoginPopup";

const Login = () => {
  return (
    <div className="mobile-container relative overflow-hidden">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 pt-3 text-white text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          </div>
          <svg
            className="w-6 h-3 text-white ml-2"
            fill="currentColor"
            viewBox="0 0 24 12"
          >
            <path d="M1 4h2v4H1V4zm4-1h2v6H5V3zm4-1h2v8H9V2zm4 0h2v8h-2V2zm4 1h2v6h-2V3z" />
          </svg>
          <div className="w-6 h-3 border border-white rounded-sm ml-1">
            <div className="w-4 h-1 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Login Background */}
      <div className="absolute inset-0">
        <div className="grid-background h-full relative">
          <div className="grid-overlay" />

          {/* Fashion Model Image - Left Side - Bigger coverage */}
          <div className="absolute left-0 top-16 bottom-0 w-4/5 z-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F86370941743a488d90cea8fe041f4141%2F5a053cd832c143dd9116b984296a2eb7?format=webp&width=800"
              alt="Fashion model in pink dress"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Text Content - Top Right - Bigger text */}
          <div className="absolute top-20 right-4 z-20 text-right space-y-3">
            <h1 className="text-5xl font-bold text-white font-inter">
              Welcome
            </h1>
            <p className="text-xl text-white/90 font-serif italic">
              to a world of
            </p>
            <h2 className="text-5xl font-bold text-white font-inter">
              Fashion
            </h2>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      <LoginPopup onClose={() => {}} />
    </div>
  );
};

export default Login;
