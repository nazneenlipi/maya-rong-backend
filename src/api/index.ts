// api/index.ts
import serverless from "serverless-http";

import { connectDB } from "../config/db";
import app from "../app";

connectDB(); 
export default serverless(app);
