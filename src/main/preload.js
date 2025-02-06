const {contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    // this basically signals that the method closeApp sends a close signal to the IPC
    closeApp: () => ipcRenderer.send('close'),
});
