import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Waiting connection to database . . .");

  mongoose
    .connect(process.env.DB_URL)
    .then(console.log("MongoAtlas DB has connected!"))
    .catch((err) => console.log(`an error has occured: ${err}`));
};

export default connectDatabase
