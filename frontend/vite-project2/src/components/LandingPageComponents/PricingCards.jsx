const PricingCards = () => {
  return (
    <>
      <div
        id="pricing"
        className="font-Raleway bg-yellow-400 min-h-screen py-8 sm:py-12 flex flex-col items-center justify-center px-4 sm:px-6"
      >
        <div className="mx-auto max-w-screen-sm text-center mb-6 sm:mb-8 lg:mb-6">
          <h2 className="mb-4 sm:mb-8 text-4xl sm:text-6xl md:text-8xl tracking-tight font-Raleway text-black">
            Our Pricing
          </h2>
          <p className="font-light text-black lg:mb-6 text-sm sm:text-base md:text-xl px-2 sm:px-4">
            We offer flexible options tailored to your construction needs, with
            transparent pricing and no hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl">
          {/* Basic Plan */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 mx-auto w-full max-w-[320px] sm:max-w-sm">
            <div className="p-1 bg-primary"></div>
            <div className="p-4 sm:p-8">
              <h2 className="text-2xl sm:text-4xl text-gray-100 mb-2 sm:mb-4">Basic Plan</h2>
              <p className="text-primary text-sm sm:text-base mb-4 sm:mb-6">
                Ideal for small contractors & individual builders
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 sm:mb-6">
                Free/User
              </p>
              <ul className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Max 20 Users
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Company Portfolio (Limited to 3 Projects)
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Bidding System (Limited to 5 Bids/Month)
                </li>
              </ul>
            </div>
            <div className="p-3 sm:p-4">
              <button className="w-full relative text-white hover:text-primary hover:bg-white inset-0 border border-white px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition duration-500 overflow-hidden">
                Select Plan
                <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 mx-auto w-full max-w-[320px] sm:max-w-sm">
            <div className="p-1 bg-primary"></div>
            <div className="p-4 sm:p-8">
              <h2 className="text-2xl sm:text-4xl text-gray-100 mb-2 sm:mb-4">Pro Plan</h2>
              <p className="text-primary text-sm sm:text-base mb-4 sm:mb-6">
                Best for growing construction firms
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 sm:mb-6">
                $2.99/User
              </p>
              <ul className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Max 100 Users
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited Portfolio Entries with Custom Branding
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited Bidding Access
                </li>
              </ul>
            </div>
            <div className="p-3 sm:p-4">
              <button className="w-full relative text-white hover:text-primary hover:bg-white inset-0 border border-white px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition duration-500 overflow-hidden">
                Select Plan
                <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 mx-auto w-full max-w-[320px] sm:max-w-sm">
            <div className="p-1 bg-primary"></div>
            <div className="p-4 sm:p-8">
              <h2 className="text-2xl sm:text-4xl text-gray-100 mb-2 sm:mb-4">
                Enterprise Plan
              </h2>
              <p className="text-primary text-sm sm:text-base mb-4 sm:mb-6">
                For large-scale construction companies
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 sm:mb-6">
                Custom
              </p>
              <ul className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited Users
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  AI-Generated Blueprint Optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced Project Tracking & Task Automation
                </li>
              </ul>
            </div>
            <div className="p-3 sm:p-4">
              <button className="w-full relative text-white hover:text-primary hover:bg-white inset-0 border border-white px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition duration-500 overflow-hidden">
                Select Plan
                <span className="absolute inset-0 border border-white rounded-full opacity-0 hover:opacity-100 transition duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCards;