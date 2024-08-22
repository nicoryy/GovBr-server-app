import dotenv from "dotenv";
import express from "express";

import connectDatabase from "./src/db/db.js";

import userRoute from "./src/routes/user.route.js";

dotenv.config();

connectDatabase();

const app = express();

app.use(express.json());
app.use("/user", userRoute);

app.listen(process.env.PORT, () =>
  console.log("Server is runnig on port 3000")
);
