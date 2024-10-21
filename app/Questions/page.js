"use client"; // Ensure this is a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct useRouter import for the app directory

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    rooms: '',
    floors: '',
    buildingType: '',
  }); // State to store user input
  const router = useRouter();

  // Array of question prompts and options
  const questions = [
    {
      prompt: "Enter number of rooms?",
      options: ["Single", "Double", "Triple", "Quadrupled"],
      key: 'rooms',
    },
    {
      prompt: "Enter number of floors?",
      options: ["1", "2", "3", "More than 3"],
      key: 'floors',
    },
    {
      prompt: "Type of House (Duplex, Independent, Triplex, etc)?",
      options: ["Duplex", "Independent", "Triplex", "Other"],
      key: 'buildingType',
    },
  ];

  // Function to handle option click
  const handleOptionClick = (option) => {
    // Update answers based on current question
    const key = questions[currentQuestion].key;
    setAnswers((prev) => ({ ...prev, [key]: option }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Navigate to the Model component with query parameters
      router.push(
        `/Model?rooms=${answers.rooms}&floors=${answers.floors}&buildingType=${answers.buildingType}`
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">Get started today</h1>

          <form className="mb-0 mt-6 space-y-8 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-left text-lg font-medium">{questions[currentQuestion].prompt}</p>
            <div className="flex flex-col space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleOptionClick(option)}
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
