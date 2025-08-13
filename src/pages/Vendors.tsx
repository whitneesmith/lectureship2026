const Vendors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vendor Information
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            Join us as a vendor at the 80th Annual Churches of Christ National Lectureship. 
            Connect with thousands of attendees from across the nation.
          </p>
        </div>
      </section>

      {/* Vendor Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vendor Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Vendor Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Books & Literature</h3>
                <p className="text-gray-600">Christian books, Bibles, study materials, and educational resources</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎵</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Music & Media</h3>
                <p className="text-gray-600">Hymn books, CDs, DVDs, and digital media resources</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⛪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Church Services</h3>
                <p className="text-gray-600">Ministry resources, church supplies, and organizational tools</p>
              </div>
            </div>
          </div>

          {/* Vendor Packages */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Vendor Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Standard Booth</h3>
                <div className="text-3xl font-bold text-slate-600 mb-4">$350</div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    8' x 10' booth space
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    One 6-foot table
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Two chairs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Electrical outlet access
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Listing in program
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-8 shadow-lg border-2 border-slate-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Premium Booth</h3>
                <div className="text-3xl font-bold text-slate-600 mb-4">$500</div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    10' x 10' booth space
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Two 6-foot tables
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Four chairs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Multiple electrical outlets
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Premium program listing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Corner location preference
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Information */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">How to Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-200 mb-4">Application Process</h3>
                <ol className="space-y-3 text-slate-100">
                  <li className="flex items-start">
                    <span className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    Submit vendor application form
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    Provide business license and insurance
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    Submit payment for booth space
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-slate-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    Receive confirmation and setup details
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-200 mb-4">Important Dates</h3>
                <div className="space-y-3 text-slate-100">
                  <div className="flex justify-between items-center">
                    <span>Application Deadline:</span>
                    <span className="font-bold">February 1, 2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Payment Due:</span>
                    <span className="font-bold">February 15, 2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Setup Day:</span>
                    <span className="font-bold">March 8, 2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Event Dates:</span>
                    <span className="font-bold">March 8-12, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Vendor Coordinator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">(800) 609-6211</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">vendors@cocnl.org</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mail</h3>
                <p className="text-gray-600 text-sm">
                  289 Jonesboro Road, Box #199<br />
                  McDonough, GA 30253
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">Ready to become a vendor?</p>
              <p className="text-gray-600">
                Contact us today to reserve your booth space and connect with thousands of attendees 
                at this historic 80th Annual National Lectureship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vendors;
