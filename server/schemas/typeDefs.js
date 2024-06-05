const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    wellness: [Wellness]
  }
  type Wellness {
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
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    wellness(wellnessID: ID!): Wellness
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
  
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWellness(
      caloriesBenchmark: Boolean!
      proteinBenchmark: Boolean!
      fiberBenchmark: Boolean!
      fatsBenchmark: Boolean!
      carbohydratesBenchmark: Boolean!
      hourExercise: Boolean!
      halfHourExercise: Boolean!
      cardio: Boolean!
      weightlift: Boolean!): Wellness
  }
`;

module.exports = typeDefs;
