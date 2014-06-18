window.onload = function() {
    var myApp = myApp || {};

    var jsLibs = [{
        site: 'ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
        fn: function() {
            window.jQuery;
        }
    }, {
        site: '//beta.intlcdn.net/js/libs/jquery/1.7.0/jquery.min',
        fn: function() {
            window.jQuery;
        }
    }];
    myApp.ScriptLoader.parseScriptLibrary(jsLibs);

};

myApp.DevHelper = {
    function console_log(out, obj) {
        console.log(out);
        var out = '';
        if (typeof obj != 'undefined') {
            for (var i in obj) {
                out += expand(' "{i}":: '));
            out += expand(' "{obj[i]}" '));
        console.log(eval(out));
    }
}
}

// expand usage:
// alert(eval(expand('say "{hello}"')))
// var hello = "hello world";
function expand(string) {
    return '"' + string.replace(/"/g, '\\"').replace(/\{/g, '"+').replace(/\}/g, '+"') + '"';
}



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
}