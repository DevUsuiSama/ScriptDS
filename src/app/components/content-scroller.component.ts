/*
 * Created on Sun Jul 23 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

import IMessage from "../interfaces/messages.interface";
import DateUtil from "../util/date.util";
import URLUtil from "../util/url.util";

export default class ContentScrollerComponent {
	private _scroller!: HTMLDivElement;

	constructor() {
		this._scroller = document.createElement("div");
		this._scroller.classList.add("ds-content-scroller");
	}

	update(value: IMessage): void {
		this._scroller.innerHTML = `
      <div class="ds-content">
        <div>
          <img class="ds-avatar" src="${URLUtil.Avatar(value.modelMessage.author.id, value.modelMessage.author.avatar)}" alt="avatar">
        </div>
        <div>
          <strong>[${value.index}][${DateUtil.FormatDate(value.modelMessage.timestamp)}]</strong>
          <br><br>
          <strong>id</strong>: ${value.modelMessage.author.id}<br>
          <strong>author</strong>: ${value.modelMessage.author.global_name}<br>
          <strong>content</strong>: ${value.modelMessage.content}<br>
        </div>
      </div><br>
      `;
	}

	public get scroller(): HTMLDivElement {
		return this._scroller;
	}

	public set scroller(value: HTMLDivElement) {
		this._scroller = value;
	}
}
