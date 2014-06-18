var jsLibs = [{ //if callback fails, script wil load. Always load with return false;
    site: 'js/test.js',
    callback: function() {
        return false
    }
}, {
    site: '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
    //site: '//beta.intlcdn.net/js/libs/jquery/1.7.0/jquery.min.js',
    callback: function() {
        return window.jQuery ? true : false
    }

}, { //if callback fails, script wil load. Always load with return false;
    site: 'js/test.js',
    callback: function() {
        return true
    }
}];
myApp.ScriptLoader.parseScriptLibrary(jsLibs);