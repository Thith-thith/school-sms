import "flowbite";
import { Course } from "../../components/Course";
import { CategoriesNavbar } from "../../components/layouts/CategoriesNavbar";
import courses from "../../api/courses.json";
import { For } from "solid-js";

const Home = () => {
  return (
    <section className="background-img w-full h-auto">
      <div className="backdrop-blur-md bg-white/30 w-full h-auto">
        <div className="h-screen mx-auto pt-16 max-w-screen-xl">
          <CategoriesNavbar />
          <div className="grid grid-cols-4 md:grid-cols-4 gap-5">
            <For each={courses}>
              {(course, i) => (
                <div key={i}>
                  <Course course={course} />
                </div>
              )}
            </For>
          </div>
          {/* <Course /> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
