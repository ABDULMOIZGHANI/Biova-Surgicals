require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/index.js");
const Product = require("./model/product.model.js");
const Blog = require("./model/blog.js");
const orderRoutes = require("./routes/orderRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());

const cityDeliveryFees = [
  { name: "Karachi", deliveryFee: 200 },
  { name: "Lahore", deliveryFee: 250 },
  { name: "Islamabad", deliveryFee: 300 },
  { name: "Rawalpindi", deliveryFee: 250 },
  { name: "Peshawar", deliveryFee: 300 },
  { name: "Quetta", deliveryFee: 350 },
  { name: "Faisalabad", deliveryFee: 250 },
  { name: "Multan", deliveryFee: 275 }
];

app.get("/api/delivery/cities", (req, res) => {
  res.json({ cities: cityDeliveryFees });
});

connectDB()
  .then(() => {
    app.use("/api/orders", orderRoutes);
    app.use("/api/contact", contactRoutes);

    // BLOG API ENDPOINTS
    app.get("/api/all_blogs", (req, res) => {
      Blog.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.post("/api/add_blog", async (req, res) => {
      Blog.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    // PRODUCTS API ENDPOINTS
    app.get("/api/product_details", (req, res) => {
      Product.find(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.post("/api/add_product_details", async (req, res) => {
      Product.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    });

    app.listen(8000, () => {
      console.log("SERVER IS RUNNING");
    });
  })

  .catch((err) => {
    console.log("MongoDB connection error", err);
  });
