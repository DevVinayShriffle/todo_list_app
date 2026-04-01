var Marionette=require('backbone.marionette')
var FormView=require('./form')
var ListView=require('./list')
const _ = require('underscore')

var Layout=Marionette.View.extend({
    template: _.template(require('../templates/layout.html').default),

    regions: {
        form: ".form",
        list: ".list"
    },

    collectionEvents: {
        add: "itemAdded"
    },

    initialize: function(options){
        this.collection = options.collection;
    },

    onRender: function(){
        var formView = new FormView({model: this.model});
        var listView= new ListView({collection: this.collection});

        this.showChildView('form', formView);
        this.showChildView('list', listView);
    },

    onChildviewAddTodoItem: function(){
        var formView=this.getChildView('form');
        console.log("Form UI values:", formView.ui.assignee.val(), formView.ui.text.val());

        this.model.set({
            assignee: formView.ui.assignee.val(),
            text: formView.ui.text.val()
        },{validate: true});

        if(this.model.isValid()){
            var items=this.model.pick('assignee', 'text');
            this.collection.add(items);

            this.model.set(this.model.defaults);
            // formView.render();
        }else{
            console.log('validation failed');
            
        }

    },

    // itemAdded: function(){
    //     this.model.set({
    //         assignee:'',
    //         text:''
    //     })
    // }
})

module.exports=Layout;