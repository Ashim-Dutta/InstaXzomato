import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";



export default function ProfileReels() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reels, setReels] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/food-partner/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
          setProfile(response.data.foodPartner);
          setReels(response.data.foodPartner.foodItems || []);
        setLoading(false);
      })
      .catch((error) => {
          console.error("Error fetching profile:", error);
          
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <p className="animate-pulse">Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <p>Profile not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Profile Header */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-6">
          <img
            src="https://images.pexels.com/photos/11015027/pexels-photo-11015027.jpeg"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700"
          />
          <div>
            {/* Business / Restaurant Name */}
            <h2 className="text-2xl font-bold uppercase">{profile.name}</h2>

            {/* Contact Person */}
            <p className="text-gray-600 dark:text-gray-400">
              Contact: {profile.contactName}
            </p>

            {/* Email */}
            <p className="text-gray-600 dark:text-gray-400">
              📧 {profile.email}
            </p>

            {/* Phone */}
            <p className="text-gray-600 dark:text-gray-400">
              📞 {profile.phone}
            </p>

            {/* Address */}
            <p className="text-gray-600 dark:text-gray-400">
              📍 {profile.address}
            </p>

            <div className="flex gap-6 mt-3 text-sm">
              <span>
                <strong>{profile.foodItems?.length}</strong> Items
              </span>
              <span>
                <strong>5K+</strong> Servers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reels Grid */}
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <h3 className="text-lg font-semibold mb-4">Reels</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg cursor-pointer bg-gray-100 dark:bg-gray-800"
            >
              <video
                muted
                src={reel.video}
                alt={`Reel ${reel.id}`}
                className="w-full h-72 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
