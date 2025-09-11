import { useState } from "react";
import { motion } from "framer-motion";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-indigo-950 overflow-hidden relative">
      {/* Animated background particles */}


      {/* Glowing orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse-medium"></div>

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
            USER LOGIN
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, email: true })}
              onBlur={() => setIsFocused({ ...isFocused, email: false })}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-600/40 bg-gray-800/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 peer transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none
                ${
                  isFocused.email || email
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
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocused({ ...isFocused, password: true })}
              onBlur={() => setIsFocused({ ...isFocused, password: false })}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-gray-600/40 bg-gray-800/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 peer transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none
                ${
                  isFocused.password || password
                    ? "top-0.5 text-xs text-cyan-400"
                    : "top-4 text-gray-400"
                }`}
            >
              Password
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300 peer-focus:w-full"></div>
          </motion.div>

          {/* Animated login button */}
          <motion.button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-500 shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="relative z-10">LOGIN</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </motion.button>
        </form>

        {/* Additional options */}
        <motion.div
          className="mt-6 flex justify-between items-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <label className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox rounded bg-gray-700/50 border-gray-600 text-cyan-500 focus:ring-cyan-500"
            />
            <span className="ml-2">Remember me</span>
          </label>
          <a
            href="#"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            Forgot password?
          </a>
        </motion.div>

        {/* Register link */}
        <motion.p
          className="mt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Don't have an account?{" "}
          <a
            href="/user/register"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
          >
            Create Account
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};




export default LoginUser;
