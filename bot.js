import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import * as yadadamean from "./commands/yadadamean.js";

config();

// const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

function readyDiscord() {
  console.log("Ready");
}
async function handleInteraction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === "yadadamean") {
    await yadadamean.execute(interaction);
  }
}

client.once(Events.ClientReady, readyDiscord);

client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, handleInteraction);
