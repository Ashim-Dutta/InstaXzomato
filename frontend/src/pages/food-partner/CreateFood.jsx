import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateFood = () => {

  const navigate = useNavigate();

  const [Data, setData] = useState({
    name: "",
    description: "",
    video: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      const data = new FormData();
      data.append("name", Data.name);
      data.append("description", Data.description);
      data.append("video", Data.video);

        await axios.post(
        "http://localhost:3000/api/food",
        data,
        {
          
          withCredentials: true,
         
        }
      );

      setIsSubmitting(false);
      setUploadProgress(0);

      // Reset form
      setData({
        name: "",
        description: "",
        video: null,
      });

      // Show success message
      toast.success("Food item created successfully!");
      navigate('/')
    } catch (err) {
      console.error("Error uploading food item:", err);
      setIsSubmitting(false);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
          <div className="px-8 py-6 border-b border-gray-700">
            <div className="flex items-center justify-center mb-2">

              <h2 className="text-2xl font-bold text-white">
                Create Food Item
              </h2>
            </div>
            <p className="text-sm text-gray-400 text-center">
              Add a new culinary creation to your menu
            </p>
          </div>

          <form className="px-8 py-6" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Food Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g., Spaghetti Carbonara"
                value={Data.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-white placeholder-gray-400"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Describe the food item, ingredients, and preparation method"
                value={Data.description}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-white placeholder-gray-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Video Upload
              </label>
              <div className="relative border-2 border-dashed border-gray-600 rounded-lg p-6 transition-colors hover:border-amber-500 bg-gray-700">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-500"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-400 justify-center">
                    <label
                      htmlFor="video"
                      className="relative cursor-pointer font-medium text-amber-500 hover:text-amber-400"
                    >
                      <span>Upload a video</span>
                      <input
                        id="video"
                        name="video"
                        type="file"
                        accept="video/*"
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    MP4, AVI, MOV up to 100MB
                  </p>
                  {Data.video && (
                    <p className="text-sm text-amber-500 font-medium mt-2 truncate">
                      {Data.video.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {uploadProgress > 0 && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-orange-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium shadow-md transition-all ${
                isSubmitting
                  ? "bg-amber-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 hover:shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Create Food Item"
              )}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Supported video formats: MP4, AVI, MOV</p>
        </div>
      </div>
    </div>
  );
};

export default CreateFood;
