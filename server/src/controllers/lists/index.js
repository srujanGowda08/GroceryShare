// server/src/controllers/lists/index.js
const create = require("./create");
const update = require("./update");
const deleteList = require("./delete");

module.exports = { create, update, delete: deleteList };
