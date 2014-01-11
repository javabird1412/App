// Scripte 

function sayhello() {
	alert('Hallo Grossmeister!');
};	

function install() {
    //ev.preventDefault();
    // define the manifest URL
    var manifest_url = "http://javabird1412.github.io/App/manifest.webapp";
    alert(manifest_url);
    // install the app
    var myapp = navigator.mozApps.install(manifest_url);
    myapp.onsuccess = function(data) {
      // App is installed, remove button
      this.parentNode.removeChild(this);
    };
    myapp.onerror = function() {
      // App wasn't installed, info is in this.error.name
      console.log('Install failed, error: ' + this.error.name);
     };
 };
  // get a reference to the button and call install() on click
  //var button = document.getElementById('install');
  //button.addEventListener('click', install, false);
