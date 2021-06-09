const db = require('../config/database');
const util = require("../libraries/util");
const csv = require('csv-parser');
const fs = require('fs');
const postgresMigration = require('postgres-migrations');

exports.migrate = async (req, res) => {
 
  try {
   
    const results = [];

    const dbConfig = {
      database: "transfeeraws",
      user: "postgres",
      password: "mypass",
      host: "localhost",
      port: 5432,
    }
  
    await postgresMigration.createDb(dbConfig.database, {
      ...dbConfig,
      defaultDatabase: "postgres", // defaults to "postgres"
    })
    await postgresMigration.migrate(dbConfig, "migration")
   
    res.status(201).send({ message: 'Migrations criadas' });

  } catch (error) {
    res.status(500).send(error); 
  }

};