var topolr=require("topolr-util");
var uglify=require("uglify-js");
try {
    var source=topolr.file(process.cwd() + "/src/topolr.js").readSync();
    var a=source.match(/\/\*[\w\W]*?\*\//),comments=null;
    if(a){
        var comment=a[0];
        var r=[];
        comment.split(/\r|\n/).forEach(function (b) {
            if(b){
                r.push(b);
            }
        });
        comments=r;
    }
    var result=uglify.minify(source, {
        fromString: true,
        mangle: true
    }).code;
    var hash=topolr.hash.md5(result);
    if(comments){
        comments.splice(comments.length-1,0," * md5 "+hash);
    }
    topolr.file(process.cwd() + "/dist/topolr.min.js").write((comments?comments.join("\r\n")+"\r\n":"")+result).done(function () {
        topolr.log("(color:green=> BUILT DONE,MD5:[{{hash}}])",{hash:hash});
    });
}catch(e){
    console.log(e.stack);
}
