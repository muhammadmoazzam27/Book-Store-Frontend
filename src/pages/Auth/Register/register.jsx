import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "@/utils/global";

const initialState = { fullName: "", email: "", password: "" }

const Register = () => {

  const VITE_API_URL = import.meta.env.VITE_API_URL

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preState) => ({ ...preState, [name]: value }))
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const { fullName, email, password } = formData;

    if (fullName.trim() === "" || fullName.length < 3) {
      return toastify("Enter full name must at least 3 chars!", "error")
    }
    if (email.trim() === "" || !email.includes("@") || !email.includes(".")) {
      return toastify("Enter valid email address!", "error")
    }
    if (password.trim() === "" || password.length < 6) {
      return toastify("Password must at least 6 chars!", "error")
    }

    const user = { fullName, email, password };

    setIsLoading(true);

    axios.post(`${VITE_API_URL}/auth/register`, user)

      .then((res) => {
        const { status, data } = res;
        if (status === 201) {
          navigate("/auth/page/login")
          return toastify(data.message || "Register successfully!", "success")
        }
      })
      .catch((error) => {
        const status = error?.response?.status;
        const message = error?.response?.data?.message;
        if (status === 403) {
          return toastify(message || "User already exist", "error")
        }
        if (status === 400) {
          return toastify(message || "Please! fill the fields", "error")
        }
        if (status === 500) {
          return toastify(message || "Internal server error", "error")
        }
        console.log("Error => ", error)
      })
      .finally(() => {
        setIsLoading(false);
      })

  };

  return (
    <>
      <main className="flex justify-center items-center min-h-screen px-4 bg-slate-950 text-white">
        <div className="flex flex-col justify-center w-full max-w-md rounded-2xl px-6 py-8 border border-slate-800 bg-slate-900 shadow-xl text-sm">

          <h2 className="text-center text-2xl font-semibold">Sign Up</h2>
          <p className="text-center text-slate-400 mt-1">Create a new account</p>

          <form className="mt-6" onSubmit={handleSubmit}>

            {/* Full Name */}
            <label htmlFor="fullName" className="font-medium text-slate-300">Full Name</label>
            <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-slate-700 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 bg-slate-900/50 transition-all overflow-hidden">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#94a3b8" />
              </svg>
              <input
                id="fullName"
                type="text"
                name="fullName"
                className="h-full px-3 w-full outline-none bg-transparent text-white placeholder-slate-500"
                placeholder="Enter your full name"
                required
                onChange={handleChange}
              />
            </div>

            {/* Email Address */}
            <label htmlFor="email" className="font-medium text-slate-300 mt-4 block">Email Address</label>
            <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-slate-700 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 bg-slate-900/50 transition-all overflow-hidden">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#94a3b8" />
              </svg>
              <input
                id="email"
                type="email"
                name="email"
                className="h-full px-3 w-full outline-none bg-transparent text-white placeholder-slate-500"
                placeholder="Enter your email address"
                required
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <label htmlFor="password" className="font-medium text-slate-300 mt-4 block">Password</label>
            <div className="flex items-center mt-2 mb-6 h-11 pl-3 pr-3 border border-slate-700 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 bg-slate-900/50 transition-all overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock text-slate-400 flex-shrink-0" aria-hidden="true">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                className="h-full px-3 w-full outline-none bg-transparent text-white placeholder-slate-500"
                placeholder="Enter your password"
                required
                onChange={handleChange}
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

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full mt-2 px-4 py-3 font-medium text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center gap-2 ${isLoading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                }`}
            >
              {isLoading ? (
                <>
                  <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Creating Account...</span>
                </>
              ) : (
                "Create Account"
              )}
            </button>

            {/* Already have an account link */}
            <p className="text-center mt-5 text-slate-400 text-sm">
              Already have an account?{" "}
              <Link
                className="text-indigo-400 font-medium hover:underline hover:underline-offset-2 hover:decoration-indigo-400 transition-all"
                to="/auth/page/login"
              >
                Login
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

export default Register;