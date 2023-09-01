/*
 * Created on Thu Jul 20 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

export default class Style {
  private _style!: HTMLStyleElement;

  constructor() {
    this.style = document.createElement("style");
    this.style.textContent = `
    body {
      margin: 0;
      background-color: black;
    }

    .ds-sidebar {
      margin: 10px;
      padding: 10px;
      font-family: monospace;
      background-color: black;
    }

    .ds-content-scroller {
      margin: 10px;
      padding: 10px;
      font-family: monospace;
      background-color: black;
      overflow: auto;
      height: 400px;
      width: 400px;
      /* border: 1px solid cyan; */
      /* border-radius: 5px; */
    }

    .ds-content {
      display: flex;
      gap: 10px;
      padding: 10px;
      background-color: #252423;
      color: white;
      border: 1px solid #2C2C2C;
      border-radius: 5px;
    }

    .ds-avatar {
      border: 1px solid #484848;
      border-radius: 5px;
    }
    `;
  }

  public get style(): HTMLStyleElement {
    return this._style;
  }

  public set style(value: HTMLStyleElement) {
    this._style = value;
  }
}
