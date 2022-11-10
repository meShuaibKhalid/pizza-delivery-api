const pizza = require("./pizza.model");

const addPizzaItem = function (req, res) {
  return pizza.create(req.body).then((response) => {
    if (response._id) {
      return res.status(201).json({ message: "Added Successfully" });
    }
  });
};

const getMenu = async function (req, res) {
  const perPage = req.body.perPage; //10docs in single page
  const page = req.body.page; //1st page
  const totalCount = await pizza.collection.count();
  const data = await pizza
    .find()
    .skip(page > 0 ? (page - 1) * perPage : 0)
    .limit(perPage);
  if (data) {
    return res.status(200).json({ data, count: totalCount });
  }
};

const getMenuById = function (req, res) {
  return pizza.findById(req.params.id).then((response) => {
    if (response) {
      return res.status(200).json(response);
    }
  });
};

const updateItem = function (req, res) {
  return pizza.findByIdAndUpdate(req.params.id, req.body)
    .then((response) => {
      if (response) {
        return res.status(200).json({ message: "Updated Succesfully" });
      }
    });
};

const deleteItem = function (req, res) {
  return pizza.findByIdAndDelete(req.params.id).then((response) => {
    if (response) {
      return res.status(200).json({ message: "Deleted" });
    }
  });
};

const controller = {
  addPizzaItem,
  getMenu,
  deleteItem,
  updateItem,
  getMenuById
}

module.exports = controller;