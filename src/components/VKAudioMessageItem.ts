export default class VKAudioMessageItem {
  constructor(private peerId: string, private audioUrl: string) {}

  /**
   * getPeerId
   */
  public getPeerId() {
    return this.peerId;
  }

  /**
   * getAudioUrl
   */
  public getAudioUrl() {
    return this.audioUrl;
  }
}
