var main=require("./../../main");
var topolr=require("topolr-util");
module.exports= {
    command: "version",
    desc: "show topolr library version",
    paras: [],
    fn: function (parameters, cellmapping, allmapping) {
        topolr.log("(color:11=> version is {{a}})",{a:main.getInfo().version});
    }
};