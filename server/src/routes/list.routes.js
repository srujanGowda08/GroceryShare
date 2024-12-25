// server/src/routes/list.routes.js
const express = require("express");
const router = express.Router();
const { create, update, delete: deleteList } = require("../controllers/lists");

router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteList);

module.exports = router;
