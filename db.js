import mongoose from "mongoose";



const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}


export default connect