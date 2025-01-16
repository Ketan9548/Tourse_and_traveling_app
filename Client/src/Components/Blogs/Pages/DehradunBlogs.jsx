import React, { useEffect, useState } from "react";
import img1 from "../Carosalimg/images1.jpg";
import img2 from "../Carosalimg/images2.jpg";
import img3 from "../Carosalimg/images3.jpg";
import img4 from "../Carosalimg/images4.jpg";
import img5 from "../Carosalimg/images5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const DehradunBlogs = () => {
  const [duration, setduration] = useState(0);
  const [altitude, setaltitude] = useState(0);
  const [trakingarea, settrakingarea] = useState(0);
  const [hight, sethight] = useState([0, 0, 0, 0]);
  const targethight = [13, 23, 41, 56];

  // increesing the high accoudin to given value
  const animation = () => {
    targethight.forEach((targethight, index) => {
      setTimeout(() => {
        sethight((prev) => {
          const newHight = [...prev];
          newHight[index] = targethight;
          return newHight;
        });
      }, index * 500);
    });
  };

  useEffect(() => {
    animation();
  }, []);

  const controler = (setcontroler, target, increment, controlertime) => {
    const interval = setInterval(() => {
      setcontroler((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, controlertime);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    controler(setduration, 3, 0.5, 60);
  }, []);
  useEffect(() => {
    controler(setaltitude, 1427, 10, 1);
  }, []);
  useEffect(() => {
    controler(settrakingarea, 12, 1, 50);
  }, []);

  const carosal = [img1, img2, img3, img4, img5];
  return (
    <>
      <div>
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden md:h-96">
            {carosal.map((imge, index) => (
              <div
                key={index}
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={imge}
                  className="w-full h-full object-cover shadow-lg  "
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {[...Array(carosal.length)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current={idx === 0 ? "true" : "false"}
                aria-label={`Slide ${idx + 1}`}
                data-carousel-slide-to={idx}
              ></button>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0  end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-row h-auto justify-around static">
        <div className="mt-3 mb-3 flex flex-col justify-center items-center">
          <p className=" text-red-500 opacity-85 text-4xl">
            <FontAwesomeIcon icon={faEarth} />
          </p>
          <p className="font-bold text-2xl">Region</p>
          <p className="text-xl">Uttarakhand | Dehradun</p>
        </div>
        <div className="mt-3 mb-3 flex flex-col justify-center items-center">
          <p className=" text-red-500 opacity-85 text-4xl">
            <FontAwesomeIcon icon={faClock} />
          </p>
          <p className="font-bold text-2xl">Duration</p>
          <p className="text-xl">{duration} days</p>
        </div>
        <div className="mt-3 mb-3 flex flex-col justify-center items-center">
          <p className=" text-red-500 opacity-85 text-4xl">
            <FontAwesomeIcon icon={faPersonHiking} />
          </p>
          <p className="font-bold text-2xl">Altitute</p>
          <p className="text-xl">{altitude} Ft.</p>
        </div>
        <div className="mt-3 mb-3 flex flex-col justify-center items-center">
          <p className=" text-red-500 opacity-85 text-4xl">
            <FontAwesomeIcon icon={faMapLocationDot} />
          </p>
          <p className="font-bold text-2xl">Traking Area</p>
          <p className="text-xl">{trakingarea} Km</p>
        </div>
        <div className="mt-3 mb-3 flex flex-col justify-center items-center">
          <p className="text-red-500 opacity-85 mr-2 text-4xl">
            <div className="flex flex-row  items-end">
              {hight.map((hight, index) => (
                <>
                  <div
                    key={index}
                    style={{
                      height: `${hight}px`,
                      width: "8px",
                      backgroundColor: "red",
                      marginLeft: "4px",
                      transition: "height 0.5s ease",
                    }}
                    className="text-xs"
                  >
                    {index + 1}
                  </div>
                </>
              ))}
            </div>
          </p>
          <p className="font-bold text-2xl">Grade</p>
          <p className="text-xl">Easy to Moderate</p>
        </div>
      </div>
    </>
  );
};

export default DehradunBlogs;
