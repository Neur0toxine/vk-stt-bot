export default interface IAttachment {
  type: string;
  photo?: object;
  video?: object;
  audio?: object;
  doc?: object;
  link?: object;
  market?: object;
  market_album?: object;
  wall?: object;
  wall_reply?: object;
  sticker?: object;
  gift?: object;
}
