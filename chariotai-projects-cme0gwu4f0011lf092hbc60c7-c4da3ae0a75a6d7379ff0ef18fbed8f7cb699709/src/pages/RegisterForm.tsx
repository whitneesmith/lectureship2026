        import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    registrationType: '',
    quantity: 1,
    attendeeNames: '',
    attendeeContacts: '',
    specialEvents: [] as string[],
    paymentMethod: '',
    additionalNotes: ''
  });

  const [showPayment, setShowPayment] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'specialEvents') {
        setFormData(prev => ({
          ...prev,
          specialEvents: checked 
            ? [...prev.specialEvents, value]
            : prev.specialEvents.filter(event => event !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate group registrations or multiple individual registrations have attendee names
    if (((formData.registrationType.includes('group-5') || formData.registrationType.includes('group-10')) || 
         (formData.quantity > 1 && !formData.registrationType.includes('group-'))) && 
        !formData.attendeeNames.trim()) {
      alert('Please list all attendee names.');
      return;
    }
    
    // Validate contact info for multiple registrations
    if (((formData.registrationType.includes('group-5') || formData.registrationType.includes('group-10')) || 
         (formData.quantity > 1 && !formData.registrationType.includes('group-'))) && 
        !formData.attendeeContacts.trim()) {
      alert('Please provide contact information for all attendees.');
      return;
    }
    
    setShowPayment(true);
  };

  // Payment links - DEMO LINKS FOR TESTING (Replace with real Square links later)
  const getPaymentLinks = () => {
    const links: { [key: string]: string } = {
      'individual-early': '#demo-early-bird-payment',
      'individual-regular': '#demo-regular-payment',
      'georgia-early': '#demo-georgia-early-payment',
      'georgia-regular': '#demo-georgia-regular-payment',
      'group-5-early': '#demo-group5-early-payment',
      'group-5-regular': '#demo-group5-regular-payment',
      'group-10-early': '#demo-group10-early-payment',
      'group-10-regular': '#demo-group10-regular-payment',
      'memorial-banquet': '#demo-banquet-payment'
    };
    return links;
  };

  const getRegistrationPrice = () => {
    const prices: { [key: string]: number } = {
      'individual-early': 190,
      'individual-regular': 210,
      'georgia-early': 175,
      'georgia-regular': 195,
      'group-5-early': 925,
      'group-5-regular': 975,
      'group-10-early': 1800,
      'group-10-regular': 1925
    };
    const basePrice = prices[formData.registrationType] || 0;
    
    // For group registrations, price is fixed regardless of quantity
    if (formData.registrationType.includes('group-')) {
      return basePrice;
    }
    
    // For individual registrations, multiply by quantity
    return basePrice * formData.quantity;
  };

  if (showPayment) {
    const paymentLinks = getPaymentLinks();
    const registrationPrice = getRegistrationPrice();
    const banquetSelected = formData.specialEvents.includes('memorial-banquet');

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">✓</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Your Payment</h2>
              <p className="text-slate-600">
                Thank you {formData.firstName}! Please complete your payment below.
              </p>
            </div>

            {/* Registration Summary */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Registration Summary</h3>
              <div className="space-y-2 text-slate-700">
                <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Registration Type:</strong> {formData.registrationType}</p>
                {!formData.registrationType.includes('group-') && formData.quantity > 1 && (
                  <p><strong>Quantity:</strong> {formData.quantity} people</p>
                )}
                <p><strong>Attendees:</strong> {formData.attendeeNames}</p>
                {formData.attendeeContacts && (
                  <p><strong>Attendee Contacts:</strong> {formData.attendeeContacts}</p>
                )}
                {banquetSelected && <p><strong>John O. Williams Memorial Banquet:</strong> Additional banquet-only tickets (+$75 for non-Lectureship guests)</p>}
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-6">
              {/* Main Registration Payment */}
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Registration Fee</h4>
                    <p className="text-slate-600">{formData.registrationType}</p>
                    {!formData.registrationType.includes('group-') && formData.quantity > 1 && (
                      <p className="text-slate-500 text-sm">{formData.quantity} people × ${registrationPrice / formData.quantity}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">${registrationPrice}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Square Payment */}
                  <a 
                    href={paymentLinks[formData.registrationType]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-200 transform hover:scale-105"
                  >
                    💳 Pay with Card
                  </a>
                  
                  {/* Zelle Payment */}
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 px-6 rounded-lg text-center">
                    <div className="text-sm">Zelle to:</div>
                    <div className="text-xs">cocnl1945@gmail.com</div>
                  </div>
                  
                  {/* Mail Payment */}
                  <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold py-3 px-6 rounded-lg text-center">
                    <div className="text-sm">Mail Check</div>
                    <div className="text-xs">See details below</div>
                  </div>
                </div>
              </div>

              {/* Memorial Banquet Payment */}
              {banquetSelected && (
                <div className="border border-orange-200 bg-orange-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">John O. Williams Memorial Banquet</h4>
                      <p className="text-slate-600">Additional Banquet-Only Tickets • March 12, 2026 • 6:00 PM</p>
                      <p className="text-orange-700 text-sm font-medium mt-1">
                        ⚠️ This is for banquet-only guests (not registered for Lectureship)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-slate-900">$75</p>
                      <p className="text-slate-600 text-sm">per ticket</p>
                    </div>
                  </div>
                  
                  <a 
                    href={paymentLinks['memorial-banquet']}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 px-6 rounded-lg inline-block text-center transition-all duration-200 transform hover:scale-105"
                  >
                    💳 Pay for Banquet-Only Tickets
                  </a>
                </div>
              )}
            </div>

            {/* Payment Instructions */}
            <div className="mt-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Payment Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-200 mb-2">Digital Payments</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• <strong>Credit Card:</strong> Click "Pay with Card" buttons above</li>
                    <li>• <strong>Zelle:</strong> Send to cocnl1945@gmail.com</li>
                    <li>• <strong>Include:</strong> Your name and "Lectureship Registration"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 mb-2">Mail-In Payment</h4>
                  <div className="text-slate-300 text-sm">
                    <p className="mb-2">Make checks payable to:</p>
                    <div className="bg-white/10 rounded p-2">
                      <p><strong>Churches of Christ National Lectureship</strong></p>
                      <p>289 Jonesboro Road, STE #199</p>
                      <p>McDonough, GA 30253</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 text-center space-x-4">
              <button 
                onClick={() => setShowPayment(false)}
                className="bg-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                ← Edit Registration
              </button>
              <Link 
                to="/"
                className="bg-white text-slate-600 font-bold py-3 px-6 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors duration-200 inline-block"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Registration Form</h1>
          <p className="text-xl text-slate-100">
            Churches of Christ 80th Annual "Historical" National Lectureship
          </p>
          <p className="text-slate-200 mt-2">March 9-13, 2026 • Atlanta, Georgia</p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Street Address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="Atlanta"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="GA"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="30303"
                  />
                </div>
              </div>
            </div>

            {/* Registration Type */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Registration Type</h3>
              <select
                name="registrationType"
                required
                value={formData.registrationType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <option value="">Select registration type</option>
                <option value="individual-early">Individual Early Bird - $190 (Until Dec 31, 2025)</option>
                <option value="individual-regular">Individual Regular - $210 (Starting Jan 1, 2026)</option>
                <option value="georgia-early">Georgia Resident Early Bird - $175 (Until Dec 31, 2025)</option>
                <option value="georgia-regular">Georgia Resident Regular - $195 (Starting Jan 1, 2026)</option>
                <option value="group-5-early">Group 5 People Early Bird - $925 (Until Dec 31, 2025)</option>
                <option value="group-5-regular">Group 5 People Regular - $975 (Starting Jan 1, 2026)</option>
                <option value="group-10-early">Group 10 People Early Bird - $1,800 (Until Dec 31, 2025)</option>
                <option value="group-10-regular">Group 10 People Regular - $1,925 (Starting Jan 1, 2026)</option>
              </select>
            </div>

            {/* Quantity Selector - Only show for individual registrations */}
            {formData.registrationType && !formData.registrationType.includes('group-') && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Number of People</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start">
                    <span className="text-green-600 text-xl mr-3 mt-1">👤</span>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Individual Registration</h4>
                      <p className="text-green-700 text-sm">
                        How many people are you registering? Each person gets the same registration type.
                      </p>
                      <p className="text-green-600 text-xs mt-1">
                        💡 For 5+ people, select a Group registration above for better rates!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="block text-sm font-medium text-slate-700">
                    Quantity:
                  </label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                  >
                    {[1,2,3,4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                  <div className="text-slate-600">
                    × ${formData.registrationType.includes('individual-early') ? '190' : 
                        formData.registrationType.includes('individual-regular') ? '210' :
                        formData.registrationType.includes('georgia-early') ? '175' :
                        formData.registrationType.includes('georgia-regular') ? '195' : '0'} = 
                    <span className="font-bold text-slate-900 ml-1">${getRegistrationPrice()}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Attendee Names - Show for group registrations OR multiple individual registrations */}
            {((formData.registrationType.includes('group-5') || formData.registrationType.includes('group-10')) || 
              (formData.quantity > 1 && !formData.registrationType.includes('group-'))) && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {formData.registrationType.includes('group-') ? 'Group Attendee Names' : 'All Attendee Names'}
                </h3>
                <div className={`${formData.registrationType.includes('group-') ? 'bg-blue-50 border-blue-200' : 'bg-purple-50 border-purple-200'} border rounded-lg p-4 mb-4`}>
                  <div className="flex items-start">
                    <span className={`${formData.registrationType.includes('group-') ? 'text-blue-600' : 'text-purple-600'} text-xl mr-3 mt-1`}>
                      {formData.registrationType.includes('group-') ? '👥' : '👤'}
                    </span>
                    <div>
                      <h4 className={`font-semibold ${formData.registrationType.includes('group-') ? 'text-blue-800' : 'text-purple-800'} mb-2`}>
                        {formData.registrationType.includes('group-') ? 'Group Registration' : 'Multiple Individual Registrations'}
                      </h4>
                      <p className={`${formData.registrationType.includes('group-') ? 'text-blue-700' : 'text-purple-700'} text-sm`}>
                        {formData.registrationType.includes('group-') 
                          ? `Please list all ${formData.registrationType.includes('group-5') ? '5' : '10'} attendees below, including yourself as the primary contact.`
                          : `Please list all ${formData.quantity} attendees below, including yourself as the primary contact.`
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <label className="block text-slate-700 text-sm font-bold mb-2">
                  All Attendee Names *
                </label>
                <textarea
                  name="attendeeNames"
                  value={formData.attendeeNames}
                  onChange={handleInputChange}
                  placeholder={formData.registrationType.includes('group-') 
                    ? `List all ${formData.registrationType.includes('group-5') ? '5' : '10'} attendees, one name per line:

${formData.firstName} ${formData.lastName} (Primary Contact)
John Smith
Mary Johnson
Bob Wilson
Sarah Davis${formData.registrationType.includes('group-10') ? `
Mike Brown
Lisa Taylor
David Lee
Emma White
Chris Garcia` : ''}`
                    : `List all ${formData.quantity} attendees, one name per line:

${formData.firstName} ${formData.lastName} (Primary Contact)${formData.quantity > 1 ? `
${Array.from({length: formData.quantity - 1}, (_, i) => `Person ${i + 2} Name`).join('\n')}` : ''}`
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 h-32"
                  required
                />
                <p className="text-xs text-slate-600 mt-1">
                  {formData.registrationType.includes('group-') 
                    ? `Please include yourself as the first name, then list the remaining ${formData.registrationType.includes('group-5') ? '4' : '9'} attendees`
                    : `Please include yourself as the first name, then list the remaining ${formData.quantity - 1} attendee${formData.quantity > 2 ? 's' : ''}`
                  }
                </p>

                {/* Attendee Contact Information */}
                <div className="mt-6">
                  <label className="block text-slate-700 text-sm font-bold mb-2">
                    Attendee Contact Information
                  </label>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                    <p className="text-yellow-800 text-sm">
                      📞 Please provide phone numbers and email addresses for all attendees (except yourself - we already have yours above)
                    </p>
                  </div>
                  <textarea
                    name="attendeeContacts"
                    value={formData.attendeeContacts}
                    onChange={handleInputChange}
                    placeholder={formData.registrationType.includes('group-') 
                      ? `Provide contact info for the other ${formData.registrationType.includes('group-5') ? '4' : '9'} attendees:

John Smith - (555) 123-4567 - john@email.com
Mary Johnson - (555) 234-5678 - mary@email.com
Bob Wilson - (555) 345-6789 - bob@email.com
Sarah Davis - (555) 456-7890 - sarah@email.com${formData.registrationType.includes('group-10') ? `
Mike Brown - (555) 567-8901 - mike@email.com
Lisa Taylor - (555) 678-9012 - lisa@email.com
David Lee - (555) 789-0123 - david@email.com
Emma White - (555) 890-1234 - emma@email.com
Chris Garcia - (555) 901-2345 - chris@email.com` : ''}`
                      : formData.quantity > 1 ? `Provide contact info for the other ${formData.quantity - 1} attendee${formData.quantity > 2 ? 's' : ''}:

${Array.from({length: formData.quantity - 1}, (_, i) => `Person ${i + 2} - (555) 123-456${i + 2} - person${i + 2}@email.com`).join('\n')}` : 'No additional contact info needed for single registration'
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 h-32"
                    required={formData.quantity > 1 || formData.registrationType.includes('group-')}
                  />
                  <p className="text-xs text-slate-600 mt-1">
                    Format: Name - Phone - Email (one person per line)
                  </p>
                </div>
              </div>
            )}

            {/* Special Events */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Special Events</h3>
              
              {/* Important Notice about Banquet */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3 mt-1">ℹ️</span>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Memorial Banquet Information</h4>
                    <p className="text-blue-700 text-sm mb-2">
                      <strong>✅ Banquet ticket IS INCLUDED</strong> in your Lectureship registration above.
                    </p>
                    <p className="text-blue-700 text-sm">
                      <strong>The $75 option below is ONLY for:</strong> People who want to attend the banquet 
                      but are NOT registering for the full Lectureship (banquet-only ticket).
                    </p>
                  </div>
                </div>
              </div>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="specialEvents"
                  value="memorial-banquet"
                  checked={formData.specialEvents.includes('memorial-banquet')}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-slate-600 focus:ring-slate-500 border-slate-300 rounded"
                />
                <div className="ml-3">
                  <span className="text-slate-700 font-medium">John O. Williams Memorial Banquet</span>
                  <p className="text-slate-600 text-sm font-medium">Additional Banquet-Only Tickets • March 12, 2026 • 6:00 PM • $75 each</p>
                  <p className="text-slate-500 text-xs mt-1">
                    For guests who want to attend ONLY the banquet (not the full Lectureship)
                  </p>
                </div>
              </label>
            </div>

            {/* Additional Notes */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                placeholder="Any special accommodations or additional information..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;