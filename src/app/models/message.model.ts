/*
 * Created on Sun Jul 23 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

import Author from "./author.model";

export default class MessageModel {
  private _id!: string;
  private _author!: Author;
  private _channel_id!: string;
  private _content!: string;
  private _edited_timestamp!: string | null;
  private _timestamp!: string;

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get author(): Author {
    return this._author;
  }

  public set author(value: Author) {
    this._author = value;
  }

  public get channel_id(): string {
    return this._channel_id;
  }

  public set channel_id(value: string) {
    this._channel_id = value;
  }

  public get content(): string {
    return this._content;
  }

  public set content(value: string) {
    this._content = value;
  }

  public get edited_timestamp(): string | null {
    return this._edited_timestamp;
  }

  public set edited_timestamp(value: string | null) {
    this._edited_timestamp = value;
  }

  public get timestamp(): string {
    return this._timestamp;
  }

  public set timestamp(value: string) {
    this._timestamp = value;
  }
}
