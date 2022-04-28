import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { MONGO_KEY } from "./config.js";
import emailRouters from "./routers/emails.js";

async function main() {
  const app = express();

  app.use(express.json({ limit: "50mb" }));
  app.use(cors());

  app.use("/email_submitter_api", emailRouters);

  mongoose.connect(MONGO_KEY, () => {
    app.listen(5001, () => {
      console.log("Server running on port 5001");
      console.log("MongoDB Connected");
    });
  });
}

main().catch((e) => console.log(e));
