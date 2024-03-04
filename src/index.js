import ConnectDB from "./db/index.js";

import dotenv from "dotenv";

dotenv.config({
    path : "./env"
})

ConnectDB()









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
