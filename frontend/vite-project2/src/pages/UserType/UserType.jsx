import React, { useState } from "react";

const UserType = () => {
    const [userType, setUserType] = useState(null);

    const handleUserType = (type) => {
        setUserType(type);
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-5 font-[Montserrat]"
            style={{ backgroundImage: `url('/background.png')` }}
        >
            {/* Main Heading */}
            <h1 className="text-2xl font-bold text-center mb-12">
                How would you like to proceed?
            </h1>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center gap-12 w-full max-w-full">
                {/* Looking for services card */}
                <button
                    onClick={() => handleUserType("client")}
                    className={`flex flex-col items-center justify-center bg-[#FDBE02] rounded-xl border-none p-4 w-full max-w-[200px] aspect-square cursor-pointer transition duration-300 ${
                        userType === "client" ? "scale-105 bg-[#fd9d02]" : "hover:bg-[#fd9d02]"
                    }`}
                >
                    <h2 className="text-base md:text-lg font-semibold text-center leading-tight">
                        I am looking for services
                    </h2>
                    <img
                        src="/customer.png"
                        alt="Looking for services"
                        className="w-3/4 max-w-[120px] mt-3 object-contain"
                    />
                </button>

                {/* Service Provider card */}
                <button
                    onClick={() => handleUserType("company")}
                    className={`flex flex-col items-center justify-center bg-[#FDBE02] rounded-xl border-none p-4 w-full max-w-[200px] aspect-square cursor-pointer transition duration-300 ${
                        userType === "company" ? "scale-105 bg-[#fd9d02]" : "hover:bg-[#fd9d02]"
                    }`}
                >
                    <h2 className="text-base md:text-lg font-semibold text-center leading-tight">
                        I am a Service Provider
                    </h2>
                    <img
                        src="/customer-service.png"
                        alt="Service Provider"
                        className="w-3/4 max-w-[120px] mt-3 object-contain"
                    />
                </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-between w-full px-4 gap-12 mt-20">
                <button className="px-6 py-3 text-lg font-semibold rounded-3xl border-none bg-[#FCE6A4] text-black transition duration-300 hover:bg-[#fcb9a4]">
                    Go Back
                </button>

                <button
                    className="px-6 py-3 text-lg font-semibold rounded-3xl border-none bg-[#FDBE02] text-black transition duration-300 hover:bg-[#fd9d02] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!userType}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default UserType;