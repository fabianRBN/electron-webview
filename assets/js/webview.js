var os = require('os')

window.onresize = doLayout;

onload = () => {
  doLayout();
  // Topbar functions
  homeButton();
  printButton();
};

var rand = function() {
  return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
  return rand() + rand(); // to make it longer
};



function doLayout() {
  let webview = document.querySelector("webview");
  let hostname = os.hostname;
  webview.setAttribute('src','http://192.168.10.177:3000/?token='+token()+'&hostname='+hostname); 
/*   webview.setAttribute('src','http://192.168.10.177:8080'); */

  let windowWidth = document.documentElement.clientWidth;
  let windowHeight = document.documentElement.clientHeight;
  let controlsHeight = getControlsHeight();
  let webviewHeight = windowHeight - controlsHeight;

  webview.style.width = windowWidth + "px";
  webview.style.height = webviewHeight + "px";
}
