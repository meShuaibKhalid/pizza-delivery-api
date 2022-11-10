const express = require("express");
const router = express.Router();
const controller = require("./order.controller");
const verifyToken = require("../core/validate.token");

router.post("/add", (req, res, next) => verifyToken(req, res, next) , controller.addOrderItem);
router.post("/" , (req, res, next) => verifyToken(req, res, next),  controller.getOrders);
router.put("/update/:id", (req, res, next) => verifyToken(req, res, next) , controller.updateOrder);
router.post("/delete/:id", (req, res, next) => verifyToken(req, res, next) , controller.deleteOrder);
router.get("/:id", (req, res, next) => verifyToken(req, res, next) , controller.getOrderDeatils)
module.exports = router;
