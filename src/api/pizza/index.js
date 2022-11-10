const express = require("express");
const router = express.Router();
const controller = require("./pizza.controller");
const verifyToken = require("../core/validate.token");

router.post("/add", (req, res, next) => verifyToken(req, res, next), controller.addPizzaItem);
router.post("/", (req, res, next) => verifyToken(req, res, next),  controller.getMenu);
router.put("/update/:id", (req, res, next) => verifyToken(req, res, next),  controller.updateItem);
router.post("/delete/:id", (req, res, next) => verifyToken(req, res, next),  controller.deleteItem);
router.get("/:id", (req, res, next) => verifyToken(req, res, next),  controller.getMenuById)

module.exports = router;
