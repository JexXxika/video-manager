import React, { useState, useEffect } from "react";

// Function to generate a random number between min and max (inclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const FounderCard = ({ name, title, bio }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Enable scrolling when component unmounts
    };
  }, [showModal]);

  // Random image URLs for demonstration purposes
  const randomImageUrls = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    // Add more image URLs as needed
  ];

  // Randomly select an image URL from the array
  const randomImageUrl =
    randomImageUrls[getRandomNumber(0, randomImageUrls.length - 1)];

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-6">
        <div>
          <img
            className="object-cover w-full h-28 rounded"
            src={randomImageUrl}
            alt="Founder"
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {name}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              {title}
            </p>
          </div>
          <button
            onClick={toggleModal}
            className="mt-4 border border-custom-red text-custom-red font-bold py-2 px-4 rounded-3xl"
          >
            View Bio
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
          <div className="bg-white rounded-lg p-8 max-w-lg text-center relative">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {name}
            </h3>
            <p className="text-sm text-gray-500">{bio}</p>
            <button
              onClick={toggleModal}
              className="mt-6 inline-flex justify-center rounded-md border border-custom-red shadow-sm px-4 py-2 bg-custom-red text-base font-medium text-white hover:text-white hover:bg-custom-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const FoundersSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Our Founders
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            Meet the brilliant minds behind our organization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Founder 1 */}
          <FounderCard
            name="John Doe"
            title="Co-founder & CEO"
            bio="John Doe is a visionary leader with a passion for innovation and entrepreneurship. As the co-founder and CEO of our organization, he has led the company to unprecedented growth and success."
          />
          {/* Founder 2 */}
          <FounderCard
            name="Jane Smith"
            title="Co-founder & CTO"
            bio="Jane Smith is a talented technologist and co-founder of our organization. With her expertise in technology and leadership, she has played a crucial role in shaping our products and services."
          />
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
