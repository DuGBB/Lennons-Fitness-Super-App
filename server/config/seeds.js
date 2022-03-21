const db = require("./connection");
const { Member, Trainer, Class, Activity, Standing } = require("../models");
//const { insertMany } = require("../models/Member");

db.once("open", async () => {
  await Member.deleteMany();

  const members = await Member.insertMany([
    {
      firstName: "Luke",
      lastName: "Skywalker",
      email: "Luke@force.net",
      password: "123456",
      age: "28",
    },
    {
      firstName: "Leia",
      lastName: "Skywalker",
      email: "Leia@force.net",
      password: "123456",
      age: "28",
    },
    {
      firstName: "Obi-Wan",
      lastName: "Kenobi",
      email: "Ben@force.net",
      password: "123456",
      age: "57",
    },
  ]);

  console.log("members seeded");

  await Trainer.deleteMany();

  const trainers = await Trainer.insertMany([
    {
      firstName: "Qui-Gon",
      lastName: "Jinn",
      email: "Jinn@force.net",
      password: "123456",
    },
    {
      firstName: "Mace",
      lastName: "Windu",
      email: "Windu@force.net",
      password: "123456",
    },
    {
      firstName: "Anakin",
      lastName: "Skywalker",
      email: "Skywalker@force.net",
      password: "123456",
    },
    {
      firstName: "Maz",
      lastName: "Kanata",
      email: "Kanata@force.net",
      password: "123456",
    },
  ]);

  console.log("trainers seeded");

  await Class.deleteMany();

  const classes = await Class.insertMany([
    {
      name: "Weight Training",
      location: "Room 1",
      time: "11-12",
      days: "Mon, Tues, Fri",
      description: "Free weights that are used to Pump You Up!",
      trainer: trainers[0]._id,
    },
    {
      name: "Yoga",
      location: "Room 2",
      time: "1-2",
      days: "Mon, Wed, Fri",
      description: "Get all stretchy on a thin mat, Yo!",
      trainer: trainers[1]._id,
    },
    {
      name: "Boxing",
      location: "Room 4",
      time: "1-3",
      days: "Mon, Tues, Wed, Fri",
      description: "Get your bell rung when the bell rings!",
      trainer: trainers[2]._id,
    },
    {
      name: "Light Saber Training",
      location: "Rooms 3 & 6",
      time: "11-4",
      days: "Mon, Wed, Fri",
      description: "Learn to defend the galaxy against the vile sith!",
      trainer: trainers[3]._id,
    },
  ]);

  console.log("classes seeded");

  await Activity.deleteMany();

  const activities = await Activity.insertMany([
    {
      name: "Bench Press",
      units: "reps",
      description: "Making massive gains on some massive pecks",
    },
    {
      name: "Mile run",
      units: "time",
      description: "Cardio gains make me dizzy",
    },
    {
      name: "Saber Duel",
      units: "minutes",
      description: "Duel to see if you can beat your personal best time!",
    },
    {
      name: "Force Meditation",
      units: "Hours in trance",
      description:
        "Find the inner force user inside whos dying to show his/her face!",
    },
  ]);

  console.log("activities seeded");

  await Standing.deleteMany();

  const standings = await Standing.insertMany([
    {
      activity: activities[0]._id,
      member: members[1]._id,
      total: "400",
    },
    {
      activity: activities[1]._id,
      member: members[0]._id,
      total: "32 seconds",
    },
    {
      activity: activities[2]._id,
      member: members[2]._id,
      total: "4",
    },
    {
      activity: activities[3]._id,
      member: members[0]._id,
      total: "73",
    },
  ]);

  console.log("standings seeded");

  process.exit();
});
