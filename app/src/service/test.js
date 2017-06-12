/**
 * @packet service.test;
 */
Module({
    name:"testservice",
    extend:"privateservice",
    autodata:true,
    init:function(){
        this.data={
            name:"",
            list:[]
        };
    },
    action_name:function (name) {
        this.data.name=name;
    },
    action_add:function (name) {
        this.data.list.push({
            name:name
        });
    }
});