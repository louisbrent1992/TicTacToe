// Connects the database to knex table management
const knex = require("../db/connection");
const tableName = "";

function list() {
   return knex(tableName).select("*");
}

module.exports = {
    list,
};