const db = require('../config/database');
const util = require("../libraries/util");
 
 exports.findAll = async (search, size = 10, skip = 0) => {
   let result = [];
   if(util.isEmpty(search)||search === undefined){
    result = await this.findByNoFilter(size, skip);
  }else if(util.isNif(search) || util.isAgency(search) || util.isAccount(search)){
      const field = util.isNif(search) ? 'nif' : util.isAgency(search) ? 'agency' : 'account';
    result = await this.findAllBySimpleField(field,search);
  }else{
    result = await this.findAllByFilterFilds(search);
  }
  return result;  
 };

 exports.findById = async (id) => {
    const result = await db.query('SELECT * FROM favorites WHERE id = $1',[id]);
    return result.rows;
  };

 exports.findByNoFilter = async (size, skip) => {
  const count = await db.query('SELECT count(id) FROM vw_favorites');
  console.log(count)
  const result = await db.query('SELECT * FROM vw_favorites');
  return util.paginate(count.rows[0].count,result.rows,skip,size);
};

 exports.findAllBySimpleField = async (field, search) => {

  const result = await db.query(
    'SELECT * FROM vw_favorites WHERE '+field+' = $1',
    [search],
  );
  return result.rows;
};


 exports.findAllByFilterFilds = async (search) => {

  const likeParam = '%' + search + '%';
  const result = await db.query(
    "SELECT * FROM vw_favorites WHERE name like $1 OR nif like $1 OR agency like $1 OR account like $1",
    [likeParam],
  );
  return result.rows;
};

 exports.create = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const result = await db.query(
    'INSERT INTO favorites (product_name, quantity, price) VALUES ($1, $2, $3)',
    [product_name, quantity, price],
  );

  res.status(201).send({
    message: 'Favorite added successfully!',
    body: {
      product: { product_name, quantity, price },
    },
  });
};

exports.update = async (req, res) => {
  const favoriteId = parseInt(req.params.id);
  const { product_name, quantity, price } = req.body;

  await db.query('UPDATE favorites SET product_name = $1, quantity = $2, price = $3 WHERE favoriteId = $4',[product_name, quantity, price, favoriteId]);
  return true;
};

exports.updateEmail = async (id, email) => {
  await db.query('UPDATE favorites SET email = $1, WHERE id = $2',[email, id]);
  return true;
};

exports.delete = async (id) => {
  await db.query('DELETE FROM favorites WHERE id = $1', [id]);
  return true;
};

 

 
 