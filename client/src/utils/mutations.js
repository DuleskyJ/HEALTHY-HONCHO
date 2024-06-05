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
    addWellness(
      caloriesBenchmark: Boolean!,
      proteinBenchmark: Boolean!,
      fiberBenchmark: Boolean!,
      fatsBenchmark: Boolean!,
      carbohydratesBenchmark: Boolean!,
      hourExercise: Boolean!,
      halfHourExercise: Boolean!,
      cardio: Boolean!,
      weightlift: Boolean!): Wellness
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