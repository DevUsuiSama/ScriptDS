/*
 * Created on Wed Jul 19 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

import DiscordModel from "../models/discord.model";
import RuntimeUtil from "../util/runtime.util";
import DiscordView from "../views/discord.view";
import URLUtil from "../util/url.util";
import MessageModel from "../models/message.model";

export default class DiscordController {
  private modelDiscord: DiscordModel;
  private viewDiscord: DiscordView;

  constructor(modelDiscord: DiscordModel, viewDiscord: DiscordView) {
    this.modelDiscord = modelDiscord;
    this.viewDiscord = viewDiscord;
  }

  async getMessages(): Promise<[MessageModel]> {
    const RESPONSE: Response = await fetch(
      URLUtil.MessageBefore(this.modelDiscord),
      {
        method: "GET",
        headers: {
          Authorization: this.modelDiscord.token,
          "Content-Type": "application/json",
        },
      }
    );
    const RESULTS: any = await RESPONSE.json();
    return RESULTS.map((obj: any) => Object.assign(new MessageModel(), obj));
  }

  async updateView(): Promise<void> {
    try {
      const MESSAGES: [MessageModel] = await this.getMessages();
      for (const MESSAGE of MESSAGES) {
        this.viewDiscord.render({
          index: MESSAGES.indexOf(MESSAGE),
          modelMessage: MESSAGE,
        });
        await RuntimeUtil.Sleep(50);
      }
    } catch (err) {
      console.error(err);
    } finally {
      console.log("[updateView] End of interaction...");
    }
  }
}
