const db = require('../config/database');
 
exports.findAll = async () => {
    const result = await db.query('SELECT * FROM banks ORDER BY code ASC');
  return result.rows;
};




