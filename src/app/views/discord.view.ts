/*
 * Created on Wed Jul 19 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

import Style from "../assets/style";
import ContentScrollerComponent from "../components/content-scroller.component";
import MessageInterface from "../interfaces/messages.interface";

export default class DiscordView {
  private style!: Style;
  private contentScrollerComponent!: ContentScrollerComponent;

  constructor(body: HTMLElement) {
    this.style = new Style();
    this.contentScrollerComponent = new ContentScrollerComponent();
    body.appendChild(this.style.style);
    body.appendChild(this.contentScrollerComponent.scroller);
  }

  render(value: MessageInterface): void {
    this.contentScrollerComponent.update(value);
  }
}
