
const express = require("express");
const app = express();

const categoriesRouter = require("./routes/categories");

// Middleware
app.use(express.json());

// Routes
app.use("/categories", categoriesRouter);

// Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
