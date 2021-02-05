const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Product = require("../models/product");

router.post("/", [auth], async (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then(() => {
      res.status(200).json({ product: "product added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new product failed");
    });
});

router.post("/tracking", async (req, res) => {
  try {
    const product = await Product.findOne({ trackingId: req.body.trackingId });
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "product not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route Delete api/posts/:id
//description: this is going to delete a post
//access : Private
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Data not found" });
    }

    await product.remove();

    res.json({ msg: "Data removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(500).send("Server Error");
  }
});


router.post("/edit/:id", [auth], async (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (!product) res.status(404).send("product not found");
    else {
      product.name = req.body.name;
      product.description = req.body.description;
      product.location = req.body.location;
      product.trackingId = req.body.trackingId;
      product.arrivalDate = req.body.arrivalDate;
      res.status(200).json({ msg: "product updated", product });
      product.save();
    }
  });
});

module.exports = router;
