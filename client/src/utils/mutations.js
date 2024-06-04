import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
export const ADD_WELLNESS = gql `
mutation addWellness ($profileId: ID!, $wellness: Boolean!) {
  ($profileId: ID!, $wellness: Boolean!) {
    addCalories(caloriesBenchmark: Boolean): Wellness
    addProtein(proteinBenchmark: Boolean): Wellness
    addFiber(fiberBenchmark: Boolean): Wellness
    addFats(fatbenchmark: Boolean): Wellness
    addCarbs(carbohydrateBenchmark: Boolean): Wellness
    addHourEx(hourExercise: Boolean): Wellness
    addHalfHourEx(halfHourExercise: Boolean): Wellness
    addCardio(cardio: Boolean): Wellness
    addWeightlift(weightlift: Boolean): Wellness 
    addWellness(profileId: ID!, wellness: Boolean): Profile
  }
}`

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_WELLNESS = gql `
mutation   removeWellness($wellness: Boolean!) {
  removeWellness(wellness :$wellness) {
    _id
    name
    wellness
  }
}
`;