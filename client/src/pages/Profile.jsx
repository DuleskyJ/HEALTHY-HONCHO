import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from "react";
// import  WellnessForm from "../components/WellnessForm";
import WellnessCard from "../components/WellnessCard";

import { QUERY_ALL } from '../utils/queries';

import Auth from '../utils/auth';



const Profile = () => {
  
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  useEffect(() => {
    getQuote();
  }, []);
  const getQuote = async () => {
    fetch(`https://api.quotable.io/quotes/random`, {
      headers: {
        "X-Api-Key": "yCMvFpxTzoD1YpyLGRHvfg==uQKwGLSO5PxwmmxN",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("quote", data[0].author);
        setQuote(data[0].content);
        setAuthor(data[0].author);
      });
  };

  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  // const { loading: profileLoading, data } = useQuery(QUERY_PROFILE, { variables: { profileId: profileId } });
  // const profile = data || {};
  // console.log(profile);
  const { loading, data } = useQuery(QUERY_ALL);
  const profile = data?.profiles[0] || [];
console.log(profile);
console.log("wellnesslog", profile.wellness);
  // const { loading: wellnessLoading, data: wellnessData } = useQuery( QUERY_WELLNESS, {
  //   variables: { profileId: profileId}
  // });
  // const wellness = wellnessData?.wellness || [];
  

  // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    
    <div>
      <h6 className="card-header"> 
      <div>
      <p>{quote}</p>
      <p>-{author}</p>
    </div>
      </h6>
      <p>
        User: {profile.name}
      </p>
      <h3>Wellness Data:</h3>
      <div>
            {profile.wellness.map((wellness) => (
              <WellnessCard key={wellness._id} wellness={wellness} />
            ))}
        </div>
    
   </div>
  );
};

export default Profile;
