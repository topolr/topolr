var topolr=require("topolr-util");
module.exports={
    getSourceCode:function () {
        return topolr.file(__dirname+"/src/topolr.js").readSync();
    },
    getMiniCode:function () {
        return topolr.file(__dirname+"/dist/topolr.min.js").readSync();
    },
    copySourceTo:function (path) {
        return topolr.file(__dirname+"/src/topolr.js").copyTo(path);
    },
    copyMiniTo:function (path) {
        return topolr.file(__dirname+"/dist/topolr.mini.js");
    }
};