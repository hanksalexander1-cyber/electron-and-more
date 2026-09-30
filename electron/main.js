const {app, BrowserWindow} = require("electron") //import app and browserwindow from electron app

function createWindow(){
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        icon: "sunny.png"
    });
    win.loadFile("index.html");
    win.removeMenu();
}
app.whenReady().then(() =>{
    createWindow();
    app.on("activate", () => {
        if(BrowserWindow.getAllWindows.length === 0) {
            createWindow();
        }
    })
})

app.on("window-all-closed", ()=> {
    if (process.platform !== "darwin"){
        app.quit();
    }
})