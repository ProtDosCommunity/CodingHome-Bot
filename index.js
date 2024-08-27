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



var questions = {
  monday: "**Craft a program that generates a maze and allows the player to navigate through it.**\n\nDesign the maze using ASCII characters and create a system where the player can use commands like `w` (up), `a` (left), `s` (down), and `d` (right) to move through the maze. For bonus points, implement teleportation or hidden doors.\n\n*Example*: Help the adventurer navigate through this maze:\n```\n###############\n#S      #     #\n# ### # # ### #\n#   #   #   #E#\n###############\n```\n",

  tuesday: "**Build a script that analyzes a given website's HTML and lists the most frequently used HTML tags.**\n\nYour program should read a webpage's HTML source code, identify all the HTML tags, and then display the top 5 most commonly used tags along with their frequencies.\n\n*Example*: Analyze the HTML and identify the most used tags:\n```html\n<html>\n  <body>\n    <div>\n      <p>Hello</p>\n    </div>\n    <div>\n      <p>World</p>\n    </div>\n  </body>\n</html>\n```\n",

  wednesday: "**Develop a text-based RPG battle simulator that lets players fight monsters using spells and weapons.**\n\nCreate a system where players can choose attacks by typing commands like `cast fireball` or `swing sword`, and the simulator calculates the battle outcome. Make it even cooler by allowing players to level up and earn new abilities.\n\n*Example*: Prepare for battle!\n```\nYou encounter a fearsome dragon!\nYour options:\n1. Swing Sword\n2. Cast Fireball\n3. Use Healing Potion\n\nYour choice: 2\n\nYou cast a fiery Fireball at the dragon, dealing 25 damage!\nThe dragon retaliates, dealing 15 damage!\n```",

  thursday: "**Write a program that generates intricate fractal art using ASCII symbols.**\n\nDesign a recursive algorithm to create mesmerizing patterns like the Fibonacci Spiral or a Tree fractal. Enhance the art by experimenting with color palettes and symbol combinations to make it visually appealing.\n\n*Example*: Create an ASCII art of a Tree fractal:\n```\n       /\n      /\\/\n     /\\/\n    /\\/\n   /\\/\n  /\\/\n /\\/  \n/\\/   \n```\n",

  friday: "**Craft a program that converts a given date into its Roman numeral representation.**\n\nYour program should take a date (day, month, year) as input and output the corresponding date in Roman numerals. For an extra challenge, implement a reverse feature to convert Roman numerals back to dates.\n\n*Example*: Convert the date 'July 4, 1776' into Roman numerals:\n```\nInput: 07-04-1776\nOutput: VII-IV-MDCCLXXVI\n```",

  saturday: "**Design a calculator that performs arithmetic operations using Reverse Polish Notation (RPN).**\n\nCreate a calculator that reads input expressions like `3 4 + 5 *` and produces the correct result. Make sure to handle complex expressions with multiple operators and parentheses effectively.\n\n*Example*: Evaluate the RPN expression '3 4 + 5 *':\n```\nInput: 3 4 + 5 *\nOutput: 35\n```",

  sunday: "**Build a program that generates a random short story using predefined story elements.**\n\nDevelop a system where you define story components like characters, settings, and conflicts. Your program should then randomly combine these elements to produce unique short stories each time it's run.\n\n*Example*: Generate a random short story:\n```\nOnce upon a time, in the enchanted forest, a mischievous gnome encountered a talking squirrel. The squirrel challenged the gnome to a riddle contest, and the gnome accepted, hoping to win a legendary gem.\n```"
};


function yourFunction(){
      console.log("Today is at least 1 day past var x's date!");
      var day;
      switch (new Date().getDay()) {
        case 0:
          day = "sunday";
          break;
        case 1:
          day = "monday";
          break;
        case 2:
          day = "tuesday";
          break;
        case 3:
          day = "wednesday";
          break;
        case 4:
          day = "thursday";
          break;
        case 5:
          day = "friday";
          break;
        case 6:
          day = "saturday";
      }


      const exampleEmbed = {
        color: 0x0099ff,
        title: 'Coding Challenge of the Day!',
        author: {
          name: 'CodingHome bot',
          icon_url: 'https://cdn.discordapp.com/avatars/1107022280023871549/d0f7f613cb6bc669255d5b2474bf22a3.jpg'
        },
        description: 'Discuss your solutions in <#1107008201276280909>!',
        thumbnail: {
          url: 'https://i.imgur.com/zMTXVgS.png',
        },
        fields: [
          {
            name: 'Challenge:',
            value: questions[day],
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
