import React from "react";

const SimpleForm = () => {
  return (
    <div className="w-full max-w-3xl mt-16 mx-auto p-4 bg-opacity-70  border border-white rounded-lg shadow sm:p-6 md:p-8 dark:bg-opacity-70 dark:bg-gray-800 dark:border-gray-700">
      <div>
        <h2 className="text-2xl font-title text-gray-900 dark:text-white mb-4 text-center">
          Free YouTube Help
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Editing presets, tutorials, sound effects, a fast voiceover workflow,
          my invoice template for sponsors and weekly YouTube articles,
          delivered straight to your inbox.
        </p>
      </div>
      <form className="space-y-6" action="#">
        <button
          type="submit"
          className="w-full text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 text-center border border-custom-red border-opacity-25"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
