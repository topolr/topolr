var topolr=require("topolr-util");
var base=require("./../main");
base.copySourceTo(require("path").resolve(__dirname,"./../topolr.js"));
base.copyMiniTo(require("path").resolve(__dirname,"./../topolr.min.js"));
topolr.log("(color:11=> build done !)");