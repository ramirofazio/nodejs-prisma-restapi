import express from "express";
import categoriesRoutes from "./routes/categories.routes.js";
import productsroutes from "./routes/products.routes.js";

const app = express();

app.use(express.json());

app.use("/api", productsroutes);
app.use("/api", categoriesRoutes);

app.listen(3000);
console.log("server on port", 3000);
