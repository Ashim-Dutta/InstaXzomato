import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPartner = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", // Restaurant Name
    contactName: "", // Contact Person
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const [isFocused, setIsFocused] = useState({
    name: false,
    contactName: false,
    phone: false,
    address: false,
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
    const { name, contactName, phone, address, email, password } = formData;
    axios.post("http://localhost:5000/api/food-partner/register", {
      name,
      contactName,
      phone,
      address,
      email,
      password
    }, {
      withCredentials:true
    })

    navigate('/create-food')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-black to-orange-950 px-4 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-orange-600/10 rounded-full filter blur-3xl animate-pulse-medium"></div>

      <motion.div
        className="w-full max-w-md bg-gray-900/70 backdrop-blur-md border border-amber-700/30 shadow-2xl rounded-2xl p-8 relative z-10"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-8">
          <motion.h2
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            PARTNER REGISTRATION
          </motion.h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Restaurant Name */}
          <motion.div className="relative">
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-amber-600/40 bg-gray-800/40 text-white peer focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.name || formData.name
                  ? "top-0.5 text-xs text-amber-400"
                  : "top-4 text-gray-400"
              }`}
            >
              Restaurant Name
            </label>
          </motion.div>

          {/* Contact Name */}
          <motion.div className="relative">
            <input
              name="contactName"
              type="text"
              value={formData.contactName}
              onChange={handleInputChange}
              onFocus={() => handleFocus("contactName")}
              onBlur={() => handleBlur("contactName")}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-amber-600/40 bg-gray-800/40 text-white peer focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.contactName || formData.contactName
                  ? "top-0.5 text-xs text-amber-400"
                  : "top-4 text-gray-400"
              }`}
            >
              Contact Name
            </label>
          </motion.div>

          {/* Phone */}
          <motion.div className="relative">
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={() => handleFocus("phone")}
              onBlur={() => handleBlur("phone")}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-amber-600/40 bg-gray-800/40 text-white peer focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.phone || formData.phone
                  ? "top-0.5 text-xs text-amber-400"
                  : "top-4 text-gray-400"
              }`}
            >
              Phone
            </label>
          </motion.div>

          {/* Address */}
          <motion.div className="relative">
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleInputChange}
              onFocus={() => handleFocus("address")}
              onBlur={() => handleBlur("address")}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-amber-600/40 bg-gray-800/40 text-white peer focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.address || formData.address
                  ? "top-0.5 text-xs text-amber-400"
                  : "top-4 text-gray-400"
              }`}
            >
              Address
            </label>
          </motion.div>

          {/* Email */}
          <motion.div className="relative">
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-amber-600/40 bg-gray-800/40 text-white peer focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.email || formData.email
                  ? "top-0.5 text-xs text-amber-400"
                  : "top-4 text-gray-400"
              }`}
            >
              Email Address
            </label>
          </motion.div>

          {/* Password */}
          <motion.div className="relative">
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
              placeholder=" "
              required
              className="w-full px-5 py-4 rounded-xl border border-amber-600/40 bg-gray-800/40 text-white peer focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300"
            />
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.password || formData.password
                  ? "top-0.5 text-xs text-amber-400"
                  : "top-4 text-gray-400"
              }`}
            >
              Password
            </label>
          </motion.div>

          {/* Register Button */}
          <motion.button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:from-amber-600 hover:to-orange-700 transition-all duration-500 shadow-lg hover:shadow-amber-500/30 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">REGISTER RESTAURANT</span>
          </motion.button>
        </form>

        <motion.p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a
            href="/food-partner/login"
            className="text-amber-400 hover:text-amber-300 font-medium"
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

export default RegisterPartner;
