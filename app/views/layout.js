var Marionette=require('backbone.marionette')
var FormView=require('./form')
var ListView=require('./list')
const InputView=require('./input')
const NewListView=require('./newlist')
const _ = require('underscore')
const OutputView = require('./output')
const BoardModel = require('../models/board')

var Layout=Marionette.View.extend({
    template: _.template(require('../templates/layout.html').default),

    regions: {
        form: ".form",
        list: ".list",
        output_slot: ".output-slot",
        input_slot: ".input-slot",
        new_list: '.new-list'
    },

    collectionEvents: {
        add: "itemAdded"
    },

    initialize: function(options){
        this.collection = options.collection;
    },

    onRender: function(){
        const sharedModel = new BoardModel();

        var formView = new FormView({model: this.model});
        var listView= new ListView({collection: this.collection});
        var inputView = new InputView({model: sharedModel})
        var outputView = new OutputView({model: sharedModel})
        // var newlistView = new NewListView()

        this.showChildView('form', formView);
        this.showChildView('list', listView);
        // this.showChildView('board', boardView);
        this.showChildView('output_slot', outputView);
        this.showChildView('input_slot', inputView);
        this.showChildView('new_list', NewListView);
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