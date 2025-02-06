const {app, BrowserWindow, ipcMain } = require('electron');

const path = require('path');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 400,
        transparent: true,
        frame: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
};

app.whenReady().then(() => {
    createWindow();
});

ipcMain.on('close', () => {
    mainWindow.close();
})
