 const db = require('../config/database');
 
 exports.findAll = async (req, res) => {
   const response = await db.query(
     'SELECT * FROM banks ORDER BY code ASC',
   );
   res.status(200).send(response.rows);
 };

 

 
 