/*
 * Created on Wed Jul 19 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

export default class DiscordModel {
  private _token!: string;
  private _author!: string;
  private _message!: string;
  private _channel!: string;
  private _server!: string;

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
  }

  public get author(): string {
    return this._author;
  }

  public set author(value: string) {
    this._author = value;
  }

  public get message(): string {
    return this._message;
  }

  public set message(value: string) {
    this._message = value;
  }

  public get channel(): string {
    return this._channel;
  }

  public set channel(value: string) {
    this._channel = value;
  }

  public get server(): string {
    return this._server;
  }

  public set server(value: string) {
    this._server = value;
  }
}
