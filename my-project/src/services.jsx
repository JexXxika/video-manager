import React from "react";

const Service= () => {
  // Define an object containing common properties for each box
  const boxes = [
    {
      title: "Apply",
      description: "Explore our available job opportunities and join our team.",
      svg: (
        <svg
          className="h-6 w-6 text-blue-700 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5l7 4-7 4-7-4 7-4zM5 12l7 4 7-4M5 12l7-4 7 4m-7 4v6m7-6v6"
          />
        </svg>
      ),
    },
    {
      title: "Apply",
      description: "Explore our available job opportunities and join our team.",
      svg: (
        <svg
          className="h-6 w-6 text-blue-700 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5l7 4-7 4-7-4 7-4zM5 12l7 4 7-4M5 12l7-4 7 4m-7 4v6m7-6v6"
          />
        </svg>
      ),
    },
    {
      title: "Apply",
      description: "Explore our available job opportunities and join our team.",
      svg: (
        <svg
          className="h-6 w-6 text-blue-700 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5l7 4-7 4-7-4 7-4zM5 12l7 4 7-4M5 12l7-4 7 4m-7 4v6m7-6v6"
          />
        </svg>
      ),
    },
    {
      title: "Apply",
      description: "Explore our available job opportunities and join our team.",
      svg: (
        <svg
          className="h-6 w-6 text-blue-700 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5l7 4-7 4-7-4 7-4zM5 12l7 4 7-4M5 12l7-4 7 4m-7 4v6m7-6v6"
          />
        </svg>
      ),
    },
    {
      title: "Consultation",
      description:
        "Learn about our internship programs and kickstart your career.",
      svg: (
        <svg
          className="h-6 w-6 text-blue-700 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5l7 4-7 4-7-4 7-4zM5 12l7 4 7-4M5 12l7-4 7 4m-7 4v6m7-6v6"
          />
        </svg>
      ),
    },
    {
      title: "Rock & Roll",
      description: "Find out about freelance opportunities available with us.",
      svg: (
        <svg
          className="h-6 w-6 text-blue-700 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5l7 4-7 4-7-4 7-4zM5 12l7 4 7-4M5 12l7-4 7 4m-7 4v6m7-6v6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 mt-16">
      <div className="container mx-auto px-4 lg:w-3/4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            More about our services........
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {box.title}
                </h3>
                {box.svg}
              </div>
              <p className="text-gray-500 text-lg text-left custom-paragraph">
                {box.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex align-middle justify-center">
          <button className="w-60 text-center  border-custom-red border  hover:bg-custom-red text-custom-red hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
