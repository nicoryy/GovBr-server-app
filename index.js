import dotenv from "dotenv";
import express from "express";

import connectDatabase from "./src/db/db.js";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();

connectDatabase();

const app = express();

app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(process.env.PORT, () =>
  console.log("Server is runnig on port 3000")
);
