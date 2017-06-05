/**
 * @packet service.test;
 */
Module({
    name:"testservice",
    extend:"privateservice",
    init:function(){
        this.data={
            name:""
        };
    }
});