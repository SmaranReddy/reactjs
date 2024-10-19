import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600 mb- lg:mb-0">
            <img src="/logo.jpg" alt="Logo" className="h-50 w-50" /> {/* Increased size for better visibility */}
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6 lg:mt-0 lg:grid-cols-5">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-gray-900">Get the latest news!</h2>
              <p className="mt-2 text-gray-500">
                We focus on designing and delivering high-quality, customizable home and lifestyle products that prioritize relaxation and well-being.
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Services</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Architectural Design</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Landscape Architecture</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Consulting Service</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Sustainability Consulting</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Building Information Modelling (BIM)</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Company</p>
              <ul className="mt-4 space-y-1 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">About</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Meet the Team</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">History</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Careers</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Our Work</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Helpful Links</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">FAQs</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Support</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>
              <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75 mx-2" href="/">Terms & Conditions</a>
              <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75" href="/">Privacy Policy</a>
            </p>
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">© 2024 Crafting Comfort</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
