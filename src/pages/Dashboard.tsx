const Dashboard = () => {
  return (
    <div className="mobile-container bg-white relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-2 text-black text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black/50 rounded-full"></div>
          </div>
          <svg className="w-6 h-3 text-black ml-2" fill="currentColor" viewBox="0 0 24 12">
            <path d="M1 4h2v4H1V4zm4-1h2v6H5V3zm4-1h2v8H9V2zm4 0h2v8h-2V2zm4 1h2v6h-2V3z"/>
          </svg>
          <div className="w-6 h-3 border border-black rounded-sm ml-1">
            <div className="w-4 h-1 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-purple-500">Furrl</h1>
        <div className="flex items-center space-x-4">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
          <div className="relative">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M17 17a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              12
            </div>
          </div>
        </div>
      </div>

      {/* What To Wear Section */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">What To Wear</h2>
        <div className="flex justify-between">
          {[
            { label: "To Work", image: "👩‍💼" },
            { label: "For A Party", image: "🎉" },
            { label: "Everyday", image: "👕" },
            { label: "On Vacation", image: "🏖️" },
            { label: "To Weddings", image: "💒" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 text-lg">
                {item.image}
              </div>
              <p className="text-xs text-gray-600 leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What's Your Vibe Section */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">What's Your <span className="text-purple-500">#Vibe</span> today?</h2>
          <span className="text-purple-500 text-sm font-medium">View All ></span>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto">
          <div className="flex-shrink-0 w-32">
            <div className="bg-purple-100 rounded-lg p-3 mb-2 h-40 relative overflow-hidden">
              <div className="absolute bottom-2 left-2 bg-yellow-400 px-2 py-1 rounded text-xs font-bold">
                #Vibe of the Week
              </div>
            </div>
            <p className="text-sm font-medium">#PowerDressing</p>
          </div>
          
          <div className="flex-shrink-0 w-32">
            <div className="bg-blue-100 rounded-lg p-3 mb-2 h-40"></div>
            <p className="text-sm font-medium">#WorkAccents</p>
          </div>
          
          <div className="flex-shrink-0 w-32">
            <div className="bg-pink-100 rounded-lg p-3 mb-2 h-40"></div>
            <p className="text-sm font-medium">#Pyjamas</p>
          </div>
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="px-6 mb-20">
        <h2 className="text-lg font-semibold mb-2">Top <span className="text-yellow-500">Categories</span></h2>
        <p className="text-sm text-gray-600 mb-4">Your go-to categories, but from unique Indie brands!</p>
        
        <div className="grid grid-cols-4 gap-3 mb-4">
          {[
            { label: "Kurtas", color: "bg-purple-100" },
            { label: "Sarees", color: "bg-yellow-100" },
            { label: "Co-Ords", color: "bg-red-100" },
            { label: "Dresses", color: "bg-blue-100" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className={`${item.color} rounded-lg h-20 mb-2 relative overflow-hidden`}>
                <div className="absolute bottom-1 left-1 bg-white rounded-full w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-xs font-medium">{item.label}</p>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-purple-100 text-purple-600 py-3 rounded-lg font-medium flex items-center justify-center">
          View All Categories 
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] bg-white border-t border-gray-200">
        <div className="flex justify-around py-3">
          <div className="text-center">
            <div className="w-6 h-6 mx-auto mb-1 text-purple-500">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <p className="text-xs text-purple-500 font-medium">Home</p>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 mx-auto mb-1 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
              </svg>
            </div>
            <p className="text-xs text-gray-400">Categories</p>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 mx-auto mb-1 text-gray-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <p className="text-xs text-gray-400">Profile</p>
          </div>
        </div>
        <div className="h-1 bg-black rounded-full w-32 mx-auto"></div>
      </div>
    </div>
  );
};

export default Dashboard;