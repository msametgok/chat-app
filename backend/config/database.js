import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected');
        return conn;
    } catch (error) {
        console.log('Connection Error: ', error);
        process.exit(1);
    }
}

export default connectDB;