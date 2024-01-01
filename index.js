console.log("Hello from Electron")
const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      autoHideMenuBar: true,
      //frame:false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })

    win.loadFile('index.html')
  }

  app.on('window-all-closed', () => {
    console.log("Closing the application windows/linux ")
    if (process.platform !== 'darwin') app.quit()
  })

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      console.log("Starting application on mac")
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })