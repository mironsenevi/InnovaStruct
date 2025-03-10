import { useState } from "react";

const HeroTest = () => {
  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

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
            <a
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-black hover:text-gray-100 font-medium duration-150 active:bg-gray-100 active:text-primary border rounded-full md:inline-flex w-full sm:w-auto"
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
            </a>
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
            <button
              className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white shadow-lg"
              onClick={() => setVideoPopUp(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 m-auto"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {isVideoPoppedUp ? (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="absolute inset-0 w-full h-full bg-black/70 backdrop-blur-sm"
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className="px-4 relative w-full max-w-[90vw] md:max-w-3xl">
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 mb-4 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white absolute -top-14 right-4"
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <video
              className="rounded-lg w-full"
              controls
              autoPlay={true}
            >
            </video>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default HeroTest;