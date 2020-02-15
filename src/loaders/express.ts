import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "../api";
import HTTPError from "../components/HTTPError";
import ExpressLogger from "./../services/ExpressLogger";
import { Container } from "typedi";

export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   */
  app.get("/status", (req: express.Request, res: express.Response) => {
    res.status(200).end();
  });

  app.head("/status", (req: express.Request, res: express.Response) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable("trust proxy");

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Some sauce that always add since 2014
  // "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
  // Maybe not needed anymore ?
  app.use(require("method-override")());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Load API routes
  app.use("/", routes());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new HTTPError("Not Found", 404);
    next(err);
  });

  app.use(
    (err: any, req: express.Request, res: express.Response, next: Function) => {
      const status: number = err.statusCode || 500;
      const logger: ExpressLogger = Container.get(ExpressLogger);
      logger.logRequest(req, status, err.message);
      res.status(status);
      res.json({
        success: false,
        error: err.message
      });
    }
  );
};
