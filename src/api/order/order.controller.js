const order = require("./order.model");

const addOrderItem = function (req, res) {
  return order.create(req.body).then((response) => {
    if (response._id) {
      return res.status(201).json({ message: "Data Added Successfully" });
    }
  });
};

const getOrders = async function (req, res) {
  const perPage = req.body.perPage; //10docs in single page
  const page = req.body.page; //1st page
  const totalCount = await order.collection.count();
  const data = await order
    .find()
    .skip(page > 0 ? (page - 1) * perPage : 0)
    .limit(perPage);
  if (data) {
    return res.status(200).json({ data, count: totalCount });
  }
};

const updateOrder = function (req, res) {
  return order
    .findByIdAndUpdate(req.params.id, req.body)
    .then((response) => {
      if (response) {
        return res.status(200).json(response);
      }
    });
};

const deleteOrder = function (req, res) {
  return order.findByIdAndDelete(req.params.id).then((response) => {
    if (response) {
      return res.status(200).json({ message: "Deleted" });
    }
  });
};

const getOrderDeatils = function (req, res) {
  return order.findById(req.params.id).then((response) => {
    if (response) {
      return res.status(200).json(response);
    }
  });
};

const controller = {
  getOrderDeatils,
  deleteOrder,
  updateOrder,
  getOrders,
  addOrderItem
}

module.exports = controller;