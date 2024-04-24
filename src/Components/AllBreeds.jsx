import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreedCard from './BreedCard';

const AllBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    try {
      const response = await axios.get('https://6624dd2604457d4aaf9d281d.mockapi.io/dogs');
      setBreeds(response.data);
    } catch (error) {
      console.error('Error fetching breeds:', error);
    }
  };

  const updateBreed = async (updatedBreed) => {
    try {
      const response = await axios.put(`https://6624dd2604457d4aaf9d281d.mockapi.io/dogs/${updatedBreed.id}`, updatedBreed);
      console.log('Updated Breed:', response.data);
      // Refresh breeds data after update
      fetchBreeds();
    } catch (error) {
      console.error('Error updating breed:', error);
    }
  };

  const deleteBreed = async (breedId) => {
    try {
      await axios.delete(`https://6624dd2604457d4aaf9d281d.mockapi.io/dogs/${breedId}`);
      console.log('Deleted Breed:', breedId);
      // Refresh breeds data after deletion
      fetchBreeds();
    } catch (error) {
      console.error('Error deleting breed:', error);
    }
  };

  return (
    <div className="container-fluid pt-5" style={{marginTop:"4%"}}>
        <div className="container">
            <div className="border-start border-5 border-primary ps-3 mb-5 d-flex justify-content-between" style={{maxWidth: "100%"}}>
                
                <h5 className="text-uppercase py-3">Breeds Available for Adoption</h5>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                      <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success py-0 px-3"
                        style={{fontSize:"80%"}}
                        type="submit">Search</button>
                      </div>
                    </div>
</nav>
            </div>
        <div className="row g-5">
          {breeds.map(breed => (
            <BreedCard
              {...breed}
              key={breed.id}
              breed={breed}
              updateBreed={updateBreed}
              deleteBreed={deleteBreed} // Pass deleteBreed function to BreedCard
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBreeds;
