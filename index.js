//definir as bibliotecas
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
//quando estiver pronto registre
client.on("ready", ()=>console.log("READY"));
//define o "package" de boas vindas
const welcome = require("./welcome");
welcome(client);
//inicia o bot
client.login(config.TOKEN);

//Nota:
/*

Este é o arquivo config.json

 "TOKEN"           ... é o token do seu bot 
 "CHANNEL_WELCOME" ... é o id do chat onde o bot vai mandar a mensagem de bem-vindo
 "ROLES_WELCOME"   ... são todos os IDs de cargo que você deseja adicionar ao usuário quando ele entrar no servidor, deve ser um array e pode ser ilimitado!


{
  "TOKEN":  "",
  "CHANNEL_WELCOME": "",
  "ROLES_WELCOME": ["",""]
}

*/
