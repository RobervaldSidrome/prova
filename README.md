implementação node express persistindo os dados no firebase

passos: -possuir uma conta google -acessar: https://console.firebase.google.com/ -criar um novo projeto selecinando pais e dando um nome ao projeto.

-criar uma pasta no dir: "desktop" exemplo -nome da pasta do projeto. -abrir pasta no visual code -npm install -g express-generator nodemon -express --ejs "para trabalharmos com as views" -npm install (obs: deve ser feito antes de intalar o firebase.) -npm install -s firebase-admin

-instalado as dependencias ir no console do firebase -configurações -> contas de serviço (contem as chaves que nos permite chaves para que possamos ter as permissões necessárias para implementarmos nosso projeto) depois de configurado: rodar: npm install --save express-load (faz o carregamento automático, fazendo com que nao tenhamos morozidade em nosso projeto manipulando item por item, carregando e dando require nos controllers)
