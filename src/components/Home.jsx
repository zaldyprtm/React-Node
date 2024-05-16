import React, { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]); // State to store data from API
  const url = "https://kfc-chickens.p.rapidapi.com/chickens/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3a3e1d9513msh54f735a55793169p17a061jsn8cb9acacdae9",
      "X-RapidAPI-Host": "kfc-chickens.p.rapidapi.com",
    },
  };

  async function fetchApi() {
    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Assuming the API returns JSON
      setData(result); // Adjust according to the actual structure of your API response
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchApi(); // Call the fetchApi function when the component mounts
  }, []);

  return (
    <>
      <h1>Welcome to the Home Page</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <img src={item.image} alt="" />
            <p>{item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
