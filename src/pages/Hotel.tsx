const Hotel = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Hotel Information</h1>
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Courtland Grand Hotel</h2>
          <p className="text-gray-600 mb-4">165 Courtland Street NE, Atlanta, GA 30303</p>
          <p className="text-gray-600 mb-4">Phone: (404) 659-6500</p>
          <p className="text-gray-600 mb-4">Rate: $159/night</p>
          <div className="bg-slate-900 text-white rounded-lg p-4 text-center">
            <p className="font-semibold mb-2">Make Reservations:</p>
            <p className="text-2xl font-bold">(888) 310-7807</p>
            <p className="text-sm mt-2">Mention "Churches of Christ National Lectureship"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
