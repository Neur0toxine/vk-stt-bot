import { Router, Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import { Logger } from "winston";
import { isNil } from "lodash";
import config from "../../config";
import VKParsedMessageFactoryService from "../../services/VKParsedMessageFactory";
import IVKMessageObject from "../../interfaces/IVKMessageObject";

const route = Router();

export default (app: Router) => {
  app.use(config.webhookRoute, route);

  route.post("/", async (req: Request, res: Response, next: NextFunction) => {
    const logger = Container.get("logger") as Logger;
    logger.debug("got message with body: %o", req.body);

    try {
      const parser: VKParsedMessageFactoryService = Container.get(
        VKParsedMessageFactoryService
      );
      const message: IVKMessageObject | null = parser.createParsedMessage(
        req.body
      );

      if (!isNil(message)) {
        logger.debug("message is parsed, see TODO");
      }

      /**
       *TODO
       * Create attachments parser service, it should return Array<VKAudioMessageItem>.
       * Create audio processor service, it should receive TTS and array from previous service,
       * then it should return Array<VKProcessedAudioMessageItem>.
       * Create response service, it should get previous array and answer everybody.
       */

      return res.status(200);
    } catch (e) {
      logger.error("🔥 error: %o", e);
      return next(e);
    }
  });
};
