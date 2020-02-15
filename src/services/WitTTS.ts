import { Service, Inject } from "typedi";
import { Logger } from "winston";
import AbstractTTS from "./AbstractTTS";

@Service()
export default class WitTTSService extends AbstractTTS {
  constructor(@Inject("logger") private logger: Logger) {
    super();
  }

  public async getTextFromAudio(audioUrl: string): Promise<string> {
    const data = await fetch(audioUrl);

    return new Promise<string>((resolve: Function, reject: Function) => {
      reject("Not implemented yet");
    });
  }
}
