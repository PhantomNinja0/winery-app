// components/ApiDataFetcher.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WineAPI = () => {
  const [wineList, setwineList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/wines');

        if (response.status === 200) {
          const data = response.data;
          console.log('API Response:', response.data);

          const wineListArray = data.result.rows ? data.result.rows.map(wine => wine.name) : []; // Replace 'property_name' with the actual property
          console.log(wineListArray); 
          setwineList(wineListArray);
        } else {
          console.error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error(`An error occurred: ${error.message}`);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts


  return (
    <div>
      <h1>Extracted Data:</h1>
      <ul>
        {wineList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WineAPI;
