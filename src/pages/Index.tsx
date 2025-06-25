const Index = () => {
  return (
    <div className="mobile-container grid-background">
      <div className="grid-overlay" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-white font-inter">
            Furrl Dashboard
          </h1>
          <p className="text-white/80 text-lg">
            Welcome to your fashion experience
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-white text-black rounded-lg font-medium font-inter hover:bg-gray-100 transition-colors">
              Explore Fashion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
