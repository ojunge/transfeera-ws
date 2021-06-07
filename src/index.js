const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// ==> Rotas da API:
const migrationRoute = require('./routes/migration.routes');
const accountsTypeRoute = require('./routes/accountstype.routes');
const banksRoute = require('./routes/banks.routes');
const favoritesRoute = require('./routes/favorites.routes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/migration/', migrationRoute);
app.use('/accountsType/', accountsTypeRoute);
app.use('/banks/', banksRoute);
app.use('/favorites/', favoritesRoute);


module.exports = app;

app.listen(2164);


