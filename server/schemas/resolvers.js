const { Profile, Wellness } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find().populate('wellness');
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate('wellness');
    },

    wellness: async (parent, { profileId }) => {
      const params = profileId ? { profileId } : {};
      return Wellness.find(params).sort({ createdAt: -1 });
    },
    wellness: async (parent, { wellnessId }) => {
      return Wellness.findOne({ _id: wellnessId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },
    addWellness: async (parent, { caloriesBenchmark, ProteinBenchmark, fiberBenchmark, fatsBenchmark, carbohydratesBenchmark, hourExercise, halfHourExcercie, cardio, weightlift }, context) => {
      if (context.profileId) {
        const wellness = await Wellness.create({
          caloriesBenchmark,
          ProteinBenchmark,
          fiberBenchmark,
          fatsBenchmark,
          carbohydratesBenchmark,
          hourExercise,
          halfHourExcercie, 
          cardio, 
          weightlift,
        });
        await Profile.findOneAndUpdate(
          {_id: context.profileId._id },
          {
            $addToSet: { wellness: wellness._id } }
        );
        return wellness;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },

    removeWellness: async (parent, { wellnessId }, context) => {
      if (context.user) {
        const wellness = await Wellness.findOneAndDelete({
          _id: wellnessId,
        });

        await Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { wellness: wellness._id } }
        );

        return thought;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
