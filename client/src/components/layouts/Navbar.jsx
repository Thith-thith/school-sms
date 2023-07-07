import { useLocation } from "@solidjs/router";

export const Navbar = () => {
  const router = useLocation();

  return (
    <nav className="backdrop-blur-md bg-white/30 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Weteka
          </span>
        </a>
        <div className="flex md:order-2 gap-1">
          <a href="/register">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-lg border border-transparent hover:border-gray-200 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Register
            </button>
          </a>

          <a href="/login">
            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              Login
            </button>
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className={
                  router.hash === "" || router.hash === "#"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500"
                }
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#categories"
                className={
                  router.hash === "#categories"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500"
                }
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={
                  router.hash === "#features"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500"
                }
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className={
                  router.hash === "#faqs"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500"
                }
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
