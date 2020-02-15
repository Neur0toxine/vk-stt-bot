import { Router } from "express";
import vkwebhook from "./routes/vkwebhook";

export default () => {
  const app = Router();
  vkwebhook(app);

  return app;
};
