const {SlashCommandBuilder} = require("@discordjs/builders");
const {MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription("pauses the current song"),
    execute: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guild);
        if (!queue){
            await interaction.reply("there is no song playing");
            return;
        }

        queue.setPaused(true);

        await interaction.reply("the current song has been paused.")
    }
}