import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [isFocused, setIsFocused] = useState({
    fullname: false,
    email: false,
    password: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setIsFocused((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { fullname, email, password } = formData;
    
    await axios.post('http://localhost:3000/api/auth/user/register', {
      fullname,email,password
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-indigo-950 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse-medium"></div>

      <motion.div
        className="w-full max-w-md bg-gray-900/70 backdrop-blur-md border border-gray-700/30 shadow-2xl rounded-2xl p-8 relative z-10"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header with animated underline */}
        <div className="mb-8">
          <motion.h2
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            USER REGISTRATION
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Animated name input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <input
              name="fullname"
              type="text"
              value={formData.fullname}
              onChange={handleInputChange}
              onFocus={() => handleFocus("fullname")}
              onBlur={() => handleBlur("fullname")}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-600/40 bg-gray-800/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 peer transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none
                ${
                  isFocused.fullname || formData.fullname
                    ? "top-0.5 text-xs text-cyan-400"
                    : "top-4 text-gray-400"
                }`}
            >
              Full Name
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300 peer-focus:w-full"></div>
          </motion.div>

          {/* Animated email input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-600/40 bg-gray-800/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 peer transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none
                ${
                  isFocused.email || formData.email
                    ? "top-0.5 text-xs text-cyan-400"
                    : "top-4 text-gray-400"
                }`}
            >
              Email Address
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300 peer-focus:w-full"></div>
          </motion.div>

          {/* Animated password input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-600/40 bg-gray-800/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 peer transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none
                ${
                  isFocused.password || formData.password
                    ? "top-0.5 text-xs text-cyan-400"
                    : "top-4 text-gray-400"
                }`}
            >
              Password
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300 peer-focus:w-full"></div>
          </motion.div>

          {/* Terms and conditions */}
          <motion.div
            className="flex items-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <input
              type="checkbox"
              id="terms"
              className="form-checkbox h-4 w-4 text-cyan-500 bg-gray-700/50 border-gray-600 rounded focus:ring-cyan-500"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
              I agree to the{" "}
              <a href="#" className="text-cyan-400 hover:text-cyan-300">
                Terms and Conditions
              </a>
            </label>
          </motion.div>

          {/* Animated register button */}
          <motion.button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-500 shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden group mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <span className="relative z-10">CREATE ACCOUNT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.button>
        </form>

        {/* Login link */}
        <motion.p
          className="mt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Already have an account?{" "}
          <a
            href="/user/login"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
          >
            Sign In
          </a>
        </motion.p>
      </motion.div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes pulse-medium {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RegisterUser;
