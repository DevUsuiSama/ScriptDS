/*
 * Created on Sun Jul 23 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

import { ENVIRONMENT } from "../../env/environment";
import ModelDiscord from "../models/discord.model";

export default class URLUtil {
  static Server(modelDiscord: ModelDiscord): string {
    return (
      ENVIRONMENT.URL +
      "/guilds/" +
      modelDiscord.server +
      "/channel/" +
      modelDiscord.channel +
      "/messages/"
    );
  }

  static Channel(modelDiscord: ModelDiscord): string {
    return ENVIRONMENT.URL + "/channels/" + modelDiscord.channel + "/messages/";
  }

  static Avatar(author: string, avatar: string): string {
    const URL_AVATAR = ENVIRONMENT.URL_AVATAR.replace(/\$1/g, author);
    return URL_AVATAR.replace(/\$2/g, avatar);
  }

  static MessageBefore(modelDiscord: ModelDiscord): string {
    return (
      ENVIRONMENT.URL +
      "/channels/" +
      modelDiscord.channel +
      "/messages?before=" +
      modelDiscord.message
    );
  }
}
