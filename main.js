const {app, BrowserWindow} = require('electron')

function createWindow() {
  window = new BrowserWindow({width: 800, height: 600});
  window.loadFile('index.html');
}

function call_python(){
  var python = require('child_process').spawn('python', ['./test_selenium.py']);
  python.stdout.on('data',function(data){
      console.log("data: ",data.toString('utf8'));
  });
}

function login(){
  var login = document.getElementById('login').value();
  var senha = document.getElementById('senha').value();
  console.log(login + senha)
  if (login == 'aaa' && senha == '123'){
    call_python()
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
