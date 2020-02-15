import { Container } from "typedi";
import LoggerInstance from "./logger";
import config from "../config";

export default () => {
  try {
    Container.set("config", config);
    LoggerInstance.info("✌️ Config injected into container");

    Container.set("logger", LoggerInstance);
    LoggerInstance.info("✌️ Logger injected into container");

    return { Logger: LoggerInstance };
  } catch (e) {
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
};
