const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
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
    wellness(name: String): [Wellness]
    wellness(wellnessID: ID!): Wellness
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCalories(caloriesBenchmark: Boolean): Wellness
    addProtein(proteinBenchmark: Boolean): Wellness
    addFiber(fiberBenchmark: Boolean): Wellness
    addFats(fatbenchmark: Boolean): Wellness
    addCarbs(carbohydrateBenchmark: Boolean): Wellness
    addHourEx(hourExercise: Boolean): Wellness
    addHalfHourEx(halfHourExercise: Boolean): Wellness
    addCardio(cardio: Boolean): Wellness
    addWeightlift(weightlift: Boolean): Wellness 
    addWellness(profileId: ID!, wellness: boolean): Profile
    removeProfile: Profile
    removeWellness(wellnessID: ID!): Wellness
  }
`;

module.exports = typeDefs;
