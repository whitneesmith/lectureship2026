import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Registration Information
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            Register for the 80th Annual Churches of Christ National Lectureship. 
            Early bird pricing available until December 31, 2025.
          </p>
        </div>
      </section>

      {/* Registration Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Pricing</h2>
            <p className="text-xl text-gray-600">Choose the option that works best for you</p>
          </div>

          {/* Early Bird vs Regular Pricing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Early Bird Pricing */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  EARLY BIRD SPECIAL
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Save $20!</h3>
                <p className="text-green-700 font-semibold">Valid until December 31, 2025</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Individual Registration</span>
                  <span className="text-green-600 font-bold text-xl">$190</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Georgia Residents</span>
                  <span className="text-green-600 font-bold text-xl">$175</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Group 5 People</span>
                  <span className="text-green-600 font-bold text-xl">$925</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Group 10 People</span>
                  <span className="text-green-600 font-bold text-xl">$1,800</span>
                </div>
              </div>
            </div>

            {/* Regular Pricing */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="text-center mb-6">
                <div className="inline-block bg-slate-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  REGULAR RATES
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Pricing</h3>
                <p className="text-slate-700 font-semibold">Starting January 1, 2026</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Individual Registration</span>
                  <span className="text-slate-600 font-bold text-xl">$210</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Georgia Residents</span>
                  <span className="text-slate-600 font-bold text-xl">$195</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Group 5 People</span>
                  <span className="text-slate-600 font-bold text-xl">$975</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-gray-700 font-medium">Group 10 People</span>
                  <span className="text-slate-600 font-bold text-xl">$1,925</span>
                </div>
              </div>
            </div>
          </div>

          {/* Special Events */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Special Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎵</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Sunday Songfest</h4>
                <p className="text-gray-600 text-sm mb-2">March 8, 2026 • 4:30-6:00 PM</p>
                <p className="text-green-600 font-bold text-2xl">FREE</p>
                <p className="text-xs text-gray-500 mt-2">Open to all attendees</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👩</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Women's Division Luncheon</h4>
                <p className="text-gray-600 text-sm mb-2">March 11, 2026 • 12:00 PM</p>
                <p className="text-slate-600 font-bold text-2xl">$60</p>
                <p className="text-xs text-gray-500 mt-2">On-Site Purchase Only</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🍽️</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">John O. Williams Memorial Banquet</h4>
                <p className="text-gray-600 text-sm mb-2">March 12, 2026 • 6:00 PM</p>
                <p className="text-slate-600 font-bold text-2xl">$75</p>
                <p className="text-xs text-gray-500 mt-2">Limited seating available</p>
              </div>
            </div>
          </div>

          {/* Registration Information */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Registration Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">What's Included</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Access to all lectures and classes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Official lectureship program book
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Welcome reception refreshments
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Access to vendor exhibits
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Commemorative name badge
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Digital access to lecture recordings
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Registration Process</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    Complete registration form
                  </li>
                  <li className="flex items-start">
                    <span className="bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    Submit payment via check or money order
                  </li>
                  <li className="flex items-start">
                    <span className="bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    Receive confirmation email
                  </li>
                  <li className="flex items-start">
                    <span className="bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    Pick up materials at registration desk
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Registration Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="font-semibold text-slate-200 mb-2">Phone</h3>
                <p className="text-white text-lg font-bold">(800) 609-6211</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="font-semibold text-slate-200 mb-2">Email</h3>
                <p className="text-white text-lg">registration@cocnl.org</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="font-semibold text-slate-200 mb-2">Mail Registration</h3>
                <p className="text-white text-sm">
                  289 Jonesboro Road, Box #199<br />
                  McDonough, GA 30253
                </p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Payment Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200">
                <div className="flex items-center justify-center">
                  <span className="mr-2">💳</span>
                  <span>Check or Money Order</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="mr-2">📮</span>
                  <span>Mail-in Registration</span>
                </div>
              </div>
              <p className="text-slate-200 text-sm mt-4">
                Make checks payable to: "Churches of Christ National Lectureship"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Registration Form Requirements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Required Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    Full name and address
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    Phone number and email
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    Home congregation information
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    Emergency contact details
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    Special dietary requirements
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Important Deadlines</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-100 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">Early Bird Deadline</p>
                    <p className="text-green-700">December 31, 2025</p>
                  </div>
                  <div className="p-4 bg-yellow-100 rounded-lg border border-yellow-200">
                    <p className="font-semibold text-yellow-800">Final Registration</p>
                    <p className="text-yellow-700">February 15, 2026</p>
                  </div>
                  <div className="p-4 bg-red-100 rounded-lg border border-red-200">
                    <p className="font-semibold text-red-800">No Walk-in Registration</p>
                    <p className="text-red-700">Must register in advance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-900 text-white rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Register?</h3>
              <p className="text-slate-200 mb-6">
                Contact us today to secure your spot at this historic 80th Annual National Lectureship. 
                Don't miss out on early bird savings!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:8006096211" 
                  className="bg-white text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                >
                  Call (800) 609-6211
                </a>
                <a 
                  href="mailto:registration@cocnl.org" 
                  className="bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-slate-50">
        <div className="text-center">
          <Link to="/">
            <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
              ← Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Register;
