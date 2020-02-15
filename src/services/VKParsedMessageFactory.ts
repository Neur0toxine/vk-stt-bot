import { Service, Inject } from "typedi";
import { isNil } from "lodash";
import IVKMessageObject from "../interfaces/IVKMessageObject";
import IVKWebhookData from "../interfaces/IVKWebhookData";

@Service()
export default class VKParsedMessageFactoryService {
  /**
   * Parse message and return parsed representation of it
   */
  public createParsedMessage(body: object): IVKMessageObject | null {
    const data = body as IVKWebhookData;

    if (isNil(data.object)) {
      return null;
    }

    return data.object as IVKMessageObject;
  }
}
