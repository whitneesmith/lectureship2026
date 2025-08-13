import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 backdrop-blur-sm rounded-3xl p-8 mb-6 border-2 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-slate-200/30 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-slate-200/30 to-transparent rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded"></div>
                <div className="mx-4 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">✝</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                Churches of Christ 80th Annual "Historical" National Lectureship
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-semibold">
                In Cooperation and Supported by the Greater Atlanta, Georgia, Area Churches of Christ
              </p>
            </div>
          </div>
          
          {/* Theme Section */}
          <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 backdrop-blur-sm rounded-3xl p-8 mb-8 border-2 border-slate-600 shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                "One Lord… One Faith… One Baptism"
              </h2>
              <p className="text-xl md:text-2xl text-slate-200 font-bold">
                2026 Lectureship Theme
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-500 shadow-xl">
            <p className="text-xl md:text-2xl text-white font-bold">
              March 8-12, 2026
            </p>
            <p className="text-lg md:text-xl text-slate-200 font-semibold">
              Wyndham Courtland Grand Hotel • Atlanta, Georgia
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                Register Today
              </button>
            </Link>
            <Link to="/hotel">
              <button className="bg-white/90 hover:bg-white text-slate-700 font-bold py-4 px-8 rounded-lg shadow-lg border-2 border-slate-300 hover:border-slate-400 transition-all duration-200">
                Hotel Info
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join us for five days of fellowship, worship, and spiritual growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">When</h3>
              <p className="text-gray-600">March 8-12, 2026</p>
              <p className="text-sm text-gray-500">Five days of fellowship</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Where</h3>
              <p className="text-gray-600">Courtland Grand Hotel</p>
              <p className="text-sm text-gray-500">Atlanta, Georgia</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Theme</h3>
              <p className="text-gray-600 font-bold">"One Lord… One Faith… One Baptism"</p>
              <p className="text-sm text-gray-500">80th Annual Celebration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
