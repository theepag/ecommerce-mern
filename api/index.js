const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: "*",
}))

const mongoose = require("mongoose");

const env = require("dotenv");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

 
env.config();

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("DB Connection is successfull"))
        .catch((err) => {
            console.log(err);
        });
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!"); 
});