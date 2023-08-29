// Require the slash command builder
const { SlashCommandBuilder } = require('@discordjs/builders');
// Export as a module for other files to require()
module.exports = {
  data: new SlashCommandBuilder() // command details
    .setName('challenge')
    .setDescription('Manually triggers the automatic daily challenge release system.'),
  async execute(interaction) { // command functions
    // index.js
const dailyChallenge = require('../index.js');

// Call the function
dailyChallenge();
    const exampleEmbed = {
      color: 3508175,
      title: 'Manual Trigger Successful',
      description: '```The automatic daily challenge system will check if it has been 1 day since the last challenge was posted.```',
      timestamp: new Date().toISOString(),
      footer: {
        text: 'CodingHome',
        icon_url: 'https://i.ibb.co/rcd3Kf8/Getty-Images-1187502812-1024x683.jpg',
      },
    };

    return interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
  },
};
