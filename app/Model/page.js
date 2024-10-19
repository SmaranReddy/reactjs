import React from 'react';

function Model() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-teal-600 mb-6 text-center">
        Choose the design you like!
      </h1>
      
      {/* Flex container to center items */}
      <div className="flex flex-wrap justify-center max-w-screen-lg">
        {/* Block 1 */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-8 mb-8"> {/* Adjusted margin bottom for more spacing */}
            <a href="#" className="group relative block h-48 sm:h-60 lg:h-72">
              <span className="absolute inset-0 border-2 border-dashed border-teal-600"></span>

              <div
                className="relative flex h-full transform items-end border-2 border-teal-600 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              >
                <div
                  className="p-6 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 sm:h-10 sm:w-10 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <h2 className="mt-4 text-lg font-medium sm:text-xl text-gray-800"></h2>
                </div>

                <div
                  className="absolute p-6 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                  <h3 className="mt-4 text-lg font-medium sm:text-xl text-gray-800"></h3>

                  <p className="mt-4 text-sm sm:text-base text-gray-600">
                    Model
                  </p>

                  <p className="mt-8 font-bold text-teal-600">Read more</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Model;
