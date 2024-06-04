import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql `
query Query($profileId: ID!) {
  profile(profileId: $profileId) {
    _id
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

