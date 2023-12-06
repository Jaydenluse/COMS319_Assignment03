import express from "express";
import cors from "cors";
import Product from "./productModel.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

// POST route to add a product
app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET route to retrieve all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET route to retrieve a product by numeric ID
app.get("/products/:id", async (req, res) => {
  try {
    const productId = Number(req.params.id);
    const product = await Product.findOne({ id: productId });

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: "Error fetching product", error: error });
  }
});

app.put("/products/:id/update-price", async (req, res) => {
  const productId = req.params.id;
  const newPrice = req.body.newPrice;

  if (!newPrice || isNaN(newPrice)) {
    return res.status(400).json({ error: "Invalid price provided" });
  }

  try {
    const product = await Product.findByIdAndUpdate(
      productId,
      { $set: { price: newPrice } },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product price:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE route to delete a product by numeric ID
app.delete("/products/:id", async (req, res) => {
  try {
    const productId = Number(req.params.id);
    const product = await Product.findOneAndDelete({ id: productId });
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.send({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(500).send({ message: "Error deleting product", error: error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
