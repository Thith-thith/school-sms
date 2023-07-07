import token from "./../assets/images/web3/token.png";
import ltn from "./../assets/images/web3/learn-to-earn.png";
import nft from "./../assets/images/web3/nft.png";
import cat1 from "../assets/images/category.png";
import nature from "../assets/images/category-2.png";
import society from "../assets/images/category-3.png";
import science from "../assets/images/category-4.png";
import lecture from "../assets/images/category-5.png";
import technology from "../assets/images/category-6.png";
import morality from "../assets/images/category-7.png";
import math from "../assets/images/category-8.png";
import smallworld from "../assets/orgs/smallworld.png";
import koompi from "../assets/orgs/KOOMPI.png";
import va from "../assets/orgs/vitaminair.png";
import selendra from "../assets/orgs/selendra.png";

const LandingPage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <FeaturesBase />
      <Web3Base />
      <More />
    </>
  );
};

export default LandingPage;

export const Banner = () => {
  return (
    <section className="background-img w-full h-screen">
      <div className="backdrop-blur-md bg-white/30 w-full h-screen">
        <div className="h-screen mx-auto pt-9 max-w-screen-xl">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#24292F] rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">
                Weteka is out! See what's new
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              A Digital School for new generation of Teacher and Learner
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Weteka is a virtual platform for students, teachers, and
              professionals to share their knowledge with other students. View
              or create lessons for free, as well as set up your own school with
              ease.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-400 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Learn more
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch video
              </a>
            </div>
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
              <span className="font-semibold text-gray-400 uppercase">
                Recognized by
              </span>
              <div className="flex justify-center items-center mt-8 text-gray-500 sm:justify-between gap-9">
                <a
                  href="#"
                  className="mr-5 mb-5 lg:mb-0 grayscale hover:grayscale-0"
                >
                  <img alt="smallworld" src={smallworld} className="h-20" />
                </a>
                <a
                  href="#"
                  className="mr-5 mb-5 lg:mb-0 grayscale hover:grayscale-0"
                >
                  <img alt="smallworld" src={va} className="h-9" />
                </a>
                <a
                  href="#"
                  className="mr-5 mb-5 lg:mb-0 grayscale hover:grayscale-0"
                >
                  <img alt="smallworld" src={selendra} className="h-10" />
                </a>
                <a
                  href="#"
                  className="mr-5 mb-5 lg:mb-0 grayscale hover:grayscale-0"
                >
                  <img alt="smallworld" src={koompi} className="h-12" />
                </a>
              </div>
            </div>
            <div className="mt-12 px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-xl lg:px-36">
              <span className="font-semibold text-gray-400 uppercase">
                Resources
              </span>

              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-aut sm:grid-cols-4 ">
                  <div className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900">
                    <dt className="mb-2 lg:text-5xl font-extrabold ">94</dt>
                    <dd className="font-medium ">Courses</dd>
                  </div>
                  <div className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900">
                    <dt className="mb-2 lg:text-5xl md:text-4xl font-extrabold">
                      1734
                    </dt>
                    <dd className="font-medium ">Students</dd>
                  </div>
                  <div className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900">
                    <dt className="mb-2 lg:text-5xl md:text-4xl font-extrabold">
                      34
                    </dt>
                    <dd className="font-medium ">Instructors</dd>
                  </div>
                  <div className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900">
                    <dt className="mb-2 lg:text-5xl md:text-4xl font-extrabold">
                      72
                    </dt>
                    <dd className="font-medium ">organizations</dd>
                  </div>
                </dl>
              </div>
              {/* <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <a
                  href="#"
                  className="flex items-center gap-3 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  <h1 className="font-semibold text-2xl">Courses</h1>
                  <h1 className="font-semibold text-5xl">94</h1>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  <h1 className="font-semibold text-2xl">Schools</h1>
                  <h1 className="font-semibold text-5xl">72</h1>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  <h1 className="font-semibold text-2xl">Students</h1>
                  <h1 className="font-semibold text-5xl">1734</h1>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  <h1 className="font-semibold text-2xl">Instructors</h1>
                  <h1 className="font-semibold text-5xl">34</h1>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Categories = () => {
  return (
    <section
      id="categories"
      className="backdrop-blur-md bg-white/30 w-full h-auto pt-16"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="">
          <span className="font-semibold text-gray-400 uppercase ">
            Categories
          </span>
          <h1 className="text-3xl font-semibold">
            Ready for our next generation
          </h1>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="grid gap-4">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg ">
              <a href="#">
                <img src={cat1} className="max-w-xs" alt="Louvre" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70 ">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-5xl font-bold text-white z-50 ">
                      Kids
                    </h1>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
              <a href="#">
                <img src={society} className="max-w-xs" alt="Louvre" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70 ">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-5xl font-bold text-white z-50 ">
                      Society
                    </h1>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
              <a href="#">
                <img src={lecture} className="max-w-xs" alt="Louvre" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70 ">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-5xl font-bold text-white z-50 ">
                      Literatures
                    </h1>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
              <a href="#">
                <img src={technology} className="max-w-xs" alt="Louvre" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70 ">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-5xl font-bold text-white z-50 ">
                      Technology
                    </h1>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
              <a href="#">
                <img src={math} className="max-w-xs" alt="Louvre" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70 ">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-5xl font-bold text-white z-50 ">
                      Math
                    </h1>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
              <a href="#">
                <img src={morality} className="max-w-xs" alt="Louvre" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70 ">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-5xl font-bold text-white z-50 ">
                      Morality
                    </h1>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
              <a href="#">
                <img src={science} className="max-w-xs" alt="Louvre" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70 ">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-5xl font-bold text-white z-50 ">
                      Science
                    </h1>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-lg">
              <a href="#">
                <img src={nature} className="max-w-xs" alt="Louvre" />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70 ">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-5xl font-bold text-white z-50 ">
                      Nature
                    </h1>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesBase = () => {
  return (
    <section id="features" className="bg-white dark:bg-gray-900">
      <div className="py-8 mx-auto max-w-screen-xl sm:py-16">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <span className="font-semibold text-gray-400 uppercase ">
            Centralize
          </span>
          <h1 className="text-3xl font-semibold">Features base</h1>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="h-9 text-gray-400 lg:h-12 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              E-learning
            </h3>
            <p className="text-gray-400 dark:text-gray-400">
              Weteka is an e-learning platform that provides a convenient and
              cost-effective way for students and teachers in Cambodia to access
              educational materials.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-12 h-12 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              E-library
            </h3>
            <p className="text-gray-400 dark:text-gray-400">
              Weteka have an e-library offers a wide range of books, articles,
              videos, and other resources, in a variety of languages, covering a
              wide range of subjects, from basic literacy and numeracy to more
              specialized subjects such as science, technology, engineering, and
              mathematics (STEM).
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-12 h-12 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 19V.352A3.451 3.451 0 0 0 7.5 0a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 2.04 6.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.016 4.016 0 0 0 .3 10.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 0 12a4.032 4.032 0 0 0 .107.889 4 4 0 0 0 .2.659c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.284.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 9 19Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 12.5 0a3.451 3.451 0 0 0-1.5.352V19a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 18 15.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Exam System
            </h3>
            <p className="text-gray-400  dark:text-gray-400">
              The Weteka exam system is a web-based platform that allows
              teachers to create and administer exams to their students. The
              system is easy to use and can be accessed from any
              internet-connected device.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-12 h-12 text-gray-400 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Customize your own school
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              These customization options allow users to create a school website
              that is both unique and professional. This can help to improve the
              overall branding of the school and attract more students and
              parents.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-gray-400 dark:text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Self portfolio
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              The self-portfolio is a space where users can showcase their work,
              skills, and accomplishments. It is a great way to document your
              learning journey and share your story with others.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-12 h-12 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Powerful School Management System
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Weteka have a powerful school management system that can help
              schools in Cambodia to improve their operations and provide better
              educational experiences for their students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Web3Base = () => {
  return (
    <section className="background-img-2 dark:bg-gray-900">
      <div className="backdrop-blur-lg bg-white/60 w-full h-auto">
        <div className="py-8 mx-auto max-w-screen-xl sm:py-16">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <span className="font-semibold text-gray-400 uppercase ">
              Decentralize
            </span>
            <h1 className="text-3xl font-semibold">Web3.0 base</h1>
          </div>
          <section>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-0">
              <div className="w-5/6 m-0">
                <img className="h-auto max-w-full" src={token} alt="token" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Tbong Token(TBK)
                </h1>
                <p className="text-xl  mt-3 text-gray-600">
                  Tbong Token is used to power the Weteka eLearning platform.
                  Tbong is built on the Selendra blockchain. And can be used to
                  purchase a variety of services on the Tbong platform,
                  including:
                </p>
                <ul className="list-disc pl-12 text-lg mt-6 text-gray-600 ">
                  <li>Access to courses and learning materials</li>
                  <li>Discounts on course fees</li>
                  <li>Participation in online communities and forums</li>
                  <li>Increased engagement </li>
                  <li>Improved monetization</li>
                  <li>Enhanced security</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mt-24">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-0">
              <div>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Teach and Learn to Earn
                </h1>
                <p className="text-xl mt-3 text-gray-600">
                  Teach and Learn to Earn with Tbong Token is a blockchain-based
                  education platform that aims to empower people to learn and
                  earn through a gamified system. The platform uses Tbong Token,
                  a native cryptocurrency, as a reward for completing
                  educational tasks. These tasks can range from watching
                  educational videos to taking quizzes to participating in
                  discussions.
                </p>
              </div>
              <div className="w-5/6 m-0">
                <img className="h-auto max-w-full" src={ltn} alt="token" />
              </div>
            </div>
          </section>
          <section className="mt-24">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-0">
              <div className="w-5/6 m-0">
                <img className="h-auto max-w-full" src={nft} alt="token" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  NFT(Non-fungible token)
                </h1>
                <p className="text-xl  mt-3 text-gray-600">
                  That's the ways of NFTs can be used in Weteka:
                </p>
                <ul className="list-disc pl-12 text-lg mt-6 text-gray-600 ">
                  <li>Certificates and diplomas</li>
                  <li>Access to courses</li>
                  <li>Personalized learning</li>
                  <li>Funding for education</li>
                  <li>Digital collectibles</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export const More = () => {
  return (
    <section
      id="faqs"
      className="backdrop-blur-md bg-white/30 w-full h-auto pb-16"
    >
      <div className="max-w-screen-xl mx-auto">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>

          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Who can use Weteka?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Weteka is open to everyone, regardless of age, location, or
                  educational background. It is a great resource for students,
                  teachers, and anyone else who wants to learn new skills or
                  improve their knowledge.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How much does Weteka cost?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Weteka offers a variety of pricing plans to fit your needs.
                  There is a free plan that gives you access to basic features,
                  as well as paid plans that offer more features and resources.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How do I sign up for Weteka?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  To sign up for Weteka, simply visit the website and create an
                  account. You can then start exploring the platform and finding
                  the courses that are right for you.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Feel free to{" "}
                  <a
                    href="#"
                    class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact us
                  </a>{" "}
                  and we'll help you out as soon as we can.
                </p>
              </div>
            </div>
            <div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How can I get help with Weteka?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  The free updates that will be provided is based on the{" "}
                  <a
                    href="#"
                    class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    roadmap
                  </a>{" "}
                  that we have laid out for this project. It is also possible
                  that we will provide extra updates outside of the roadmap as
                  well.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What are some of the benefits of using Weteka?
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Weteka offers a number of benefits, including:
                </p>
                <ul>
                  <li>Access to a wide variety of courses</li>
                  <li>Flexible learning options</li>
                  <li>Interactive learning experiences</li>
                  <li>Real-time assessment and feedback</li>
                  <li>The ability to earn course certificates</li>
                </ul>
                <p class="text-gray-500 dark:text-gray-400">
                  Is Weteka safe to use?
                  <a
                    href="#"
                    class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    absolutely yes!
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
