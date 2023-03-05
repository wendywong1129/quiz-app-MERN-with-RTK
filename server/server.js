import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import connect from "./database/conn.js";
import router from "./routes/route.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

app.use("/api", router);

const port = process.env.PORT || 8080;

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid Database Connection");
  });
