if (!window.jQuery) {
    getScript("//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");

}

function getScript(source) {
    var fileRef = document.createElement('script')
    fileRef.setAttribute("type", "text/javascript");
    fileRef.setAttribute("src", source);
    
    if (typeof fileRef != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileRef);    
}
