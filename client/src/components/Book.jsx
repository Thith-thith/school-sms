import book from "../assets/images/cover-book.png";
import logo from "../assets/images/koompi.webp";
import moment from "moment";

export const Book = (props) => {
  const { title, viewer, downloaded, created_at, updated_at, org } = props.book;
  return (
    <div className="transform transition duration-300 hover:scale-105 ">
      <img className="rounded-2xl bg-cover " src={book} alt="" />

      <div className="flex flex-row justify-between items-start mt-4">
        <div>
          <p className="text-sm text-gray-800 font-bold">{title}</p>
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-full" src={logo} alt="" />
            <div className="font-medium dark:text-white">
              <div className="inline-flex gap-2 items-center m-0">
                <div className="font-medium">{org?.name}</div>
                {org?.is_verify && (
                  <svg
                    className="w-4 h-4 text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                    />
                    <path
                      fill="#fff"
                      d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                    />
                  </svg>
                )}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {viewer} read - {moment(updated_at, "YYYYMMDD").fromNow()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
