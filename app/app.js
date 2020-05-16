const { app, BrowserWindow } = require('electron')

function createWindow () {
	let mainWindow = new BrowserWindow({
		width: 300,
		height: 460,
		icon:'app/icon.png',
		webPreferences: {
		  nodeIntegration: true
		}
	  });
	mainWindow.loadFile('./app/index.html');
	mainWindow.setMenuBarVisibility(false);
	mainWindow.setResizable(false);
}
app.whenReady().then(createWindow);