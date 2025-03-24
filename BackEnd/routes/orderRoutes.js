const express = require("express");
const Order = require("../model/order");

const router = express.Router();

router.post("/create-order", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Failed to place order", error });
  }
});

module.exports = router;
