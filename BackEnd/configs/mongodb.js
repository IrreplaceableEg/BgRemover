import mongoose from "mongoose";

const connectDB = async()=>{

    mongoose.connection.on('connected',()=>{

        console.log('Mongodb conncect sucessfule');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/BgRemover`)
 
    
}
 export default connectDB;