import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faList,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <>
      <div>
        <div>
          <div className="bg-black h-0.5 w-full"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="h-full mr-3">
          <div className="ml-20 mt-10 ">
            <NavLink
              to="addservice"
              className={({ isActive }) =>
                `flex items-center space-x-2 mb-4 ${
                  isActive ? "text-blue-500 m-1 font-bold" : "text-gray-500"
                }`
              }
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              <p>Add Service</p>
            </NavLink>
            <NavLink
              to="list"
              className={({ isActive }) =>
                `flex items-center space-x-2 mb-4 ${
                  isActive ? "text-blue-500 m-1 font-bold" : "text-gray-500"
                }`
              }
            >
              <FontAwesomeIcon icon={faList} />
              <p>List Service</p>
            </NavLink>
            <NavLink
              to="customer_reviews"
              className={({ isActive }) =>
                `flex items-center space-x-2 mb-4 ${
                  isActive ? "text-blue-500 m-1 font-bold" : "text-gray-500"
                }`
              }
            >
              <FontAwesomeIcon icon={faCommentDots} />
              <p>Customer Review</p>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <div className="bg-black h-screen w-0.5"></div>
          </div>
        </div>
        <div className="ml-7">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Slider;
