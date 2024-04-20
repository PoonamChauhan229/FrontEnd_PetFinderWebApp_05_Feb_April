import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Breed = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://dogapi.dog/api/v2/breeds');
        const breedsData = response.data;
        console.log(breedsData.data)
        setBreeds(breedsData.data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <div className='container'>
      {breeds.length > 0 ? (
        <div className='d-flex flex-wrap text-center' style={{margin:"0px 180px 0px 180px"}}>
          {breeds.map((breed) => (
                          
              <div className="m-2 mb-3" key={breed.id}>
                          <button
                            className="btn btn-primary border-primary"
                            type="button"
                            style={{
                              fontSize: "0.8rem",
                              padding: "0.7rem 1rem",
                              backgroundColor: "#7AB730",
                            }}
                          >
                            {breed.attributes.name}
                          </button>
              </div>
         
          ))}
        </div>
      ) : (
        <p>Loading breed information...</p>
      )}
       <hr style={{ color: "#7AB730" }} />

<div className="text-center text-primary">
  <button
    className="small btn"
    // onClick={() => navigate("/register")}
    style={{ color: "#7AB730" }}
  >
    Skip For Now!
  </button>
      
    </div>
    </div>
  );
};

export default Breed;
