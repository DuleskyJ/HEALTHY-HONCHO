import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ADD_WELLNESS } from '../../utils/mutations';

import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';

const WellnessForm = ({ profileId }) => {
  const [wellness, setWellness] = useState('');

  const [addWellness, { error }] = useMutation(ADD_WELLNESS);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addWellness({
        variables: { profileId, wellness },
      });

      setSkill('');
    } catch (err) {
      console.error(err);
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
        <div className="col-12 col-lg-9">
          <input
            placeholder="wellness input"
            value={wellness}
            className="form-input w-100"
            onChange={(event) => setWellness(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
         
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