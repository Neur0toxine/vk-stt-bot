import { Service } from "typedi";

/**
 * AbstractTTS is a unified way to implement TTS services.
 */
export default abstract class AbstractTTSService {
  /**
   * Fetches audio and converts it to text
   *
   * @param audioUrl URL to audio
   *
   * @returns Promise<string>
   */
  public abstract async getTextFromAudio(audioUrl: string): Promise<string>;
}
