import { useQuery } from '@apollo/client';

import WellnessForm from '../components/WellnessForm';

import { QUERY_WELLNESS } from '../utils/queries';


const Home = () => {
  const { loading, data } = useQuery(QUERY_WELLNESS);
  const wellness = data?.wellness || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className='col-12 col-md-8 mb-3'>
          {loading ? (
            <div>loading...</div>
          ) : (
            <WellnessForm 
            wellness= {wellness}
            />
           
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
