// ==UserScript==
// @name         DeleteMSG
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       UsuiSama
// @match        https://*.discord.com/app
// @match        https://*.discord.com/channels/*
// @match        https://*.discord.com/login
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

import DiscordController from "./controllers/discord.controller";
import DiscordModel from "./models/discord.model";
import DiscordView from "./views/discord.view";

function initializeModelDiscord(): DiscordModel {
    const MODEL_DISCORD: DiscordModel = new DiscordModel;
    MODEL_DISCORD.author = "";
    MODEL_DISCORD.message = "";
    MODEL_DISCORD.channel = "";
    MODEL_DISCORD.server = "";
    MODEL_DISCORD.token = "";
    return MODEL_DISCORD;
}

async function main() {
    try {
        const DISCORD_CONTROLLER: DiscordController = new DiscordController(
            initializeModelDiscord(),
            new DiscordView(document.body)
        );
        await DISCORD_CONTROLLER.updateView();
    } catch (err) {
        console.error(err);
    } finally {
        console.log("[main] End of interaction...");
    }
}

window.onload = main;

// async function getHistory(userId) {
//   const RESP = await fetch(
//     `https://discord.com/api/v9/channels/${CHANNEL_ID}/messages?before=${MESSAGE_ID}&limit=${LIMIT}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: TOKEN,
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const HISTORY = await RESP.json();
//   return HISTORY.filter((json) => json.author.id === userId);
// }

// async function deleteMessage(channelId, messageId) {
//   const RESP = await fetch(
//     `https://discord.com/api/v9/channels/${channelId}/messages/${messageId}`,
//     {
//       method: "DELETE",
//       headers: {
//         Authorization: TOKEN,
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const RESULT = await RESP.text();
//   return RESULT;
// }

// async function main() {
//   try {
//     const HISTORY = await getHistory(USER_ID);
//     console.log(HISTORY);
//     for (const _JSON of HISTORY) {
//       try {
//         const RESULT = await deleteMessage(_JSON.channel_id, _JSON.id);
//         console.log(
//           "%c" + RESULT + "\n",
//           "color: cyan; font-size: 20px;"
//         );
//       } catch (err) {
//         console.error(err);
//       }
//       await sleep(50);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }
