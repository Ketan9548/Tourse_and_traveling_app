import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Servicepage = () => {
  const dataval = [
    {
      title: "Taxi service in Rudrapur",
      Value: [
        "Rudrapur to Delhi",
        "Rudrapur to Chardham",
        "Rudrapur to Dehradun",
        "Rudrapur to Nanital",
      ],
    },
    {
      title: "Taxi service in Delhi",
      Value: [
        "Delhi to Uttarakhand",
        "Delhi to Dehradun",
        "Delhi to Rudrapur",
        "Delhi to Masuri",
      ],
    },
    {
      title: "Taxi service in Dehradun",
      Value: [
        "Dehradun to Delhi",
        "Dehradun to Chardham",
        "Dehradun to Dehradun",
        "Dehradun to Nanital",
      ],
    },
    {
      title: "Taxi service in Nanital",
      Value: [
        "Nanital to Delhi",
        "Nanital to Chardham",
        "Nanital to Dehradun",
        "Nanital to Rudrapur",
      ],
    },
    {
      title: "Taxi service in Chardham",
      Value: [
        "Chardham to Delhi",
        "Chardham to Chardham",
        "Chardham to Dehradun",
        "Chardham to Nanital",
      ],
    },
    {
      title: "Taxi service in Mussoorie",
      Value: [
        "Mussoorie to Delhi",
        "Mussoorie to Chardham",
        "Mussoorie to Dehradun",
        "Mussoorie to Nanital",
      ],
    },
    {
      title: "Taxi service in Almora",
      Value: [
        "Almora to Delhi",
        "Almora to Chardham",
        "Almora to Dehradun",
        "Almora to Nanital",
      ],
    },
    {
      title: "Taxi service in Jim Corbett",
      Value: [
        "Jim Corbett to Delhi",
        "Jim Corbett to Chardham",
        "Jim Corbett to Dehradun",
        "Jim Corbett to Nanital",
      ],
    },
  ];

  return (
    <div className="w-auto h-auto">
      <p className="text-center font-bold text-6xl">Taxi Service of Cabs</p>
      <div className="flex md:w-auto justify-center mt-4 ml-80 mr-80">
        <div className="flex md:w-full w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent rounded-lg shadow-md"></div>
      </div>
      <div className="flex flex-wrap h-auto w-auto justify-between mt-9 border-2 border-black p-2 mr-5 ml-3 mb-3">
        {dataval.map((val, index) => (
          <div key={index} className="border-2 h-80 w-80 border-black p-4 m-2">
            <div className="flex ml-0 flex-row h-auto w-full">
              <p className="mr-3 mt-1">
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
              <h3 className="text-2xl font-bold">{val.title}</h3>
            </div>
            <div className="m-2">
              {val.Value.map((route, idx) => (
                <div
                  key={idx}
                  className="text-lg flex font-serif m-1 mb-3 mt-3 border-b-2 border-black w-56"
                >
                  <span className="text-green-700">
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </span>
                  <NavLink to="nanitalcar">
                    <span className="hover:text-orange-400 ml-2 text-xl">
                      {route}
                    </span>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicepage;
