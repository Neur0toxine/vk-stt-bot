export default class VKProcessedAudioMessageItem {
  constructor(private peerId: string, private responseText: string) {}

  /**
   * getPeerId
   */
  public getPeerId() {
    return this.peerId;
  }

  /**
   * getResponseText
   */
  public getResponseText() {
    return this.responseText;
  }
}
