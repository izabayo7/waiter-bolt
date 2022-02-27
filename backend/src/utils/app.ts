import cors from "cors";
import express, { Express } from "express";
import routes from "../routes";

export default function app(): Express {
  const app = express();

  app.use(cors());

  app.use(express.json());


  routes(app);

  return app;
}
