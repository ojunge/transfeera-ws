/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 04/03/2020
 * Author: Glaucia Lemos
 */

 const { Pool } = require('pg');
 const dotenv = require('dotenv');
 const { configDB } = require("./config");
 
 dotenv.config();
 
 // ==> Conexão com a Base de Dados:
 const pool = new Pool(configDB);
 
 pool.on('connect', () => {
   //console.log('Base de Dados conectado com sucesso!');
 });
 
 module.exports = {
   query: (text, params) => {
    //  console.log(text);
    //  if(params != undefined) 
    //  console.log(params); 
  return pool.query(text, params)
   
   },
 };