const db = require('../config/database');
const postgresMigration = require('postgres-migrations');

exports.migrate = async (req, res) => {
 
  try {
  
    const dbConfig = {
      database: process.env.TRANFEERA_WS_DATABASE,
      user: process.env.TRANFEERA_WS_USER,
      password: process.env.TRANFEERA_WS_PASS,
      host: process.env.TRANFEERA_WS_HOST,
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