// Login for clients 
import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-yellow-400 lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            Client Login
          </h1>
          
          <div className="flex justify-center space-x-4 mt-4"> 
            <Link to="/login" className="btn btn-sm btn-primary">Client Login</Link>
            <Link to="/company-login" className="btn btn-sm">Company Login</Link>
          </div>
          <form className="space-y-4 mt-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password" 
                className="w-full input input-bordered"
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password? 
            </a> 
            <div> 
              <button className="btn-neutral btn btn-block">Login</button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
