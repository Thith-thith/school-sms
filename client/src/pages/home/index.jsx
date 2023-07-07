import "flowbite";
import { Course } from "../../components/Course";
import courses from "../../api/courses.json";
import books from "../../api/books.json";
import { For } from "solid-js";
import { Book } from "../../components/Book";

const Home = () => {
  return (
    <section className="background-img-3 w-full h-full mb-96">
      <div className="backdrop-blur-md bg-white/30 w-full h-auto">
        <div className="h-full mx-auto pt-16 max-w-screen-xl">
          <div className="flex align-middle gap-2">
            <svg
              class="w-6 h-6 text-red-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 20"
            >
              <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
            </svg>
            <h1 className="font-semibold text-lg mb-3">To Continue</h1>
          </div>
          {/* ---------- enrollment courses --------- */}
          <div className="grid grid-cols-4 md:grid-cols-4 gap-5">
            <For each={courses}>
              {(course, i) => {
                if (course.is_enrollment) {
                  return (
                    <div key={i}>
                      <Course course={course} />
                    </div>
                  );
                }
              }}
            </For>
          </div>

          {/* ------------- all courses------------- */}
          <div className="flex align-middle gap-2 mt-12">
            <svg
              class="w-5 h-5 text-red-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 16"
            >
              <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
            </svg>
            <h1 className="font-semibold text-lg mb-3">Courses</h1>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-5">
            <For each={courses}>
              {(course, i) => {
                if (!course.is_enrollment) {
                  return (
                    <div key={i}>
                      <Course course={course} />
                    </div>
                  );
                }
              }}
            </For>
          </div>
          {/* ----------- books --------- */}
          <div className="flex align-middle gap-2 mt-12">
            <svg
              className="w-5 h-5 text-red-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>
            <h1 className="font-semibold text-lg mb-3">Books</h1>
          </div>
          <div className="grid grid-cols-5 md:grid-cols-5 gap-5">
            <For each={books}>
              {(book, index) => (
                <div key={index}>
                  <Book book={book} />
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
