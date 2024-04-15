import React, { useState } from "react";

const Project = () => {
  const [showOtherVideo, setShowOtherVideo] = useState(false);

  const handleDropdownClick = () => {
    setShowOtherVideo(!showOtherVideo);
  };

  const youtubeVideos = [
    {
      id: "video1",
      title: "Video Title 1",
      description: "Description of Video 1",
      thumbnail: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      id: "video2",
      title: "Video Title 2",
      description: "Description of Video 2",
      thumbnail: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      id: "video3",
      title: "Video Title 3",
      description: "Description of Video 3",
      thumbnail: "https://via.placeholder.com/150",
      link: "#",
    },
  ];

  return (
    <section className="py-8 mx-auto max-w-6xl">
      {" "}
      {/* Adjusted width */}
      <div className="container px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            YouTube Videos
          </h2>
          <p className="text-gray-500  mt-2 mx-auto text-lg max-w-2xl">
            {" "}
            {/* Adjusted width and centered */}
            Check out our latest YouTube videos for tutorials and tips.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
          {" "}
          {/* Adjusted grid layout */}
          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="mb-4 rounded-lg w-full"
                />
                <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                  {video.title}
                </h3>
              </a>
              <p className="text-lg text-gray-600  mt-2">{video.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border-custom-red border w-full rounded-lg">
          <button
            onClick={handleDropdownClick}
            className="flex items-center text-white  p-5  hover:underline "
          >
            <span>Other YouTube Videos</span>
            <svg
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showOtherVideo ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              )}
            </svg>
          </button>
          {showOtherVideo && (
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3">
              <iframe src="#" frameborder="10"></iframe>
              <iframe src="#" frameborder="10"></iframe>
              <iframe src="#" frameborder="10"></iframe>
              <iframe src="#" frameborder="10"></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
