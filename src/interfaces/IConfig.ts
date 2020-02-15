export enum BotMode {
  MODE_POLLING = "polling",
  MODE_WEBHOOK = "webhook"
}

export interface IConfig {
  botMode: BotMode;
  port: number;
  logLevel: string;
  webhookRoute: string;
}
