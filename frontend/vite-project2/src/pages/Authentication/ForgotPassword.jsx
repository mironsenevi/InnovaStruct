import React from 'react';

function ForgotPassword() {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-yellow-400 lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Password Recovery
        </h1>
        <form className="space-y-4 mt-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full input input-bordered"
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text">Account Type</span>
            </label>
            <select className="select select-bordered w-full">
              <option value="client">Client Account</option>
              <option value="company">Company Account</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
