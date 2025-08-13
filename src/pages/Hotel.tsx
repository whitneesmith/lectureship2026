const Hotel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hotel Information
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            Stay at the beautiful Wyndham Courtland Grand Hotel in downtown Atlanta with special lectureship rates.
          </p>
        </div>
      </section>

      {/* Main Hotel Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-xl border border-slate-100 mb-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="mr-4 text-4xl">🏨</span>
                Wyndham Courtland Grand Hotel
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-slate-600 mr-3 mt-1 text-xl">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">165 Courtland Street NE</p>
                      <p className="text-gray-600">Atlanta, GA 30303</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate-600 mr-3 text-xl">📞</span>
                    <p className="text-gray-900 text-lg">(404) 659-6500</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate-600 mr-3 text-xl">💰</span>
                    <p className="text-gray-900 text-lg"><strong>$159/night</strong> (Single or Double Occupancy)</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">Reservation Details:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                      Check-in: 4:00 PM, March 8, 2026
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                      Check-out: 11:00 AM, March 12, 2026
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                      One night room and tax charged at reservation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                      No refunds granted
                    </li>
                  </ul>
                </div>
              </div>

              {/* Booking Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Booking */}
                <div className="bg-slate-900 text-white rounded-xl p-6 text-center">
                  <h4 className="text-xl font-semibold mb-4">📞 Phone Reservations</h4>
                  <p className="text-slate-200 text-3xl font-bold mb-2">(800) 609-6211</p>
                  <p className="text-sm text-slate-200">
                    Mention "Churches of Christ National Lectureship" for group rate
                  </p>
                </div>

                {/* Online Booking */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center">
                  <h4 className="text-xl font-semibold mb-4">💻 Online Booking</h4>
                  <p className="text-blue-100 mb-4">Use our special group booking link:</p>
                  <a 
                    href="https://book.passkey.com/event/51088699/owner/326/home" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    Book Online Now
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <span className="mr-3">ℹ️</span>
                  Important Notes
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                    Online booking automatically applies group rate
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                    Limited rooms available at group rate
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                    Book early to guarantee availability
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                    Group rate valid until February 15, 2026
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <span className="mr-3">🏢</span>
                  Hotel Amenities
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Free WiFi throughout hotel
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Fitness center and pool
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    On-site restaurant and bar
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Downtown Atlanta location
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Walking distance to attractions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotel;
