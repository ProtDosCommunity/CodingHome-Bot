// Require the slash command builder
const { SlashCommandBuilder } = require('@discordjs/builders');
// Export as a module for other files to require()
module.exports = {
  data: new SlashCommandBuilder() // command details
    .setName('help')
    .setDescription('Get a list of all availible commands.'),
  async execute(interaction) { // command functions
    const exampleEmbed = {
      color: 3508175,
      title: 'Help Menu',
      author: {
        name: 'CodingHome Bot',
        icon_url: 'https://i.ibb.co/rcd3Kf8/Getty-Images-1187502812-1024x683.jpg',
      },
      description: 'Find information about the availible (/) commands.\n\u200b',
      fields: [
        {
          name: '-ˏˋ. **commands** ˊˎ-',
          value: ' ',
          inline: false,
        },
        {
          name: '**/help**',
          value: '```Displays this help menu.```',
        },
        {
          name: '**/challenge**',
          value: '```Manually checks if it has been 1 day since the last daily challenge was posted, and triggers the automatic daily challenge release system.```',
          inline: false,
        },
      ],
      image: {
        url: 'https://i.ibb.co/Swg933V/Group-3.png',
      },
      timestamp: new Date().toISOString(),
      footer: {
        text: 'CodingHome',
        icon_url: 'https://i.ibb.co/rcd3Kf8/Getty-Images-1187502812-1024x683.jpg',
      },
    };

    return interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
  },
};
