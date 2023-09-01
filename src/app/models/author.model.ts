/*
 * Created on Sun Jul 23 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

export default class AuthorModel {
  private _id!: string;
  private _username!: string;
  private _global_name!: string;
  private _avatar!: string;

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get global_name(): string {
    return this._global_name;
  }

  public set global_name(value: string) {
    this._global_name = value;
  }

  public get avatar(): string {
    return this._avatar;
  }

  public set avatar(value: string) {
    this._avatar = value;
  }
}
