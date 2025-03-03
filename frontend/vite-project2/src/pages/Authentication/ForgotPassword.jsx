// First commit - Basic component structure
import React from 'react';

function ForgotPassword() {
  return (
    <div>
      <h1>Password Recovery</h1>
    </div>
  );
}
//container layout for forgot password
export default ForgotPassword;function ForgotPassword() {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-yellow-400 lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Password Recovery
        </h1>
      </div>
    </div>
  );
}