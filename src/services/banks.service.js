const db = require('../config/database');
 
exports.findAll = async (search) => {
   const likeParam = '%' + search + '%';
    const result = await db.query('SELECT * FROM banks WHERE code like $1 OR name like $1 ORDER BY code ASC',[likeParam]);
  return result.rows;
};




