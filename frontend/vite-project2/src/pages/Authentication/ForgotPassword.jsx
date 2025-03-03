import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState('client');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email) {
      setError('Email is required');
      return;
    }
    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-yellow-400 lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Password Recovery
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Account Type</span>
            </label>
            <select 
              className="select select-bordered w-full"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="client">Client Account</option>
              <option value="company">Company Account</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Email Address</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full input input-bordered"
            />
          </div>
          {error && (
            <div className="alert alert-error text-sm">
              {error}
            </div>
          )}
          <button 
            type="submit" 
            className="btn btn-neutral btn-block"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
          {success && (
            <div className="alert alert-success">
              Reset link sent! Please check your email.
            </div>
          )}
          <div className="mt-4 text-center">
            <Link 
              to="/login" 
              className="text-sm text-blue-600 hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
