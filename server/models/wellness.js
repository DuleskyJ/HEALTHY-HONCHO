const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const wellnessSchema = new Schema({
  caloriesBenchmark: {
    type: Boolean,
    required: false,
  },
  ProteinBenchmark: {
    type: Boolean,
    required: false,
  },
  fiberBenchmark: {
    type: String,
    required: true,
  },
  fatsBenchmark: {
    type: Boolean,
    required: false,
  },
  carbohydratesBenchmark: {
    type: Boolean,
    required: false,
  },
  hourExercise: {
    type: Boolean,
    required: false,
  },
  halfHourExcercie: {
    type: Boolean,
    required: false,
  },
  cardio: {
    type: Boolean,
    required: false,
  },
  weightlift: {
    type: Boolean,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  

});

const Wellness = model('Wellness', wellnessSchema);

module.exports = Wellness;

  