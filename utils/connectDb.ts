import mongoose from "mongoose"


const url = process.env.MONGO_URI

async function connectDb() {
    if (!url){
        console.log("Kindly add a connection string to .env.local")
        return ;
    }
    await mongoose.connect(url)
    console.log("Server Connected successfully")
}

export default connectDb;