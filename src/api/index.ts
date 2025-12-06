// src/api/index.ts
import serverless from "serverless-http";
import mongoose from "mongoose";
import app from "../app";
import { connectDB } from "../config/db";

const handler = serverless(app);

// Export a function Vercel can call. On cold start, ensure DB is connected.
export default async function (req: any, res: any) {
  try {
    if (mongoose.connection.readyState === 0) {
      // connectDB should await mongoose.connect and resolve when connected
      await connectDB();
    }
    // pass the request to the serverless handler
    return handler(req, res);
  } catch (err) {
    console.error("Error in function handler:", err);
    res.statusCode = 500;
    return res.end("Internal server error");
  }
}
