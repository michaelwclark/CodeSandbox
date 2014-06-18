myApp.ScriptLoader = {

    parseScriptLibrary: function(jsLibs) {
        var result;
        var callback;
        var site;

        for (var i = jsLibs.length - 1; i >= 0; i--) {
            callback = jsLibs[i].callback;
            site = jsLibs[i].site;
            result = this.checkScripts(site, callback);
            if (result) {
                break;
            } //Load success, no need to continue.
            console.log('Failed to load site: ' + site);

        };
    },

    checkScripts: function(source, callback) {

        if (!callback()) {
            return this.getScript(source);
        }
        return false;
    },
    //"//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
    // window.jQuery 

    getScript: function(source) {
        var fileRef = document.createElement('script')
        fileRef.setAttribute("type", "text/javascript");
        fileRef.setAttribute("src", source);
        myApp.DevHelper.console_log("adding fileref: " + source);

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