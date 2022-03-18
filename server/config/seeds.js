const db = require("./connection");
const { Member, Trainer } = require("../models");
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
  ]);

  console.log("trainers seeded");

  process.exit();
});
