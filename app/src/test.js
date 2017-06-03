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
    autodom:true,
    init:function () {
        this._data={name:"aa"};
        this.render(this._data);
    },
    bind_add:function (dom) {
        this._data.name=dom.cache()+1;
        this.update(this._data);
    },
    bind_data:function (dom) {
        this._data.name=dom.val();
        this.update(this._data);
    }
});