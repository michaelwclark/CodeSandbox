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