var Marionette=require('backbone.marionette')
var FormView=require('./form')
var ListView=require('./list')
var BoardView=require('./board')
const _ = require('underscore')

var Layout=Marionette.View.extend({
    template: _.template(require('../templates/layout.html').default),

    regions: {
        form: ".form",
        list: ".list",
        board: ".board",
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
        var boardView= new BoardView();

        this.showChildView('form', formView);
        this.showChildView('list', listView);
        this.showChildView('board', boardView);
    },

    childViewEvents: {
        'add:todo:item': 'onAddTodoItem'
    },

    onAddTodoItem: function(childView){
        console.log("Form UI values:", childView.ui.assignee.val(), childView.ui.text.val());

        this.model.set({
            assignee: childView.ui.assignee.val(),
            text: childView.ui.text.val()
        },{validate: true});

        if(this.model.isValid()){
            var items=this.model.pick('assignee', 'text');
            this.collection.add(items);

            this.model.set(this.model.defaults);
        }else{
            console.log('validation failed');
            
        }

    },
})

module.exports=Layout;