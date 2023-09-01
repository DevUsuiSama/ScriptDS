/*
 * Created on Thu Jul 20 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

export default class RuntimeUtil {
  static Sleep(ms: number): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
