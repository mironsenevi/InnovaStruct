import { useState, useEffect } from "react";

const HeroTest = () => {
  const [isCountdownPopupVisible, setCountdownPopupVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time remaining until March 23rd, 2025
  useEffect(() => {
    if (!isCountdownPopupVisible) return;
    
    const targetDate = new Date("March 23, 2025 00:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeRemaining({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isCountdownPopupVisible]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your email address"
      });
      return;
    }
    
    if (!validateEmail(email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real app, you would make an API call here
      // const response = await fetch('/api/early-access', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just simulate a successful response
      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll notify you when we launch."
      });
      setEmail("");
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex justify-center items-center overflow-x-hidden"
    >
      <div className="bg-yellow-400 font-Raleway items-center w-full min-h-screen mx-auto py-20 px-4 gap-8 text-gray-600 md:py-12 md:px-6 lg:px-10 xl:flex">
        {/* Content div */}
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto text-center xl:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-black mx-auto leading-tight">
            Revolutionizing
            <span className="text-white block sm:inline"> InnovaStruct</span>{" "}
            <span className="block sm:inline">SmartBuild.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xl text-black mx-auto xl:mx-0 px-4 sm:px-0">
            InnovaStruct is a revolutionary construction management solution designed to streamline and optimize the way projects are planned, executed, and tracked.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start px-4 sm:px-0">
            <button
              onClick={() => setCountdownPopupVisible(true)}
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-black hover:text-gray-100 font-medium duration-150 border border-black hover:bg-black rounded-full md:inline-flex w-full sm:w-auto transition-all"
            >
              Unlock access
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Image and Video Section */}
        <div className="flex-1 max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mt-8 xl:mt-0">
          <div className="relative">
            <img 
              src="../assets/Company Projects.png" 
              className="rounded-lg w-full h-auto shadow-2xl" 
              alt="Company Projects" 
            />
          </div>
        </div>
      </div>

      {/* Countdown Popup */}
      {isCountdownPopupVisible && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-all">
          <div 
            className="bg-yellow-400 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-fadeIn"
          >
            {/* Return button (new) */}
         {/* Return button (new) */}
<button 
  onClick={() => setCountdownPopupVisible(false)}
  className="absolute top-4  text-white hover:text-white py-1 px-3 rounded-full hover:bg-black/20 transition-colors z-10 text-sm flex items-center font-medium"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
  Return
</button>
            
            {/* Close button */}
            <button 
              onClick={() => setCountdownPopupVisible(false)}
              className="absolute top-4 right-4 text-black hover:text-white p-1 rounded-full hover:bg-black/20 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Header */}
            <div className="bg-black text-white py-6 px-8 text-center">
              <h3 className="text-2xl font-bold">Coming Soon!</h3>
              <p className="text-yellow-400 mt-2 text-lg">InnovaStruct launches on March 23, 2025</p>
            </div>
            
            {/* Countdown */}
            <div className="py-8 px-6">
              <div className="flex justify-center gap-3 sm:gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="bg-black text-white text-2xl sm:text-3xl font-bold rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    {String(timeRemaining.days).padStart(2, '0')}
                  </div>
                  <span className="text-xs sm:text-sm mt-2 text-black font-medium">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black text-white text-2xl sm:text-3xl font-bold rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    {String(timeRemaining.hours).padStart(2, '0')}
                  </div>
                  <span className="text-xs sm:text-sm mt-2 text-black font-medium">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black text-white text-2xl sm:text-3xl font-bold rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    {String(timeRemaining.minutes).padStart(2, '0')}
                  </div>
                  <span className="text-xs sm:text-sm mt-2 text-black font-medium">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black text-white text-2xl sm:text-3xl font-bold rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center animate-countdown-pulse">
                    {String(timeRemaining.seconds).padStart(2, '0')}
                  </div>
                  <span className="text-xs sm:text-sm mt-2 text-black font-medium">Seconds</span>
                </div>
              </div>
              
              {/* Early access form */}
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-center text-black mb-3">Get Early Access</h4>
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                   <button 
  type="submit"
  className={`${
    isSubmitting 
      ? "bg-gray-700 cursor-not-allowed" 
      : "bg-black hover:bg-gray-800"
  } text-white px-3 sm:px-4 py-2 rounded-r-lg transition-colors flex items-center justify-center min-w-[80px] sm:min-w-[100px]`}
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  ) : (
    <span className="text-sm sm:text-base">Notify Me</span>
  )}
</button>
                  </div>
                  
                  {submitStatus.message && (
                    <div className={`mt-2 text-sm ${
                      submitStatus.type === "error" 
                        ? "text-red-600" 
                        : "text-green-600"
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
              
              {/* Feature preview */}
              <div className="mt-6 text-center">
                <p className="text-sm text-black font-medium">Be the first to experience our innovative features:</p>
                <div className="flex justify-center gap-4 mt-3">
                  <div className="bg-white/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="bg-white/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div className="bg-white/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroTest;