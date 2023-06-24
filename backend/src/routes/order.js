import Order from "../models/orderModel";
import express from "express";

const router = express.Router();

router
  .post("/", async (req, res) => {
    try {
      const { name, price, products, businessID, customerID, billingAddress } =
        req.body;
      // Create a new order instance
      const order = new Order({
        name,
        price,
        products,
        businessID,
        customerID,
        billingAddress,
      });

      // Save the order to the database
      const savedOrder = await order.save();

      res.status(201).json(savedOrder);
    } catch (error) {
      res.status(500).json({ error: "Failed to create order" });
      console.error(error);
    }
  })

  .get("/orders", async (req, res) => {
    try {
      const { businessID } = req.query;

      let orders;
      if (businessID) {
        orders = await Order.find({ businessID });
      }
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
      console.error(error);
    }
  })

  .delete("/order/:id", async (req, res) => {
    try {
      const { id } = req.params;
      // Find the order by its ID and remove it
      const deletedOrder = await Order.findByIdAndRemove(id);

      if (!deletedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }

      res.json(deletedOrder);
    } catch (error) {
      res.status(500).json({ error: "Failed to delete order" });
      console.error(error);
    }
  });

export default router;
