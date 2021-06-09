const db = require('../config/database');
const util = require("../libraries/util");
 
 exports.findAll = async (search, size = 10, skip = 0) => {
   let result = [];
   if(util.isEmpty(search)||search === undefined){
    result = await this.findByNoFilter(size, skip);
  }else if(util.isNif(search) || util.isAgency(search) || util.isAccount(search)){
      const field = util.isNif(search) ? 'nif' : util.isAgency(search) ? 'agency' : 'account';
    result = await this.findAllBySimpleField(field,search, size, skip);
  }else{
    result = await this.findAllByFilterFilds(search, size, skip);
  }
  return result;  
 };

 exports.findById = async (id) => {
    const result = await db.query('SELECT * FROM favorites WHERE id = $1',[id]);
    return result.rows.length>0? result.rows[0]:{};
  };

 exports.findByNoFilter = async (size, skip) => {
  const count = await db.query('SELECT count(id) FROM vw_favorites');
  const result = await db.query('SELECT * FROM vw_favorites offset $1 limit $2',[skip, size]);
  return util.paginate(count.rows[0].count,result.rows,skip,size);
};

 exports.findAllBySimpleField = async (field, search, size, skip) => {
  const count = await db.query('SELECT count(id) FROM vw_favorites WHERE '+field+' = $1',[search]);
  const result = await db.query('SELECT * FROM vw_favorites WHERE '+field+' = $1 offset $2 limit $3',[search,skip, size]);
  return util.paginate(count.rows[0].count,result.rows,skip,size);
};


 exports.findAllByFilterFilds = async (search, size, skip) => {
  const likeParam = '%' + search + '%';
  const count = await db.query("SELECT count(id) FROM vw_favorites WHERE name like $1 OR nif like $1 OR agency like $1 OR account like $1 ",[likeParam]);
  const result = await db.query("SELECT * FROM vw_favorites WHERE name like $1 OR nif like $1 OR agency like $1 OR account like $1 offset $2 limit $3 ",[likeParam, skip, size]);

  return util.paginate(count.rows[0].count,result.rows,skip,size);
};

 exports.create = async (favorite) => {
  await db.query(
    'INSERT INTO favorites (name, nif, email, agency, agencyDigit, account, accountDigit, bankCode, accountTypeCode, status, createdat, updatedat)'+ 
    'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, current_date, current_date)',
    [favorite.name, 
      favorite.nif, 
      favorite.email,
      favorite.agency,
      favorite.agencyDigit,
      favorite.account,
      favorite.accountDigit,
      favorite.bankCode,
      favorite.accountTypeCode,
      favorite.status]
  );
  
};

exports.update = async (favorite) => {

  await db.query('UPDATE favorites SET name = $1, nif = $2, email = $3,  agency = $4,  agencyDigit = $5,  account = $6,  accountDigit = $7,  bankCode = $8,  accountTypeCode = $9, status = $10   WHERE id = $11', 
  [favorite.name, 
    favorite.nif, 
    favorite.email,
    favorite.agency,
    favorite.agencyDigit,
    favorite.account,
    favorite.accountDigit,
    favorite.bankCode,
    favorite.accountTypeCode,
    favorite.status,
    favorite.id]);
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

 

 
 