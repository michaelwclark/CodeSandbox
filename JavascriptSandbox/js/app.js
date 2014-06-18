window.onload = function() {

    dev_helper = myApp.DevHelper;
    script_loader = myApp.ScriptLoader;
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
};

//Register namespaces
var myApp = myApp || {}
dev_helper = myApp.DevHelper;
script_loader = myApp.ScriptLoader;

myApp.DevHelper = {
    console_log: function(out, obj) {
        console.log(out);
        var out = '';
        if (typeof obj != 'undefined') {
            for (var i in obj) {
                out += expand(' "{i}":: ');
                out += expand(' "{obj[i]}" ');
                console.log(eval(out));
            }
        }
    },

    // expand usage:
    // alert(eval(expand('say "{hello}"')))
    // var hello = "hello world";
    expand: function(string) {
        return '"' + string.replace(/"/g, '\\"').replace(/\{/g, '"+').replace(/\}/g, '+"') + '"';
    }
}

myApp.ScriptLoader = {

    parseScriptLibrary: function(jsLibs) {
        var result;
        var callback;
        var site;

        for (var i = jsLibs.length - 1; i >= 0; i--) {
            callback = jsLibs[i].callback;
            site = jsLibs[i].site;
            result = script_loader.checkScripts(site, callback);
            if (result) {
                break;
            } //Load success, no need to continue.
            console.log('Failed to load site: ' + site);

        };
    },

    checkScripts: function(source, callback) {

        if (!callback()) {
            return script_loader.getScript(source);
        }
        return false;
    },
    //"//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
    // window.jQuery 

    getScript: function(source) {
        var fileRef = document.createElement('script')
        fileRef.setAttribute("type", "text/javascript");
        fileRef.setAttribute("src", source);
        dev_helper.console_log("adding fileref: " + source);

        if (typeof fileRef != "undefined")
            try {
                document.getElementsByTagName("head")[0].appendChild(fileRef);
            } catch (e) {
                console.log("caught error: " + e);
                return false;
            }
        return true;
    }

};