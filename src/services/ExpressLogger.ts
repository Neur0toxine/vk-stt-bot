import { Request } from "express";
import { Logger } from "winston";
import { Service, Inject } from "typedi";

@Service()
export default class ExpressLogger {
  constructor(@Inject("logger") private logger: Logger) {}

  public logRequest(req: Request, status: number, message: string) {
    this.logger.info(
      `[${req.ip}] ${req.method} "${req.url}" ${status} ${message}`
    );
  }
}
