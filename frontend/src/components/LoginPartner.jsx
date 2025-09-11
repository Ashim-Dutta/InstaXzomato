import { useState } from "react";
import { motion } from "framer-motion";

const LoginPartner = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isFocused, setIsFocused] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-black to-amber-950 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-600/10 rounded-full filter blur-3xl animate-pulse-medium"></div>

      <motion.div
        className="w-full max-w-md bg-gray-900/70 backdrop-blur-md border border-amber-700/30 shadow-2xl rounded-2xl p-8 relative z-10"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header with animated underline */}
        <div className="mb-8">
          <motion.h2
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            FOOD PARTNER LOGIN
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Animated email input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
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
              className="w-full px-5 py-4 rounded-xl border border-amber-600/40 bg-gray-800/40 text-white"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none
                ${
                  isFocused.email || formData.email
                    ? "top-0.5 text-xs text-amber-400"
                    : "top-4 text-gray-400"
                }`}
            >
              Email Address
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 peer-focus:w-full"></div>
          </motion.div>

          {/* Animated password input */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
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
              className="w-full px-5 py-4 rounded-xl border border-amber-600/40 bg-gray-800/40 text-white "
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none
                ${
                  isFocused.password || formData.password
                    ? "top-0.5 text-xs text-amber-400"
                    : "top-4 text-gray-400"
                }`}
            >
              Password
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 peer-focus:w-full"></div>
          </motion.div>

          {/* Forgot password link */}
          <motion.div
            className="text-right -mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a
              href="#"
              className="text-sm text-amber-400 hover:text-amber-300 transition-colors duration-300"
            >
              Forgot Password?
            </a>
          </motion.div>

          {/* Animated login button */}
          <motion.button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 transition-all duration-500 shadow-lg hover:shadow-amber-500/30 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="relative z-10">LOGIN</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.button>
        </form>

        {/* Divider */}
        <motion.div
          className="relative flex items-center my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="flex-grow border-t border-amber-700/40"></div>
          <span className="flex-shrink mx-4 text-amber-500/70 text-sm">OR</span>
          <div className="flex-grow border-t border-amber-700/40"></div>
        </motion.div>

        {/* Social login options */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button className="p-3 rounded-xl bg-gray-800/40 border border-amber-700/30 hover:bg-amber-900/30 transition-colors duration-300">
            <svg
              className="w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="p-3 rounded-xl bg-gray-800/40 border border-amber-700/30 hover:bg-amber-900/30 transition-colors duration-300">
            <svg
              className="w-5 h-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
          </button>
        </motion.div>

        {/* Register link */}
        <motion.p
          className="mt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Don't have an account?{" "}
          <a
            href="/food-partner/register"
            className="text-amber-400 hover:text-amber-300 transition-colors duration-300 font-medium"
          >
            Register Now
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

export default LoginPartner;
