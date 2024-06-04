import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql `
query profile ($name: String!) {
  profile(name: $name) {
    _id: ID
    name
    email
    password
    wellness {
      _id 
    }
  }
}
`;

export const QUERY_WELLNESS = gql `
query getwellness {
  wellness {
    _id: ID
    caloriesBenchmark: Boolean
    proteinBenchmark: Boolean
    fiberBenchmark: Boolean
    fatsBenchmark: Boolean
    carbohydratesBenchmark: Boolean
    hourExercise: Boolean
    halfHourExercise: Boolean
    cardio: Boolean
    weightlift: Boolean  
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      wellness
    }
  }
`;

