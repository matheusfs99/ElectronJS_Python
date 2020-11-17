# Integração de sistema desktop usando ElectronJS e Python
Este código é baseado no tutorial do site: https://www.ahmedbouchefra.com/using-python-with-electron-tutorial/

Foi incrementado ao tutorial um programa em python para automação web em selenium.


## Requisitos:
É preciso ter instalado o node.js e o Python;

Obs: O script python com selenium nacessita do navegador firefox.

## Preparando o Ambiente:
Instale o electron pelo npm com o comando:
```bash
  npm install --save-dev electron
```
Para rodar o script python com selenium instale o web-driver do selenium com o comando:
```bash
  npm install selenium-webdriver
```
E em seguida instale o selenium do python com o comando:
```bash
  pip install selenium
```
## Executando
Agora é só executar com o comando:
```bash
  npm start
```
que irá iniciar o programa electron e executar o script python
