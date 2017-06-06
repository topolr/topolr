/**
 * @packet service.test;
 */
Module({
    name:"testservice",
    extend:"privateservice",
    autodata:true,
    init:function(){
        this.data={
            name:""
        };
    }
});