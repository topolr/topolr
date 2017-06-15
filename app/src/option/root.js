/**
 * @packet option.root;
 * @require test;
 */
Option({
    name:"test",
    option:{
        override:{
            onendinit:function () {
                this.addChild({
                    type:"@test.test2"
                });
            }
        }
    }
});