import React, { useEffect, useState } from "react";
import img1 from "../Carosalimg/images1.jpg";
import img2 from "../Carosalimg/images2.jpg";
import img3 from "../Carosalimg/images3.jpg";
import img4 from "../Carosalimg/images4.jpg";
import img5 from "../Carosalimg/images5.jpg";
import InfoCard from "./Section/InfoCard";
import GradeCard from "./Section/GradeCard";
import {
  faEarth,
  faClock,
  faPersonHiking,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Details from "./Section/Details";

const DehradunBlogs = () => {
  const [duration, setduration] = useState(0);
  const [altitude, setaltitude] = useState(0);
  const [trakingarea, settrakingarea] = useState(0);
  const [hight, sethight] = useState([0, 0, 0, 0]);
  const targethight = [13, 23, 39, 49];

  const price = 3000;
  const name = ["fist","second","third","fourth","fifth"];

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
    animation();
    controler(setduration, 3, 0.5, 60);
    controler(setaltitude, 1427, 10, 1);
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
                  className="w-full h-full object-cover shadow-lg"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 py-6">
        <InfoCard
          icon={faEarth}
          title="Region"
          description="Uttarakhand | Dehradun"
        />
        <InfoCard
          icon={faClock}
          title="Duration"
          description={`${duration} days`}
        />
        <InfoCard
          icon={faPersonHiking}
          title="Altitude"
          description={`${altitude} Ft.`}
        />
        <InfoCard
          icon={faMapLocationDot}
          title="Tracking Area"
          description={`${trakingarea} Km`}
        />
        <GradeCard hight={hight} />
      </div>

      <div className="w-auto ml-52 mr-52 mb-6">
        <Details names={name} price={price}/>
      </div>
    </>
  );
};

export default DehradunBlogs;
