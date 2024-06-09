import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ADD_WELLNESS } from '../../utils/mutations';

import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';

const WellnessForm = ({ profileId }) => {
  const [wellnessData, setWellnessData] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,

  });


  const [addWellness, { error }] = useMutation(ADD_WELLNESS);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setWellnessData({
      ...wellnessData,
      [name]: checked,
    });
  };

    const handleFormSubmit = async (event) => {
      event.preventDefault();


      try {
        const data = await addWellness({
          variables: { profileId, wellness: wellnessData },
        });
        setWellnessData({
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
          checkbox5: false,
          checkbox6: false, 
          checkbox7: false,
          checkbox8: false,
          checkbox9: false, 

        });


      } catch (err) {

      }
    };

    return (
      <div>
        <h4></h4>

        {Auth.loggedIn() ? (
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="container col-12 col-lg-9">
              <input
                type='checkbox'
                name='checkbox1'
                checked={wellnessData.checkbox1}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <input
                type='checkbox'
                name='checkbox2'
                checked={wellnessData.checkbox2}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <input
                type='checkbox'
                name='checkbox3'
                checked={wellnessData.checkbox3}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <input
                type='checkbox'
                name='checkbox4'
                checked={wellnessData.checkbox4}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <input
                type='checkbox'
                name='checkbox5'
                checked={wellnessData.checkbox5}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <input
                type='checkbox'
                name='checkbox6'
                checked={wellnessData.checkbox6}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <input
                type='checkbox'
                name='checkbox7'
                checked={wellnessData.checkbox7}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <input
                type='checkbox'
                name='checkbox8'
                checked={wellnessData.checkbox8}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
              <input
                type='checkbox'
                name='checkbox9'
                checked={wellnessData.checkbox9}
                className="form-input w-100 col-6 col-sm-4"
                onChange={handleCheckboxChange}
              />
            
            </div>

            <div>
              <button className="card-link btn btn-secondary" type="submit">
                Submit
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        ) : (
          <p>
            You need to be logged in to track you wellness journey . Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>

    )
  };

  export default WellnessForm;