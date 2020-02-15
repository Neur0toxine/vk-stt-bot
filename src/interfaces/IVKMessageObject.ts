import IAttachment from "./IAttachment";

export default interface IVKMessageObject {
  id: number;
  date: number;
  peer_id: number;
  from_id: number;
  text?: string;
  random_id?: number;
  ref?: string;
  ref_source?: string;
  attachments?: Array<IAttachment>;
  important: boolean;
  geo?: object;
  payload?: string;
  keyboard?: object;
  fwd_messages?: Array<IVKMessageObject>;
  reply_message?: IVKMessageObject;
  action?: object;
}
