/**
 * @packet test;
 * @template template.temp;
 * @style style.qq;
 */
Module({
    name:"test",
    extend:"view",
    className:"mt-test",
    template:"@temp.test",
    style:"@qq",
    init:function () {
        this.render();
    }
});