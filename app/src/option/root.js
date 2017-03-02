/**
 * @packet option.root;
 * @require demo;
 */
Option({
    name:"site",
    option:{
        override:{
            onendinit:function () {
                this.addChild({
                    type:"@demo.main"
                });
            }
        }
    }
});