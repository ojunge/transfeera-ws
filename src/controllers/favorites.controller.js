const service = require('../services/favorites.service');

 exports.findAll = async (req, res) => {
  const search = req.query.search;
  const result = await service.findAll(search);
  res.status(200).send(result);  
 };

 exports.create = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const response = await db.query(
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

exports.findById = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await service.findById(id);
  res.status(200).send(result);
};

exports.update = async (req, res) => {
  const favoriteId = parseInt(req.params.id);
  const { product_name, quantity, price } = req.body;

  const response = await db.query(
    'UPDATE favorites SET product_name = $1, quantity = $2, price = $3 WHERE favoriteId = $4',
    [product_name, quantity, price, favoriteId],
  );

  res.status(200).send({ message: 'Favorite Updated Successfully!' });
};

exports.updateEmail = async (req, res) => {
  const id = parseInt(req.params.id);
  const { email} = req.body;
  service.updateEmail(id,email);
  res.status(200).send({ message: 'Favorite Updated Successfully!' });
};

exports.delete = async (req, res) => {
  const id = parseInt(req.params.id);
  await service.delete(id); 
  res.status(200).send({ message: 'Favorite deleted successfully!', favoriteId });
};

 

 
 