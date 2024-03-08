import ConnectDB from "./db/index.js";

import dotenv from "dotenv";
const PORT = process.env.PORT;
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

ConnectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Erorr : ", error);
      throw error;
    });

    app.listen(PORT || 8000, () => {
      console.log(`Server is running at port http://localhost:${PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!!", error);
  });

// import mongoose from "mongoose";
// const PORT = process.env.PORT;
// import express from "express";
// const app = express();
// import { DB_NANE } from "./constants";
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NANE}`);
//     app.on("errror", (error) => {
//       console.log("Error :", error);
//       throw error;
//     });

//     app.listen(PORT, () => {
//       console.log(`App is listen on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR", error);
//     throw error;
//   }
// })();
