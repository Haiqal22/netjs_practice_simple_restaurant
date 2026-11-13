
const express = require("express");
const { storeCategory } = require("../controllers/controllers");
const router = express.Router();

// routes
router.get("/", (req, res) => {
    res.send("Get route for categories");
});

module.exports = router;

router.post("/", storeCategory);