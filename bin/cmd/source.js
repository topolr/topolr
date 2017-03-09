var main=require("./../../main");
var topolr=require("topolr-util");
module.exports= {
    command: "copy",
    desc: "copy the topolr to a new position\n"+
        topolr.logText("(color:white=>--min)")+" : copy the topolr( uglifyed ) to a new position",
    paras: ["path","min"],
    fn: function (parameters, cellmapping, allmapping) {
        var path=parameters[0],type=parameters[1];
        if(path) {
            if(type==="--min") {
                main.copyMiniTo(path+"/topolr.min.js");
                topolr.log("(color:11=> copy done !)");
            }else{
                main.copySourceTo(path+"/topolr.js");
                topolr.log("(color:11=> copy done !)");
            }
        }else{
            topolr.log("(color:11=> the first parameter should a real path)")
        }
    }
};