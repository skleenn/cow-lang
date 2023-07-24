const {SlashCommandBuilder} = require("@discordjs/builders");
const {MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("exit")
        .setDescription("exits the vc"),
    execute: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guild);
        if (!queue){
            await interaction.reply("there is no song playing");
            return;
        }

        queue.destroy();

        await interaction.reply("why u bully me.")
    }
}