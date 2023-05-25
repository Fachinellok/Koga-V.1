# Bot ae que estou tentando criar, pode usar se quiser

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Tomato6966/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Tomato6966/Ask-Me-Anything)
[![Support Server](https://img.shields.io/discord/591914197219016707.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/fS6qBSm)

Um bot de sistema de boas-vindas fácil de configurar e usar para Discord.js com o pacote `canvas`

Eu tenho tendência a abandonar projetos então bem provável que em algum momento isso aqui necessite de uma atualização e eu não atualize.

## Instalação / Como usar o bot

 **1.** Instale [node.js v12](https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode) ou mais alto

 **2.** Baixe este repositório e descompacte-o    |    ou git clone-o
 
 **3.** Instale todos os pacotes com **`npm install`**     |  os pacotes são   **`npm install node.js discord.js canvas`**
 
 **3.1** Preencha tudo em config.json
 
 **4.** inicie o bot com **`node index.js`**

### Como usar - index.js

```javascript
const Discord = require("discord.js");         //carrega a biblioteca Discord.js
const client = new Discord.Client();           //cria um novo Client
const config = require("./config.json");       //carrega em todos os arquivos de configuração
client.on("ready", ()=>console.log("READY"));  //log quando o bot estiver pronto
const welcome = require("./welcome");          //carrega o arquivo transcript.js
welcome(client);                               //chame o arquivo de transcrição com o cliente, o COMANDO e o máximo de mensagens a serem buscadas
client.login(config.TOKEN);                    //inicie o bot com seu token
```

### Como usar - config.json
- "TOKEN"           ... é o token do seu bot 
- "CHANNEL_WELCOME" ... é o id do chat onde o bot vai mandar a mensagem de bem-vindo
- "ROLES_WELCOME"   ... são todos os IDs de cargo que você deseja adicionar ao usuário quando ele entrar no servidor, deve ser um array e pode ser ilimitado!

```json
{
  "TOKEN":  "",
  "CHANNEL_WELCOME": "",
  "ROLES_WELCOME": ["",""]
}
```

#### **Nota:**

*Você pode editar a imagem de boas-vindas, mas certifique-se de que está no mesmo layout, caso contrário, irá atrapalhar o posicionamento, se você souber codificar com tela, poderá corrigir isso, caso contrário, sugiro que não altere o layout e não renomeie o arquivo de imagem*

*Se você está tendo erros/problemas ao iniciar, exclua o arquivo package.json e faça isso antes de instalar os pacotes `npm init`*

<br/>
  
> Se for usar esse código, se lembra de me dar os créditos blz?
