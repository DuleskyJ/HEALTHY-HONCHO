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
  addWellness (profileId: $profileId, wellness: $wellness) {
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



