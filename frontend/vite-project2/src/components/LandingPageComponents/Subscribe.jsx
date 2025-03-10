function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-400 p-6">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-black text-6xl font-bold">Subscribe to our Newsletter!</h1>
        <p className="text-black text-lg mt-2">
          Stay updated with our latest news and offers
        </p>
      </div>

      {/* Input fields */}
      <div className="w-full max-w-md mt-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder=" Company / Organization"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button className="w-full p-3 bg-black text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition duration-300">
          Subscribe
        </button>
      </div>

      {/* Footer */}
     
    </div>
  );
}

export default Subscribe;
