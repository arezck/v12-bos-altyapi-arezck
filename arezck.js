//--\\
const Discord = require('discord.js');
const client = new Discord.Client();
//--\\

//--\\
const fs = require('fs');
const ms = require('ms')
const AsciiTable = require('ascii-table')
//--\\

//--\\
const config = require('./arezck.json')
const { sahip, token } = require('./arezck.json')
require('./util/eventHandler.js')(client);
client.login(token)
//--\\

//--\\
client.arez = {
    başarılı: "#66FF00",
    başarısız: "#FF0000",
    prefix: "!",
    ünlem: "<a:unlem:821085126091735090>",
    ok: "<a:okee:810110613186543627>",
    hayır: "<a:hayir:821647058694832169>",
    evet: "<a:evett:821646077383540747>",
    hayırr: "<a:hayirr:811134331866578974>",
    load: "",
    loading: ""
}
//--\\

//--\\
const { Database } = require('wio.db');
const wdb = new Database("ÂrézCK");

const qdb = require('quick.db')
//--\\

//--\\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdirSync('./Âréz.CK Codes').forEach(dir => {
const commandFiles = fs.readdirSync(`./Âréz.CK Codes/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./Âréz.CK Codes/${dir}/${file}`);
  var table = new AsciiTable('ArezCK Command Table');
  table.setHeading("Komut", 'Durum', "Ekstra")
  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  table.addRow(komutcuklar.help.name, "✔️", komutcuklar.conf.aliases)
} else {
  table.addRow(komutcuklar.help.name, "❌")
  continue;
    }
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });
  }
})
//--\\

//--\\
client.elevation = message => {
    if(!message.guild) {
      return; }
    let permlvl = 0;
    if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 1;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
    if (message.author.id === message.guild.owner.id) permlvl = 5;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 6;
    if (message.author.id === sahip ) permlvl = 7;
    return permlvl;
  };
//--\\