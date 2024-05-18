import React, { useState, useEffect } from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import { BrowserRouter as Router, Link } from "react-router-dom"; // Import BrowserRouter dan Link dari react-router-dom
import Data from "./data/Data";

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-5 h-5 inline-block mr-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4-5H1M7 13l4 8m0 0l4-8m-4 8v-8"
    />
  </svg>
);

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [currentPage, setCurrentPage] = useState(1);

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setCoffeeData(Data);
      setLoading(false);
    }, 2000); // Simulate a delay of 2 seconds
  }, []);

  // Logic to divide data into pages
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = coffeeData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router> {/* Let's wrap our component with BrowserRouter */}
      <div className="mt-16 flex flex-wrap mx-auto">
        {loading ? (
          // Display skeleton loaders if loading is true
          <div className="flex flex-wrap justify-center w-full">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-52 m-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </div>
        ) : currentItems && currentItems.length > 0 ? (
          currentItems.map((coffee) => (
            <ScrollAnimation
              key={coffee.id}
              animateIn="fadeInRight"
              className="mx-auto"
            >
              <div className="card w-80 bg-base-100 shadow-xl flex flex-wrap mb-10">
                <figure>
                  <img src={coffee.imageUrl} alt={coffee.name} />
                </figure>
                <div className="flex flex-wrap items-center">
                  <div className="p-4 mb-10">
                    <h2 className="font-inter text-2xl font-semibold">
                      {coffee.name}
                    </h2>
                    <p className="font-inter">IDR {coffee.price}</p>
                    <p className="font-inter">Stock: {coffee.stock}</p>
                    {coffee.type && (
                      <div className="badge badge-secondary font-inter font-semibold">
                        {coffee.type}
                      </div>
                    )}
                    <div className="mt-4">
                      <button className="bg-sky-600 rounded-lg font-inter font-bold w-28 h-8 flex items-center justify-center">
                        <CartIcon />
                        Order
                      </button>
                    </div>
                  </div>
                  <p>{coffee.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))
        ) : (
          <p>No coffee data available</p>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-4 mx-auto">
          {Array.from({ length: Math.ceil(coffeeData.length / itemsPerPage) }).map((_, index) => (
            <Link
              key={index}
              to={`/${index + 1}`}
              className={`mx-1 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none ${
                currentPage === index + 1 ? 'bg-blue-700' : ''
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </div>
    </Router>
  );
};

export default CoffeeList;
