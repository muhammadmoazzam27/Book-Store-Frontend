import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apna sign up logic likh sakte hain
  };

  return (
    <>
      <main className="flex justify-center items-center min-h-screen px-4 bg-slate-950 text-white">
        <div className="flex flex-col justify-center w-full max-w-md rounded-2xl px-6 py-8 border border-slate-800 bg-slate-900 shadow-xl text-sm">

          <h2 className="text-center text-2xl font-semibold">Welcome Back</h2>
          <p className="text-center text-slate-400 mt-1">Login to your account</p>

          <form className="mt-6" onSubmit={handleSubmit}>

            {/* Email Address */}
            <label htmlFor="email-address" className="font-medium text-slate-300 mt-4 block">Email Address</label>
            <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-slate-700 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 bg-slate-900/50 transition-all overflow-hidden">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#94a3b8" />
              </svg>
              <input
                id="email-address"
                type="email"
                className="h-full px-3 w-full outline-none bg-transparent text-white placeholder-slate-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Password */}
            <label htmlFor="password" className="font-medium text-slate-300 mt-4 block">Password</label>
            <div className="flex items-center mt-2 mb-2 h-11 pl-3 pr-3 border border-slate-700 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 bg-slate-900/50 transition-all overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock text-slate-400 flex-shrink-0" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="h-full px-3 w-full outline-none bg-transparent text-white placeholder-slate-500"
                placeholder="Enter your password"
                required
              />

              {/* Eye Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-slate-200 focus:outline-none flex items-center justify-center cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off">
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                )}
              </button>
            </div>
            <div className="text-right mb-4">
              <Link className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
            </div>

            <button type="submit" className="w-full mt-2 px-4 py-3 font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
              Login
            </button>

            {/* Already have an account link */}
            <p className="text-center mt-5 text-slate-400 text-sm">
              Don't have an account?{" "}
              <Link
                className="text-indigo-400 font-medium hover:underline hover:underline-offset-2 hover:decoration-indigo-400 transition-all"
                to="/auth/register"
              >
                Register
              </Link>
            </p>

          </form>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </>
  );
};

export default Login;