import dotenv from "dotenv";
import { IConfig, BotMode } from "../interfaces/IConfig";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config: IConfig = {
  botMode: (process.env.BOT_MODE as BotMode) || BotMode.MODE_POLLING,
  port: parseInt(process.env.PORT || "0", 10),
  logLevel: process.env.LOG_LEVEL || "silly",
  webhookRoute: process.env.WEBHOOK_ROUTE || "/webhook"
};

export default config;
