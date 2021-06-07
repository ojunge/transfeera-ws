const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// ==> Rotas da API:
const migrationRoute = require('./routes/migration.routes');
const accountsTypeRoute = require('./routes/accountstype.routes');
const banksRoute = require('./routes/banks.routes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/migration/', migrationRoute);
app.use('/accountsType/', accountsTypeRoute);
app.use('/banks/', banksRoute);


module.exports = app;

app.listen(2164);


//http://localhost:2164/accountsType
//http://localhost:2164/banks
