//backbone model
var StackModel = Backbone.Model.extend({
    defaults: {
        title: null,
        instructor: null,
        language: null,
    },
    initialize: function(){
        this.set("instructor", "Micheal Choi");
    }
});

//instantiate models
var Stack1 = new StackModel();
Stack1.set("title", "Python Stack");
Stack1.set("language", "python");
console.log(Stack1);

var Stack2 = new StackModel();
Stack2.set("title", "MEAN Stack");
Stack2.set("language", "javascript");
console.log(Stack2);

var Stack3 = new StackModel();
Stack3.set("title", "C# Stack");
Stack3.set("language", "C#");
console.log(Stack3);