import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Registration Information</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold text-slate-800 mb-4">Early Bird Special</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Individual Registration</span>
                <span className="text-slate-600 font-bold">$190</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Georgia Residents</span>
                <span className="text-slate-600 font-bold">$175</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">*Valid until December 31, 2025</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold text-slate-800 mb-4">Regular Rates</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Individual Registration</span>
                <span className="text-slate-600 font-bold">$210</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Georgia Residents</span>
                <span className="text-slate-600 font-bold">$195</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">*Starting January 1, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
