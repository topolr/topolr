#!/usr/bin/env node
var topolr=require("topolr-util");
var commander=topolr.commander();
[
    require("./cmd/version"),
    require("./cmd/source")
].forEach(function (a) {
    var command=a.command, desc=a.desc, paras=a.paras, fn=a.fn;
    commander.bind(command,desc,paras,fn);
});
commander.call(process.argv.slice(2));