import { NavLink } from "react-router-dom";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faList,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="h-screen bg-yellow-600 bg-opacity-20">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="h-full md:h-auto lg:mr-3">
            <div className="ml-5 mt-5 w-44 lg:ml-20 lg:mt-10">
              <NavLink
                to="addservice"
                className={({ isActive }) =>
                  `flex items-center space-x-2 mb-4 ${
                    isActive ? "text-blue-500 m-1 font-bold" : "text-gray-500"
                  }`
                }
              >
                <FontAwesomeIcon icon={faCirclePlus} />
                <p className="text-sm lg:text-base">Add Service</p>
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
                <p className="text-sm lg:text-base">List Service</p>
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
                <p className="text-sm lg:text-base">Customer Review</p>
              </NavLink>
            </div>
          </div>

          {/* Content */}
          <div className="ml-5 flex-grow lg:ml-7 overflow-y-auto">
            {location.pathname === "/" ? (
              <div className="flex mt-60 text-4xl justify-center items-center animate-bounce">
                <p className="font-serif text-pretty font-bold">Welcome User</p>
              </div>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
