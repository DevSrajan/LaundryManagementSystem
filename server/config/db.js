
import mongoose, { connect } from "mongoose";
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
     // useCreateIndex: true,
      //dbName: 'loundb' // Specify your database name here
    });
    console.log("Database Connected.");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
