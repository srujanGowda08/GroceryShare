// server/src/utils/list.service.js
const List = require("../models/List");

module.exports = {
  createList: async (data) => {
    const list = new List(data);
    return await list.save();
  },

  getListsByUser: async (userId) => {
    return await List.find({ owner: userId });
  },

  updateList: async (listId, data) => {
    return await List.findByIdAndUpdate(listId, data, { new: true });
  },
};
