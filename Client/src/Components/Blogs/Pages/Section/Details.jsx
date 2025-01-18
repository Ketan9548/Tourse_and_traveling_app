import React from "react";

const Details = ({ price, names = [] }) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex justify-center bg-red-600">
          <p className="p-3 font-bold text-3xl text-white">
            {price}/<span className="text-xl">Person</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start justify-between">
        <div>
          <ol>
            {names.map((name, index) => (
              <li typeof="number" key={index}>{name}</li>
            ))}
          </ol>
        </div>
        <div className="items-start">
          <p>right</p>
        </div>
      </div>
    </>
  );
};

export default Details;
