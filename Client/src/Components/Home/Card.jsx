import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

const Card = () => {
  const images = [
    {
      id: 1,
      img: [img1, img2, img3, img4],
      place: [
        "Nanital Car Service",
        "Dehradun Car Service",
        "Masuri Car Service",
        "Kedarnath Car Service",
      ],
      url: "#",
    },
  ];

  return (
    <>
      <div className="static">
          {images.map((value) => (
            <div
              key={value.id}
              className="flex flex-wrap justify-center gap-4 px-4"
            >
              {value.img.map((image, index) => (
                <div
                  key={`${value.id}-${index}`}
                  className="max-w-xs w-full sm:w-64 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={image}
                    alt={value.place[index]}
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {value.place[index]}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Discover our {value.place[index]} with the best service
                      and comfort for your journey.
                    </p>
                    <a
                      href={value.url}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-white text-black dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14M12 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default Card;
