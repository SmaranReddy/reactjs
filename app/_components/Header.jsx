import React from 'react';

function Header() {
  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between"> {/* Increased height from h-16 to h-24 */}
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <img src="\logo.jpg" alt="Logo" className="h-40 w-50" />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-teal-600 hover:scale-110 duration-300"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-teal-600 hover:scale-110 duration-300"
                      href="/Explore"
                    >
                      Explore 
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-teal-600 hover:scale-110 duration-300"
                      href="/AboutUs"
                    >
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-teal-600 hover:scale-110 duration-300"
                      href="/ContactUs"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-teal-700 hover:shadow-lg duration-300"
                    href="/Login"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:bg-teal-600 hover:text-white hover:shadow-lg duration-300"
                      href="#"
                    >
                      Register
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    {/* You can add an icon here for mobile menu */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;