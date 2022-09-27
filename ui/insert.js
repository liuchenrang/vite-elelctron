var id = null;
 id = setInterval(()=>{

    if(document.getElementsByClassName('setting') && id ){
      if(!document.getElementById('rootTuotu')){
        var divUi = document.createElement('div')
        divUi.id = 'rootTuotu'
        document.body.appendChild(divUi)
         // includeLinkStyleUrl("/Users/chen/IdeaProjects/jiuzhua-tool/dist/renderer/index.0717eaf8.css")
      // includeLinkJsURL("/Users/chen/IdeaProjects/jiuzhua-tool/dist/renderer/index.e9f34be2.js")
      clearInterval(id)

      }




    }
},1000)
//  function includeLinkStyle(dir) {
//   const path = require('path')
//   const indexFile = path.join('file:',dir);
//   const fileUrl = new URL(indexFile).href;
//   var link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.type = "text/css";
//   link.href = fileUrl;
//   document.getElementsByTagName("head")[0].appendChild(link);
//  }


//  function includeLinkJs(dir) {
//   const path = require('path')
//   const indexFile = path.join('file:',dir);
//    const fileUrl = new URL(indexFile).href;
//    var s = document.createElement('script');
//    s.setAttribute('src', fileUrl);
//    s.setAttribute('type', 'text/javascript');
//    document.getElementsByTagName('head')[0].appendChild(s);
//  }

 function includeLinkJsURL(fileUrl) {
   var s = document.createElement('script');
   s.setAttribute('src', fileUrl);
   s.setAttribute('type', 'text/javascript');
   document.getElementsByTagName('head')[0].appendChild(s);
 }

 function includeLinkStyleUrl(fileUrl) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = fileUrl;
  document.getElementsByTagName("head")[0].appendChild(link);
 }



