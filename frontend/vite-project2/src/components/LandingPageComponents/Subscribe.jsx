function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-400 p-4 sm:p-6">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-black text-3xl sm:text-4xl md:text-6xl font-bold px-2">
          Subscribe to our Newsletter!
        </h1>
        <p className="text-black text-base sm:text-lg mt-2 px-4">
          Stay updated with our latest news and offers
        </p>
      </div>

      {/* Input fields */}
      <div className="w-full max-w-[90%] sm:max-w-md mt-4 sm:mt-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2.5 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg focus:outline-none text-sm sm:text-base"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2.5 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg focus:outline-none text-sm sm:text-base"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-2.5 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg focus:outline-none text-sm sm:text-base"
        />
        <input
          type="text"
          placeholder="Company / Organization"
          className="w-full p-2.5 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg focus:outline-none text-sm sm:text-base"
        />
        <button className="w-full p-2.5 sm:p-3 bg-black text-white text-base sm:text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;