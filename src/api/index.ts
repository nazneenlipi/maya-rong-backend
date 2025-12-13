import { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../app";
import connectDB from "../utils/db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await connectDB();
  return app(req, res);
}
