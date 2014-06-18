myApp.ScriptLoader = {

    parseScriptLibrary: function(jsLibs) {
        var result;
        var loaded_check;
        var success_callback;
        var site;

        for (var i = jsLibs.length - 1; i >= 0; i--) {
            loaded_check = jsLibs[i].loaded_check;
            site = jsLibs[i].site;
            success_callback = jsLibs[i].success_callback
            result = this.checkScripts(site, loaded_check, success_callback);
            if (result) {
                break;
            } //Load success, no need to continue.
            console.log('Failed to load site: ' + site);
        };
    },

    checkScripts: function(source, loaded_check, success_callback) {

        if (!loaded_check()) {
            return this.getScript(source, success_callback);
            console.log('checkScripts: return true');
        }
        console.log('checkScripts: return false');
        return false;
    },
    //"//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
    // window.jQuery 

    getScript: function(source, success_callback) {
        var fileRef = document.createElement('script')
        fileRef.setAttribute("type", "text/javascript");
        fileRef.setAttribute("src", source);
        myApp.DevHelper.console_log("adding fileref: " + source);

        if (typeof fileRef != "undefined")
            try {

                var xhrObj = new window.XMLHttpRequest();
                // open and send a synchronous request
                xhrObj.open('GET', source, false);
                xhrObj.send();
                // add the returned content to a newly created script tag
                var se = document.createElement('script');
                se.type = "text/javascript";
                se.text = xhrObj.responseText;
                document.getElementsByTagName("head")[0].appendChild(fileRef);
                // IE
                console.log(typeof success_callback);
                if (typeof success_callback != 'undefined') {
                    fileRef.onreadystatechange = function() {
                        if (fileRef.readyState === 'loaded' || fileRef.readyState === 'complete') {
                            fileRef.onreadystatechange = null;
                            success_callback();
                        }
                    };
                    // others
                    fileRef.onload = function() {
                        success_callback();
                    }
                }
            } catch (e) {
                console.log("caught error: " + e);
                return false;
            }
        return true;
    }

};