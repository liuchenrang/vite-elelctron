import { app, BrowserWindow, ipcMain, protocol, net } from 'electron';
import * as path from 'path';
let mainWindow: BrowserWindow | null;
import * as fs from 'fs';
import axios from 'axios';
console.log('NODE_ENV', process.env.NODE_ENV);
const url = require('url');
const indexFile = path.join('file:', __dirname, '/../renderer/index.html');
const fileUrl = new URL(indexFile).href;
/**
 *
 */

function createWindow(): BrowserWindow {
  // Create the browser window.
  let userWindow: null | BrowserWindow = new BrowserWindow({
    height: 900,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: false,
      webSecurity: false,
      allowRunningInsecureContent: true,
      // preload: path.join(__dirname, 'preload.js'),
    },
    width: 1600,
  });

  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, '../html/index.html'));
  if (process.env.NODE_ENV === 'development') {
    // userWindow.loadURL('http://127.0.0.1:3000');
    // userWindow.loadURL('https://mms.pinduoduo.com/chat-merchant/index.html?r=0.6717724803853746#/');
    userWindow.loadURL('https://opt.in2magic.cn/');
  } else {
    console.log('indexFile', fileUrl);
    userWindow.loadURL(fileUrl);
  }
  // Open the DevTools.
  userWindow.webContents.openDevTools();
  userWindow.webContents.on('dom-ready', () => {
    // let jsQueryPath = path.join(__dirname,'..','..','ui', 'jquery.js')
    // const jsQueryPathCode = fs.readFileSync(jsQueryPath).toString();
    // userWindow.webContents.executeJavaScript(jsQueryPathCode);

    // let jsQueryUiPath = path.join(__dirname,'..','..','ui', 'jquery-ui.min.js')
    // const jsQueryUiPathCode = fs.readFileSync(jsQueryUiPath).toString();
    // userWindow.webContents.executeJavaScript(jsQueryUiPathCode);

    // let jqUI = path.join(__dirname,'..','..','ui', './jquery-ui.min.css')
    // const css = fs.readFileSync(jqUI).toString();
    // mainWindow.webContents.insertCSS(css);
    if (userWindow) {
      let id = setInterval(async () => {
        if(userWindow){
          let dw = await userWindow.webContents.executeJavaScript(
            "document.getElementsByClassName('login').length",
          );
          if (dw === 0){
             dw = await userWindow.webContents.executeJavaScript(
              "document.getElementsByClassName('setting').length",
            );
          }
          if (dw > 0) {
            let jsPath = path.join(__dirname, '..', '..', 'ui', './uiDiv.js');
            const js = fs.readFileSync(jsPath).toString();
            userWindow.webContents.executeJavaScript(js);
            let uiCss = fs
              .readFileSync(
                '/Users/chen/IdeaProjects/jiuzhua-tool/dist/renderer/index.0717eaf8.css',
              )
              .toString();

            let uiJs = fs
              .readFileSync(
                '/Users/chen/IdeaProjects/jiuzhua-tool/dist/renderer/index.d3125424.js',
              )
              .toString();
             let code =` (()=>{
                ${uiJs}
              })()`
              if(mainWindow){
                mainWindow.webContents.insertCSS(uiCss);
                mainWindow.webContents.executeJavaScript(code);

              }
            if(id){
              clearInterval(id);
            }
          }
        }

      }, 1000);
      // let jsPath = path.join(__dirname, '..', '..', 'ui', './insert.js');
      // console.log('jsPathjsPathjsPathjsPathjsPathjsPathjsPathjsPath', jsPath);
      // const js = fs.readFileSync(jsPath).toString();
      // userWindow.webContents.executeJavaScript(js);
    }
  });
  // Emitted when the window is closed.
  userWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    userWindow = null;
  });
  return userWindow;
}
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.whenReady().then(() => {
  //   protocol.interceptHttpProtocol("http",(req,callback)=>{
  //     if(req.url.indexOf("chen") > -1){

  //       let urlInfo =  url.parse(req.url)
  //       let content = fs.readFileSync(urlInfo.pathname)
  //       let mime = null;
  //       if(urlInfo.pathname.indexOf(".js") > -1){
  //         mime = 'application/javascript';
  //       }
  //       if(urlInfo.pathname.indexOf(".css") > -1){
  //         mime = 'text/css; charset=utf-8';
  //       }

  //       // req.session = null;
  //       let response = {
  //         charset: 'utf-8',
  //         path: urlInfo.path,
  //         // session: req.session,
  //         url: req.url,
  //         headers: {
  //           'Content-Length':content.length,
  //           'Content-Typ': 'text/css; charset=utf-8',
  //         },
  //         method: req.method,
  //         data:content,
  //         statusCode: 200,
  //         uploadData: req.uploadData,
  //         mimeType:mime
  //       }
  //       callback(response)
  //       // callback({mimeType: 'text/html', data: new Buffer('<h5>回调响应</h5>')})
  //     }else{
  //         req.session = null;
  //         callback(req);
  //         // protocol.uninterceptProtocol('http');
  //       // axios(req)
  //       //   .then(function(response) {
  //       //     let resp:ProtocolResponse = {
  //       //         data:response.data,
  //       //         statusCode: response.status,
  //       //         url: req.url
  //       //     }
  //       //     callback(resp)
  //       // });
  //       // protocol.uninterceptProtocol('http');
  //     }
  //   })
  // const call = (req, callback) => {
  //   console.log('1');
  //   if (req.url.indexOf('chen') > -1) {
  //     let urlInfo = url.parse(req.url);
  //     let content = fs.readFileSync(urlInfo.pathname);
  //     let mime = null;
  //     if (urlInfo.pathname.indexOf('.js') > -1) {
  //       mime = 'application/javascript';
  //     }
  //     if (urlInfo.pathname.indexOf('.css') > -1) {
  //       mime = 'text/css; charset=utf-8';
  //     }

  //     // req.session = null;
  //     let response = {
  //       charset: 'utf-8',
  //       path: urlInfo.path,
  //       // session: req.session,
  //       url: req.url,
  //       headers: {
  //         'Content-Length': content.length,
  //         'Content-Typ': 'text/css; charset=utf-8',
  //       },
  //       method: req.method,
  //       data: content,
  //       statusCode: 200,
  //       uploadData: req.uploadData,
  //       mimeType: mime,
  //     };
  //     //@ts-ignore
  //     callback(response);
  //     // callback({mimeType: 'text/html', data: new Buffer('<h5>回调响应</h5>')})
  //   } else if (req.url.indexOf('profile') > -1) {
  //     axios
  //       .get(req.url, { responseType: 'arraybuffer' })
  //       .then(function (response) {
  //         callback({
  //           data: Buffer.from(response.data, 'binary'),
  //           headers: response.headers,
  //         });
  //       });
  //   } else {
  //     axios(req).then(function (response) {
  //       callback({
  //         data: Buffer.from(response.data),
  //         headers: response.headers,
  //         mimeType: response.headers['content-type'],
  //       });
  //     });
  //   }
  // };
  // protocol.interceptBufferProtocol('https', call);
  // protocol.interceptBufferProtocol('http', call);
});
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  console.log('get lock fial, do quit ');
  app.quit();
} else {
  app.on('second-instance', () => {
    // Print out data received from the second instance.
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore();
      }
      mainWindow.focus();
    }
  });

  // Create myWindow, load the rest of the app, etc...
  app.whenReady().then(() => {
    mainWindow = createWindow();
  });
}
app.on('activate', () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    mainWindow = createWindow();
  }
  if (BrowserWindow.getAllWindows().length === 0) {
    mainWindow = createWindow();
  }
});
ipcMain.on('asynchronous-message', function (event, arg) {
  console.log(arg); // prints "ping"
});
