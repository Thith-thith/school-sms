import img from "../assets/images/weteka.png";
import logo from "../assets/images/koompi.webp";
import moment from "moment";

export const Course = (props) => {
  const {
    thumbnail,
    title,
    org,
    viewer,
    created_at,
    is_free,
    is_enrollment,
    pricing,
  } = props.course;

  return (
    <div className="transform transition duration-300 hover:scale-105">
      <img className="rounded-2xl bg-cover" src={img} alt="" />
      <div className="flex flex-row justify-between items-start mt-4">
        <div>
          <p className="text-sm text-gray-800 font-bold">{title}</p>
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-full" src={logo} alt="" />
            <div className="font-medium dark:text-white">
              <div className="font-medium">{org?.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {viewer} views - {moment(created_at, "YYYYMMDD").fromNow()}
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold">
          {is_free ? "" : <p className="text-md">${pricing}</p>}
        </div>
      </div>
    </div>
  );
};
