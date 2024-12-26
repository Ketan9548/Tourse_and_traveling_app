import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Servicepage = () => {
  const [dataval, setDataval] = useState([]);
  const [error, setError] = useState(null);
  let url = "http://localhost:3000/api/alldata";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setDataval(response.data);
      console.log("the data is response is:", response);
    } catch (error) {
      setError("Failed to fetch data. Please try again later.", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-auto h-auto">
      <p className="text-center font-bold text-6xl">Taxi Service of Cabs</p>
      <div className="flex md:w-auto justify-center mt-4 ml-80 mr-80">
        <div className="flex md:w-full w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent rounded-lg shadow-md"></div>
      </div>
      {error ? (
        <p className="text-center text-red-500 font-bold">{error}</p>
      ) : (
        <div className="flex flex-wrap h-auto w-auto justify-between mt-9 border-2 border-black p-2 mr-5 ml-3 mb-3">
          {dataval.map((val, index) => (
            <div
              key={index}
              className="border-2 h-80 w-80 border-black p-4 m-2"
            >
              <div className="flex ml-0 flex-row h-auto w-full">
                <p className="mr-3 mt-1">
                  <FontAwesomeIcon icon={faArrowRight} />
                </p>
                <h3 className="text-2xl font-bold">{val.title}</h3>
              </div>
              <div className="m-2">
                {val.list.map((route, idx) => (
                  <div
                    key={idx}
                    className="text-lg flex w-auto font-serif m-1 mb-3 mt-3 border-b-2 border-black"
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
      )}
    </div>
  );
};

export default Servicepage;
