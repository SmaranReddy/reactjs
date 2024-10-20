import React from 'react';

function ContactPage() {
  return (
    <div>
      {/* 
        Heads up! 👋

        Plugins:
          - @tailwindcss/forms
      */}
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
                 {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: '0' }}>
        {/* Ensure the logo is in the public folder */}
        <img src="/logo.jpg" alt="Logo" style={{ height: '200px', width: '200px' }} />
      </div>
            <h1 className="text-3xl font-bold text-teal-600 sm:text-4xl">Contact Us</h1>
            <p className="mt-2 text-gray-600">We would love to hear from you!</p>
          </div>

          <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"
                  placeholder="Enter email"
                  required
                />
                <span className="absolute inset-y-0 right-0 flex items-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Phone Number Input */}
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"
                  placeholder="Enter phone number"
                  required
                />
                <span className="absolute inset-y-0 right-0 flex items-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h18v18H3V3z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <div className="relative">
                <textarea
                  id="message"
                  rows="4"
                  className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-200"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-block rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-teal-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Contact Us"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
