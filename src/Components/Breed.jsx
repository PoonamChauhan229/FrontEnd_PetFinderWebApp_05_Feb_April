import { useState, useEffect } from 'react';
import axios from 'axios';
import { addUser } from '../utilis/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Breed = () => {
  const [breeds, setBreeds] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://dogapi.dog/api/v2/breeds');
        setBreeds(response.data.data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleBreedSelection = async (selectedBreed) => {
    try {

      const apiUrl1 = `https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata?uid=${user.uid}`;
      const response1 = await axios.get(apiUrl1);
      console.log(response1.data[0].id)
      const id=response1.data[0].id

      // Update user's selected breed in Redux store
      const updatedUser = { ...user, selectedBreed };
      dispatch(addUser(updatedUser));

      // Make PUT request to update user's data in mock API using uid
      const apiUrl = `https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata/${id}`;
      const response = await axios.put(apiUrl, updatedUser);

      console.log('User data updated in mock API:', response.data);

      // Navigate to the desired page after updating
      navigate('/allbreed');
    } catch (error) {
      console.error('Error updating user data in mock API:', error);
    }
  };

  const handleSkip = () => {
    console.log('Skipped for now');
    navigate('/allbreed');
  };

  return (
    <div className='container'>
      <div className="border-start border-5 border-primary ps-5 mb-5" style={{ margin: "0px 180px 0px 180px" }}>
        <h4 className="text-primary text-uppercase">Breeds</h4>
        <h4 className="text-uppercase mb-0">Select Any Breed</h4>
      </div>

      {breeds.length > 0 ? (
        <div className='d-flex flex-wrap text-center' style={{ margin: "0px 180px 0px 180px" }}>
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
                onClick={() => handleBreedSelection(breed.attributes.name)}
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
          onClick={handleSkip}
          style={{ color: "#7AB730" }}
        >
          Skip For Now!
        </button>
      </div>
    </div>
  );
};

export default Breed;
