export const BackTop = () => {
  return (
    <button
      type="button"
      onclick={() => window.scrollTo(0, 0)}
      className="fixed bottom-12 right-12 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 8"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
        />
      </svg>
      <span className="sr-only">Icon description</span>
    </button>
  );
};
