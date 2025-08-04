import { SlashCommandBuilder } from "discord.js";
export const data = new SlashCommandBuilder()
  .setName("yadadamean")
  .setDescription("Testing hyphy bot");

export async function execute(interaction) {
  await interaction.reply("like whaaattttt");
}
