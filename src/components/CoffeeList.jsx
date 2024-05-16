import React, { useState, useEffect } from "react";
import axios from "axios";
import "animate.css/animate.compat.css";
import { Animated } from "react-animated-css";
import Data from "./data/Data";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  // Fetching Data dari API SERVER
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/api/coffee");
  //       console.log(response);
  //       setCoffeeData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching coffee data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log(Data);
  return (
    // cek koneksi ke Data
    //   // <div className="mt-16 flex flex-wrap">
    //   //   {coffeeData && coffeeData.length > 0 ? (
    //   //     coffeeData.map((coffee) => (
    //   //       <div data-aos="fade-up"
    //   //         key={coffee.id}
    //   //         className="card w-80 bg-base-100 shadow-xl mx-auto flex flex-wrap mb-10"
    //   //       >
    //   //         <figure>
    //   //           <img src={coffee.imageUrl} alt={coffee.name} />
    //   //         </figure>

    //   //         <div className="flex flex-wrap items-center">
    //   //           <div className="p-4 mb-10">
    //   //             <h2 className="font-inter text-2xl font-semibold">
    //   //               {coffee.name}
    //   //             </h2>
    //   //             <p className="font-inter">IDR {coffee.price}</p>
    //   //             <p className="font-inter">Stock: {coffee.stock}</p>

    //   //             {coffee.type && (
    //   //               <div className="badge badge-secondary font-inter font-semibold">
    //   //                 {coffee.type}
    //   //               </div>
    //   //             )}
    //   //             <div className="mt-4">
    //   //             <button className="bg-sky-600 rounded-lg font-inter font-bold w-20 h-8">
    //   //               Order
    //   //             </button>

    //   //             </div>
    //   //             <p>{coffee.description}</p>
    //   //           </div>
    //   //           <div className="card-actions justify-end">
    //   //             {coffee.categories &&
    //   //               coffee.categories.map((category, index) => (
    //   //                 <div key={index} className="badge badge-outline">
    //   //                   {category}
    //   //                 </div>
    //   //               ))}
    //   //           </div>
    //   //         </div>
    //   //       </div>
    //   //     ))
    //   //   ) : (
    //   //     <p>No coffee data available</p>
    //   //   )}
    //   // </div>

    // MAPPING KALAU PAKAI DATA DARI DATA.JSX
    <>

      
      <div className="mt-16 flex flex-wrap mx-auto">
        {Data && Data.length > 0 ? (
          Data.map((coffee) => (
            <ScrollAnimation animateIn="fadeInRight" className="mx-auto">
            <div
              
              key={coffee.id}
              className="card w-80 bg-base-100 shadow-xl  flex flex-wrap mb-10"
            >
              <figure>
                <img src={coffee.imageUrl} alt={coffee.imageUrl} />
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
                    <button className="bg-sky-600 rounded-lg font-inter font-bold w-20 h-8">
                      Order
                    </button>{" "}
                    
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
      </div>
      

    </>
  );
};

export default CoffeeList;
