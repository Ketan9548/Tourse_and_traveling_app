import React, { useState } from "react";

const Itinerary = () => {
  const [quick, setquick] = useState(true);
  const [days, setdays] = useState(1);

  function DayView(d) {
    setdays(d);
  }

  const Quickview = () => {
    setquick(true);
  };

  const Detailview = () => {
    setquick(false);
  };

  return (
    <div className="border-spacing-y-56 p-5 border-4">
      <h1 className="font-bold text-4xl text-red-500">Itinerary</h1>
      <div className="flex flex-row mt-1">
        <button
          onClick={Quickview}
          className={`mr-3 p-1 text-black border-2 rounded-xl border-red-600 ${
            quick === true
              ? "font-bold p-1 rounded-xl bg-red-600 text-white"
              : ""
          }`}
        >
          Quick View
        </button>
        <button
          onClick={Detailview}
          className={`p-1 text-black border-2 rounded-xl border-red-600 ${
            quick === false
              ? "font-bold rounded-xl p-1 bg-red-600 text-white"
              : ""
          }`}
        >
          Detail View
        </button>
      </div>
      {quick ? (
        <div>
          <p className="font-bold text-2xl">
            Day-1:{" "}
            <span className="text-xl">Rishikesh to Lohajung (Drive)</span>
            <ol className="list-disc ml-9 font-normal text-base">
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                maxime, nihil.
              </li>
            </ol>
          </p>
          <p className="font-bold text-2xl">
            Day-2:{" "}
            <span className="text-xl">Rishikesh to Lohajung (Drive)</span>
            <ol className="list-disc ml-9 font-normal text-base">
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                maxime, nihil.
              </li>
            </ol>
          </p>
          <p className="font-bold text-2xl">
            Day-3:{" "}
            <span className="text-xl">Rishikesh to Lohajung (Drive)</span>
            <ol className="list-disc ml-9 font-normal text-base">
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                maxime, nihil.
              </li>
            </ol>
          </p>
          <p className="font-bold text-2xl">
            Day-4:{" "}
            <span className="text-xl">Rishikesh to Lohajung (Drive)</span>
            <ol className="list-disc ml-9 font-normal text-base">
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                maxime, nihil.
              </li>
            </ol>
          </p>
          <p className="font-bold text-2xl">
            Day-5:{" "}
            <span className="text-xl">Rishikesh to Lohajung (Drive)</span>
            <ol className="list-disc ml-9 font-normal text-base">
              <li>Lorem ipsum dolor sit amet, consectetur.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                maxime, nihil.
              </li>
            </ol>
          </p>
        </div>
      ) : (
        <div>
          <div className="flex mt-2 flex-row">
            <button
              className={`mr-3 p-1 text-black border-2 rounded-xl border-red-600 ${
                days === 1
                  ? "font-bold p-1 rounded-xl bg-red-600 text-white"
                  : ""
              }`}
              onClick={() => DayView(1)}
            >
              Day 1
            </button>
            <button
              className={`mr-3 p-1 text-black border-2 rounded-xl border-red-600 ${
                days === 2
                  ? "font-bold p-1 rounded-xl bg-red-600 text-white"
                  : ""
              }`}
              onClick={() => DayView(2)}
            >
              Day 2
            </button>
            <button
              className={`mr-3 p-1 text-black border-2 rounded-xl border-red-600 ${
                days === 3
                  ? "font-bold p-1 rounded-xl bg-red-600 text-white"
                  : ""
              }`}
              onClick={() => DayView(3)}
            >
              Day 3
            </button>
            <button
              className={`mr-3 p-1 text-black border-2 rounded-xl border-red-600 ${
                days === 4
                  ? "font-bold p-1 rounded-xl bg-red-600 text-white"
                  : ""
              }`}
              onClick={() => DayView(4)}
            >
              Day 4
            </button>
            <button
              className={`mr-3 p-1 text-black border-2 rounded-xl border-red-600 ${
                days === 5
                  ? "font-bold p-1 rounded-xl bg-red-600 text-white"
                  : ""
              }`}
              onClick={() => DayView(5)}
            >
              Day 5
            </button>
          </div>
          <div>
            {(() => {
              switch (days) {
                case 1:
                  return (
                    <>
                      <div>
                        <p>day 1</p>
                      </div>
                    </>
                  );
                case 2:
                  return (
                    <>
                      <div>
                        <p>day 2</p>
                      </div>
                    </>
                  );
                case 3:
                  return (
                    <>
                      <div>
                        <p>day 3</p>
                      </div>
                    </>
                  );
                case 4:
                  return (
                    <>
                      <div>
                        <p>day 4</p>
                      </div>
                    </>
                  );
                case 5:
                  return (
                    <>
                      <div>
                        <p>day 5</p>
                      </div>
                    </>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Itinerary;
