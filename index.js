const express = require("express");
const userRouter = require("./routes/users.route")
const productRouter = require("./routes/products.route")

const app = express();

app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(4000, (err) => {
  console.log("🚀 server listening on http://localhost:4000");
});
