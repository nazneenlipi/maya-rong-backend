import dotenv from "dotenv";

dotenv.config();

const config = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || 5000,
  database_url: process.env.MONGO_URI,
};

export default config;
