import { mongoose } from "mongoose";
import  {DB_NAME}  from "../constants.js";
const URI = process.env.MONGODB_URI;
const ConnectDB  = async()=>{
    try {
       const connnectionInstance =  await mongoose.connect(`${URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST : ${connnectionInstance.connection.host}`)
    } catch (error) {
            console.log("MONGODB connection error", error); 
            process.exit(1)
    }
}

export default ConnectDB