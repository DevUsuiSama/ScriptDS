/*
 * Created on Mon Jul 24 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

export default class SidebarComponent {
	private _sidebar!: HTMLDivElement;

	constructor() {
		this._sidebar = document.createElement("div");
	}

	update(): void {

	}

	public get sidebar(): HTMLDivElement {
		return this._sidebar;
	}

	public set sidebar(value: HTMLDivElement) {
		this._sidebar = value;
	}
}
