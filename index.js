const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    icon: 'assets/img/icon.png',
    maximized: false,
    center: true,
    // frame: false,
    title: 'Feeler ECM',
    // autoHideMenuBar: true,
    movable: true,
    // backgroundColor: '#000'
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});