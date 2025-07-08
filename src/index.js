import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});






/*

import express from "express"
const app = express()
;(async () => {
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${{DB_NAME}}`)
    app.on("error",(error) => {
      console.log("Error: " , error); 
      throw error
    })
    
    app.listen(process.env.PORT,() => {
      console.log(`App is listening on port ${process.env.PORT}`);
    })

  } catch (error){
    console.error("ERROR: ",error)
    throw err
  }
})()

*/