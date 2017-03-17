var topolr=require("topolr-util");
var config=require("./package.json");
var uglify=require("uglify-js");
var comment=function (info) {
    var str="/**\r\n";
    for(var i in info){
        str+=" * "+i+":"+info[i]+"\r\n";
    }
    str+=" */\r\n";
    return str;
};
var main={
    getInfo:function () {
        return {
            version:config.version,
            desc:config.description,
            site:config.homepage,
            git:config.repository.url,
            author:config.author.name
        };
    },
    getBaseCode:function () {
        return topolr.file(__dirname+"/src/topolr.js").readSync().replace(/"\{\{topolrInfo\}\}"/g,JSON.stringify({version:config.version}));
    },
    getSourceCode:function () {
        var info=main.getInfo();
        var code=main.getBaseCode();
        info.hash=topolr.hash.md5(code);
        code=comment(info)+code;
        return code;
    },
    getMiniCode:function () {
        var info=main.getInfo();
        var code=main.getBaseCode();
        code=uglify.minify(code, {
            fromString: true,
            mangle: true
        }).code;
        info.hash=topolr.hash.md5(code);
        code=comment(info)+code
        return code;
    },
    copySourceTo:function (path) {
        return topolr.file(path).write(main.getSourceCode());
    },
    copyMiniTo:function (path) {
        return topolr.file(path).write(main.getMiniCode());
    }
};
module.exports=main;