/**
 * @packet option.root;
 * @template template.temp;
 */
Module({
    name:"navsfixed",
    extend:"view",
    className:"navsfixed",
    template:"@temp.navsfixed",
    init:function () {
        var ths=this;
        var height=$(".fixedposition").height();
        this.render({
            logopath:sitePath+"assets/style/images/logo.png"
        });
        var nt=function () {
            if($("body").scrollTop()>height){
                ths.show();
            }else{
                ths.hide();
            }
        };
        $(window).bind("scroll",nt);
        nt();
    },
    show:function () {
        this.dom.addClass("navsfixed-in");
    },
    hide:function () {
        this.dom.removeClass("navsfixed-in");
    }
});
Option({
    name:"site",
    option:{
        override:{
            onendinit:function () {
                this.addChild({
                    type:"@.navsfixed"
                });
            }
        }
    }
});