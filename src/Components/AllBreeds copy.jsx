import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreedCard from './BreedCard';
import AddBreedModal from './AddBreedModal';
import { useSelector } from 'react-redux';
import BreedSubscriptionModal from './BreedSubscriptionModal';

const AllBreeds = () => {
  const userFinal = useSelector((state) => state.user);
  console.log("Allbreeds",userFinal)
// 
  const [breeds, setBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  // const [userData,setUserData]=useState()
 

  // const uid=userFinal?.uid
  
  // const [showAddModal, setShowAddModal] = useState(false);
  // const [showSubscriptionModal, setshowSubscriptionModal] = useState(false);


  // // useEffect
  // useEffect(()=>{
  //   // MockApi Dogs Data Fetch + Users data
  //   fetchBreeds() 
  //   fetchUserData()    
  // },[])

  // useEffect(()=>{  
  //   if(!userFinal?.selectedBreed){
  //     setshowSubscriptionModal(true) 
  //   }     
  // },[userFinal?.selectedBreed])

  // useEffect(()=>{  
  //   if(userFinal?.selectedBreed){
  //     setshowSubscriptionModal(false) 
  //   }     
  // },[userFinal?.selectedBreed])

  // // const fetchUserDataUId = async (element) => {
  // //   try {
  // //     const response = await axios.get(`https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata?uid=${element}`);
  // //     console.log(response.data[0].uid)
  // //     setUserDataUid(response.data[0].uid)
  // //     console.log("UID called")
  // //   } catch (error) {
  // //     console.error('Error fetching user data:', error);
  // //   }
  // // };

  const fetchBreeds = async () => {
    try {
      const response = await axios.get('https://6624dd2604457d4aaf9d281d.mockapi.io/dogs');
      console.log("MOCK API CALEED")
      setBreeds(response.data);
    } catch (error) {
      console.error('Error fetching breeds:', error);
    }
  };

  // const fetchUserData = async () => {
  //   try {
  //     const response = await axios.get('https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata');
  //     setUserData(response.data)
  //     console.log("UsersData",response.data)
   
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //     return [];
  //   }
  // };

  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      setFilteredBreeds([]);
      setSearchClicked(false);
  
      // Make API call to update Searched_Breed_Outof_stock with the current searchTerm
      const apiUrl = `https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata?uid=${uid}`;
      const payload = {
        Searched_Breed_Outof_stock: searchTerm
      };
  
      try {
        await axios.post(apiUrl, payload);
      } catch (error) {
        console.error('Error updating Searched_Breed_Outof_stock:', error);
      }
  
      return;
    }
  
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${searchTerm}&api_key=live_uwbqnq8DTKSqVi3Bpy7FUSQH1HKIIb9y31d41Izmt62Y23A0koBbYx2e6PMMbbxf`);
      // const response = await axios.get(`https://6624dd2604457d4aaf9d281d.mockapi.io/dogs?name=${searchTerm}`)
      setFilteredBreeds(response.data);
      setSearchClicked(true);
  
      if (response.data.length === 0) {
        // Fetch current Searched_Breed_Outof_stock from mock API
        const apiUrl = `https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata?uid=${uid}`;
        try {
          const userDataResponse = await axios.get(apiUrl);
          console.log("ResponseData",userDataResponse)
          console.log(`${apiUrl}/${userDataResponse?.data[0]?.id}`)
          const currentSearches = userDataResponse.data[0]?.Searched_Breed_Outof_stock || [];
  
          // Check if the current searchTerm is not already in the Searched_Breed_Outof_stock
          if (!currentSearches.includes(searchTerm)) {
            const updatedSearches = [...currentSearches, searchTerm];
  
            // Update Searched_Breed_Outof_stock with updated array
            const updatePayload = {
              Searched_Breed_Outof_stock: updatedSearches
            };
  
            await axios.put(`https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata/${userDataResponse?.data[0]?.id}`, updatePayload);
          }
        } catch (error) {
          console.error('Error fetching or updating Searched_Breed_Outof_stock:', error);
        }
      }
    } catch (error) {
      console.error('Error searching breeds:', error);
      setFilteredBreeds([]);
      setSearchClicked(false);
    }
  };
  
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredBreeds([]);
      setSearchClicked(false);
      fetchBreeds(); // Fetch all breeds when search input is cleared
    }
  };

  const updateBreed = async (updatedBreed) => {
    try {
      const response = await axios.put(`https://6624dd2604457d4aaf9d281d.mockapi.io/dogs/${updatedBreed.id}`, updatedBreed);
      console.log('Updated Breed:', response.data);
      fetchBreeds();
    } catch (error) {
      console.error('Error updating breed:', error);
    }
  };

  const deleteBreed = async (breedId) => {
    try {
      await axios.delete(`https://6624dd2604457d4aaf9d281d.mockapi.io/dogs/${breedId}`);
      console.log('Deleted Breed:', breedId);
      fetchBreeds();
    } catch (error) {
      console.error('Error deleting breed:', error);
    }
  }; 
  
  const addNewBreed = (newBreed) => {
    // Update breeds list with the new breed
    setBreeds((prevBreeds) => [...prevBreeds, newBreed]);
    // Close the modal after adding a new breed
    setShowAddModal(false);
  };

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className='d-flex' >
            <div className="border-start border-5 border-primary ps-3" style={{ width: '53%',height:"30%" }}>        
              <h5 className="text-uppercase py-3">Breeds Available for Adoption</h5>
            </div>
       
            <div className='d-flex'>
              <button className="btn text-primary btn-sm"  style={{ width:'23%',paddingBottom:"10%",marginTop:"4%" }} onClick={() => setShowAddModal(true)}>Add Pet<i className="bi bi-plus-circle-fill text-primary ps-1"></i></button>
              <button className="btn text-primary btn-sm me-2" style={{ width:'24%',paddingBottom:"10%",marginTop:"4%"}} onClick={() => setshowSubscriptionModal(true)}>Subscribe <i className="bi bi-arrow-up-right-circle-fill text-primary"></i></button>
              
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleInputChange}
                  style={{height:"35px", marginTop:"6.8%"}}
                />
                <button
                  className="btn btn-outline-success py-0 px-3 text-primary"
                  style={{ fontSize: '80%',height:"35px", marginTop:"6.8%" }}
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>

            </div>
       
        {/* Breed List */}
        <div className="row g-5">
          {(searchClicked ? filteredBreeds : breeds).map((breed) => (
            <BreedCard
              {...breed}
              key={breed.id}
              breed={breed}
              updateBreed={updateBreed}
              deleteBreed={deleteBreed}
            />
          ))}
        </div>
      </div>

      {/* Add Breed Modal */}
      {showAddModal && (
        <AddBreedModal
          onClose={() => setShowAddModal(false)}
          addNewBreed={addNewBreed}
        />
      )}

{/* <BreedSubscriptionModal/> */}
{/* {showSubscriptionModal && (
        <BreedSubscriptionModal
          onClose={() => setshowSubscriptionModal(false)}
        />
      )} */}
    </div>

  );
};

export default AllBreeds;
