const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('inserisci qui il token')

bot.once('ready', () => {
    console.log('Ciao, sono il bot ufficiale di Killer Boss Original');
    bot.user.setActivity('Scrivi help per aiuto', { type: 'PLAYING'});
});

var p = "!"

bot.on("message", (message) => {
    if (message.content == "ciao") {
        message.channel.send("Ciao!")
    }
});

bot.on('message', (message) =>{
    if (message.content == "orario"){
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();

        message.channel.send('Ora Attuale :alarm_clock:' + ' ' + ora + ':' + minuto);
    }
});
bot.on("message", (message) =>  {
    if (message.content == "Ciao") {
        message.channel.send("Ciao!")
    }
});
bot.on('message', (message) =>{
    if (message.content == "Orario"){
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();

        message.channel.send('Ora Attuale :alarm_clock:' + ' ' + ora + ':' + minuto);
    }
});
bot.on('message', (message) =>{
    if (message.content == "Invito") {
        message.channel.send("questo è il link d'invito: https://discord.com/api/oauth2/authorize?client_id=802916213579579454&permissions=8&scope=bot") 
    }
});
bot.on('message', (message) =>{
    if (message.content == "invito") {
        message.channel.send("questo è il link d'invito: https://discord.com/api/oauth2/authorize?client_id=802916213579579454&permissions=8&scope=bot") 
    }
});
bot.on('message', (message) =>{
    if (message.content == "ssc") {
        message.channel.send("SSC è un sottogruppo di FIUS alleato con SCP che si occupa di contenimento di emergenza o per soggetti troppo pericolosi per essere contenuti da SCP")
    }
});
bot.on('message', (message) =>{
    if (message.content == "Buongiorno") {
        message.channel.send("Buongiorno!")
    }
});
bot.on('message', (message) =>{
    if (message.content == "buongiorno") {
        message.channel.send("Buongiorno!")
    }
});
bot.on('message', (message) =>{
    if (message.content === p+`server`) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
});
bot.on('message', (message) =>{
    if (message.content === p+`user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});
bot.on('message', (message) =>{
    if (message.content == "Help") {
        message.channel.send("Ciao, sono il bot ufficiale di Killer Boss Original.\n Se vuoi aiuto entra in questo server: https://discord.gg/WrFPsQPPRj.\n Scrivi ciao per un saluto,\n orario per farti dire l'ora ma di inverno aggiungi un'ora per l'orario legale\n!server per info su questo server\n!user-info per le tue informazioni") 
    }
});
bot.on('message', (message) =>{
    if (message.content == "help") {
        message.channel.send("Ciao, sono il bot ufficiale di Killer Boss Original.\n Se vuoi aiuto entra in questo server: https://discord.gg/WrFPsQPPRj.\n Scrivi ciao per un saluto,\n orario per farti dire l'ora ma di inverno aggiungi un'ora per l'orario legale\n!server per info su questo server\n!user-info per le tue informazioni") 
    }
});
bot.on('message', (message) =>{
    if (message.content == "vuoi fare una partnership") {
        message.channel.send("Certo, contatta Killer Boss")
    }
})
bot.on('message', (message) =>{
    if (message.content == "vuoi fare una partnership?") {
        message.channel.send("Certo, contatta Killer Boss")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Partnership") {
        message.channel.send("Certo, contatta Killer Boss")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Vuoi fare una partnership") {
        message.channel.send("Certo, contatta Killer Boss")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Vuoi fare una partnership?") {
        message.channel.send("Certo, contatta Killer Boss")
    }
})
bot.on('message', (message) =>{
    if (message.content == "partnership") {
        message.channel.send("Certo, contatta Killer Boss")
    }
})
bot.on('message', (message) =>{
    if (message.content == "vai a cagare") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "va a cagare") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "vaffanculo") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "cazzo") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "shit") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "troia") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "hai rotto le palle") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "porco dio") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "sei una troia") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Sei una troia") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Vai a cagare") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Va a cagare") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Vaffanculo") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Cazzo") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Shit") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Troia") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Hai rotto le palle") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Porco dio") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "SEI UNA TROIA") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "VAI A CAGARE") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "VA A CAGARE") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "VAFFANCULO") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "CAZZO") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "SHIT") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "TROIA") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "HAI ROTTO LE PALLE") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "PORCO DIO") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "porca troia") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "Porca troia") {
        message.channel.send("modera le parole")
    }
})
bot.on('message', (message) =>{
    if (message.content == "PORCA TROIA") {
        message.channel.send("modera le parole")
    }
})