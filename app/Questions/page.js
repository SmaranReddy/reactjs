"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Array of question prompts and options
  const questions = [
    {
      prompt: "Enter number of rooms?",
      options: ["Single", "Double", "Triple", "Quadrupled"],
    },
    {
      prompt: "Enter number of floors?",
      options: ["1", "2", "3", "More than 3"],
    },
    {
      prompt: "Type of House (Duplex, Independent, Triplex, etc)?",
      options: ["Duplex", "Independent", "Triplex", "Other"],
    },
  ];

  // Function to handle option click
  const handleOptionClick = () => {
    // Move to the next question if there's one
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100"> {/* Full page height and centering */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">Get started today</h1>

          {/* Current Question Form */}
          <form action="#" className="mb-0 mt-6 space-y-8 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-left text-lg font-medium">{questions[currentQuestion].prompt}</p>
            <div className="flex flex-col space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={handleOptionClick}
                  className="flex-grow block w-full rounded-lg bg-teal-600 px-8 py-6 text-lg font-medium text-white hover:bg-white hover:text-teal-600 border border-transparent hover:border-teal-600 transition duration-300"
                >
                  {option}
                </button>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Questions;
