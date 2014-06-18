myApp.ScriptLoader = {

    function parseScriptLibrary(jsLibs) {
        for (var lib in jsLibs) {
            checkScripts(lib.site, lib.fn);
        };
    }

    function checkScripts(source, func) {
        if (!func()) {
            getScript(source);
        }
    }
    //"//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
    // window.jQuery 

    function getScript(source) {
        var fileRef = document.createElement('script')
        fileRef.setAttribute("type", "text/javascript");
        fileRef.setAttribute("src", source);

        if (typeof fileRef != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileRef);
    }


}