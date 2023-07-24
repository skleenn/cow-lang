const {SlashCommandBuilder} = require("@discordjs/builders");
const {MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("skips the current song"),
    execute: async ({client, interaction}) => {
        const queue = client.player.getQueue(interaction.guild);
        if (!queue){
            await interaction.reply("there is no song playing");
            return;
        }
        const currentSong = queue.current;
        queue.skip();
        await interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setDescription("skipped current song")
                    .setThumbnail(currentSong.thumbnail)
                
            ]
        })
    }
}