import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiMoreHorizontal,
  FiHome,
  FiSearch,
  FiPlusSquare,
  FiCompass,
  FiUser,
  FiMusic,
} from "react-icons/fi";

const ReelsFeed = () => {


  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((response) => {
        setVideos(response.data.food);
      });
  }, []);


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = videoRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          setCurrentVideoIndex(index);

          // Play the current video and pause others
          videoRefs.current.forEach((video, i) => {
            if (video) {
              if (i === index) {
                video
                  .play()
                  .catch((error) => console.log("Autoplay prevented:", error));
              } else {
                video.pause();
              }
            }
          });
        }
      });
    }, options);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]);

  const handleVideoClick = () => {
    const video = videoRefs.current[currentVideoIndex];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-gray-800">
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">instaXzomato</h1>
          </div>

          <div className="hidden md:flex items-center bg-gray-900 rounded-md px-3 py-1.5 flex-1 max-w-xs mx-6">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none text-sm focus:outline-none focus:ring-0 text-white w-full"
            />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <FiHome className="text-xl hidden md:block" />
            <FiMessageCircle className="text-xl hidden md:block" />
            <FiPlusSquare className="text-xl hidden md:block" />
            <FiCompass className="text-xl hidden md:block" />
            <FiHeart className="text-xl hidden md:block" />
            <FiUser className="text-xl hidden md:block" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pt-14 pb-16 md:pb-0">
        <div className="max-w-lg mx-auto" ref={containerRef}>
          {videos.map((video, idx) => (
            <div
              className="relative h-screen mt-10 max-h-[calc(100vh-56px)]"
              key={idx}
            >
              <div className="relative h-full w-full bg-black">
                <video
                  className="w-full h-full object-cover"
                  src={video.video}
                  ref={(el) => (videoRefs.current[idx] = el)}
                  loop
                  muted
                  onClick={handleVideoClick}
                />

                {/* Overlay with content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  {/* Right sidebar actions */}
                  <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6 ">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full p-2 bg-black/30 backdrop-blur-md">
                        <img
                          src="https://placekitten.com/50/50"
                          alt="User"
                          className="h-10 w-10 rounded-full object-cover border border-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <FiHeart className="text-2xl mb-1" />
                      <span className="text-xs">245</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <FiMessageCircle className="text-2xl mb-1" />
                      <span className="text-xs">32</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <FiSend className="text-2xl mb-1" />
                    </div>

                    <div className="flex flex-col items-center">
                      <FiMoreHorizontal className="text-2xl" />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="max-w-[calc(100%-80px)] mb-10">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-sm">
                        @{video.foodPartner}
                      </span>
                    </div>

                    <p className="text-sm mb-3">{video.description}</p>

                    <div className="flex items-center text-xs text-gray-300 mb-4">
                      <FiMusic className="mr-1" />
                      <span>Original Audio - {video.foodPartner}</span>
                    </div>

                    <Link
                      to={"/food-partner/" + video.foodPartner}
                      className="inline-block bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-md mt-2"
                    >
                      Visit Store
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
        <div className="flex justify-around items-center p-3">
          <div className="flex flex-col items-center text-white">
            <FiHome className="text-xl" />
            <span className="text-xs mt-1">Home</span>
          </div>

          <div className="flex flex-col items-center text-gray-400">
            <FiSearch className="text-xl" />
            <span className="text-xs mt-1">Search</span>
          </div>

          <div className="flex flex-col items-center text-gray-400">
            <FiPlusSquare className="text-xl" />
            <span className="text-xs mt-1">Create</span>
          </div>

          <div className="flex flex-col items-center text-gray-400">
            <FiCompass className="text-xl" />
            <span className="text-xs mt-1">Reels</span>
          </div>

          <div className="flex flex-col items-center text-gray-400">
            <FiUser className="text-xl" />
            <span className="text-xs mt-1">Profile</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ReelsFeed;
