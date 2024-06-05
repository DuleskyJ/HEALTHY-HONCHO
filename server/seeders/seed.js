const db = require('../config/connection');
const { Profile, Wellness } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Profile', 'profile');
  await cleanDB('Wellness', 'wellness');

  
  const wellnessData = await Wellness.insertMany([

    {   
        caloriesBenchmark: true,
        ProteinBenchmark: true,
        fiberBenchmark: true,
        fatsBenchmark: true,
        carbohydratesBenchmark: true,
        hourExercise: true,
        halfHourExcercie: true,
        cardio: true,
        weightlift: true,
    },
    {   
        caloriesBenchmark: true,
        ProteinBenchmark: true,
        fiberBenchmark: true,
        fatsBenchmark: true,
        carbohydratesBenchmark: true,
        hourExercise: true,
        halfHourExcercie: true,
        cardio: true,
        weightlift: true,
    }
  ]);

  console.log('wellness seeded');

  await Profile.create({
    name: 'THE honcho',
    email: 'honcho@testmail.com',
    password: 'password',
    wellness: [wellnessData[0]._id] 
      
    
  });


  console.log('profile seeded');

  process.exit();
});
