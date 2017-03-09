var topolr=require("topolr-util");
module.exports={
    getSourceCode:function () {
        return topolr.file("./src/topolr.js").readSync();
    },
    getMiniCode:function () {
        return topolr.file("./dist/topolr.min.js").readSync();
    },
    copySourceTo:function (path) {
        return topolr.file("./src/topolr.js").copyTo(path);
    },
    copyMiniTo:function (path) {
        return topolr.file("./dist/topolr.mini.js");
    }
};