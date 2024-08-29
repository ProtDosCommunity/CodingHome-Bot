// Require necessary files
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents, EmbedBuilder, GuildManager } = require('discord.js');
const token = process.env['TOKEN'];
const channelId = process.env['CHANNEL_ID'];

// New client instance with specified intents
const client = new Client({intents: 512 | 1});

// Read commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

// Notify that the bot is online
client.once('ready', () => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});



// Dynamically execute commands
client.on('interactionCreate', async function(interaction){
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  console.log('--  /' + interaction.commandName + '  --')

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});



//initialize challenges into an array
const baseChallengePath = path.join(__dirname, 'dailyprogrammerchallenges');
var challengeFilePaths = [];
function readDirectory(directory){
	if(directory == baseChallengePath + "/LICENSE") return;
	prefix = directory.substring(directory.length-3);
	console.log("Prefix is: " + prefix);
	if(prefix == ".md"){
		challengeFilePaths.push(directory);
		return;
	}
	const subdirectories = fs.readdirSync(directory);
	for (const subdirectory of subdirectories){
		const fullSubdir = directory + "/" + subdirectory;
		readDirectory(fullSubdir);
	}
}

readDirectory(baseChallengePath);

function getRandomCodingChallenge(){
	const randomIndex = Math.floor(Math.random()*challengeFilePaths.length);
	const randomFilePath = challengeFilePaths[randomIndex];
	const challengeText = fs.readFileSync(randomFilePath);
	return challengeText.toString();
};


function yourFunction(){
      console.log("Today is at least 1 day past var x's date!");
      var day;


      const exampleEmbed = {
        color: 0x0099ff,
        title: 'Coding Challenge of the Day!',
        author: {
          name: 'CodingHome bot',
          icon_url: 'https://cdn.discordapp.com/avatars/1107022280023871549/d0f7f613cb6bc669255d5b2474bf22a3.jpg'
        },
        thumbnail: {
          url: 'https://i.imgur.com/zMTXVgS.png',
        },
        fields: [
          {
            name: 'Challenge:',
            value: getRandomCodingChallenge(),
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: 'New challenges appear each day!',
        },
      };
      client.channels.cache.get(channelId).send({embeds: [exampleEmbed]}).catch(console.error);
    };

var lastDay = 0;
function checkDate() {
      console.log("Checking date");
      // Get today's date
      var today = new Date();

      // Create a previous date (replace this with your own previous date)
      var x = new Date(lastDay);

      // Compare today's date with x
      var timeDifference = today.getTime() - x.getTime();
      var daysDifference = timeDifference / (1000 * 3600 * 24);

      if (daysDifference >= 1) {
        // Today is at least 1 day past x
	yourFunction(); // Replace `yourFunction` with the function you want to run
	      lastDay = today.getTime();
	}
}





function dailyChallenge() {
	setInterval(checkDate, 5000);
}
module.exports = dailyChallenge;

// Login to Discord
client.login(token).then(() => dailyChallenge());
