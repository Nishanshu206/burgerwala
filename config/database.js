import mongoose from "mongoose";

//Step 4 Coonection with database
export const connectDB=async()=>{

    const {connection} =await mongoose.connect(process.env.MONGO_URI);

    console.log(`Database is connected with ${connection.host}`)
}