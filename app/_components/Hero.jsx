import React from 'react';

function Hero() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gray-200">
        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-[80vh] lg:grid-cols-2 relative">
            <div className="relative z-10 lg:py-12 animate-fade-in">
              <div className="relative h-56 sm:h-72 lg:h-full">
                <img
                  alt="A beautiful scene"
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover animate-brightness-in filter brightness-100 contrast-100 saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-transparent to-teal-700 opacity-20"></div>
              </div>
            </div>
                                                                                                
            <div className="relative flex items-center bg-gray-100 p-8 sm:p-16 lg:p-20 animate-slide-in">
              <div>
                <h2 className="text-3xl font-bold text-teal-600 sm:text-4xl mb-2">
                  CRAFTING COMFORT
                </h2>
                <h3 className="text-xl font-semibold text-gray-700">Where Elegance Meets Ease</h3>
                <p className="mt-4 text-gray-600 text-lg">
                  We design products that blend style and functionality, creating a sanctuary of relaxation in every space. Experience the perfect harmony of aesthetics and comfort, tailored just for you.
                </p>

                <a
                  href="/Questions" // Replace with your actual target section or URL
                  className="mt-8 inline-block rounded-lg bg-teal-600 px-8 py-3 text-lg font-medium text-white shadow-lg hover:bg-transparent hover:text-teal-600 hover:shadow-xl transition duration-300 animate-bounce"
                >
                  Get Started!
                </a>

                <div className="mt-6">
                  <p className="text-gray-500 text-sm italic">
                    "A perfect blend of comfort and style!" - Satisfied Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
