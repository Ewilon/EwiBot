try {
var Discord = require ("discord.js");
} catch (e){
	console.log("AmberBot requires discord.js, and it's missing, please execute npm install discord.js");
	process.exit();
}

try {
	var AuthDetails = require("./config.json");
} catch (e){
	console.log("Config file is missing or incorrect! Did you properly rename config.json.example into config.json?");
	process.exit();
}

var bot = new Discord.Client();

bot.loginWithToken("Bot " + AuthDetails.token)

bot.on("message", function (message, server)

{
	if (message.content === "bite")
	{
		bot.sendMessage(message, "Plouf")
	}

	if (message.content === "!legs")
	{
		var legsnumber = Math.floor(Math.random() * 0)
		bot.sendFile(message, "./legs/" + legsnumber + ".png")
	}
	
	if (message.content === "!commandlist")
	{
		bot.sendMessage(message, "!commandlist : Show currently available commands\n!legs : Show a random legs picture :heart:")
	}
});
