/*
 * Created on Thu Jul 20 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

export default class DateUtil {
  static FormatDate(date: string): string {
    const DATE: Date = new Date(date);
    return DATE.toLocaleString();
  }
}
