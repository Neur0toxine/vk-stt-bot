import { Application } from "express";
import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyInjector";

export default async ({ expressApp }: { expressApp: Application }) => {
  const { Logger } = await dependencyInjectorLoader();
  Logger.info("✌️ Dependency Injector loaded");

  await expressLoader({ app: expressApp });
  Logger.info("✌️ Express loaded");
};
