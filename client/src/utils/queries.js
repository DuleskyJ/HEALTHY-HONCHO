import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql `
query Query($profileId: ID!) {
  profile(profileId: $profileId) {
    _id
    email
    name
    password
    wellness {
      _id
      caloriesBenchmark
      proteinBenchmark
      fiberBenchmark
      fatsBenchmark
      carbohydratesBenchmark
      hourExercise
      halfHourExercise
      cardio
      weightlift
    }
  }
}
`;

export const QUERY_ALL = gql `
query Query {
  profiles {
    _id
    name
    email
    password
    wellness {
      _id
    }
  }
}`;

export const QUERY_WELLNESS = gql `
query getWellness {
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

