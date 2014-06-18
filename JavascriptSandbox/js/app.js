var mainCallback = myApp.Main.doJqueryStuff;
var jsLibs = [{ //if callback fails, script wil load. Always load with return false;
    site: 'js/test.js',
    loaded_check: function() {
        return false
    },
    success_callback: mainCallback
}, {
    site: '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
    //site: '//beta.intlcdn.net/js/libs/jquery/1.7.0/jquery.min.js',
    loaded_check: function() {
        return window.jQuery ? true : false
    },
    success_callback: mainCallback


}, { //if callback fails, script wil load. Always load with return false;
    site: 'js/test.js',
    loaded_check: function() {
        return true
    },
    success_callback: mainCallback

}];
myApp.ScriptLoader.parseScriptLibrary(jsLibs);