var Backbone=require('backbone')
var Marionette=require('backbone.marionette');
var TodoView=require('./views/layout')
var ToDoModel=require('./models/todo')

var initialData = [
  {assignee: 'Scott', text: 'Write a book about Marionette'},
  {assignee: 'Andrew', text: 'Do some coding'}
];

var App=new Marionette.Application({
  region: "#app-hook"
})

App.on('start', function(){
  // console.log("Initial data passed to the App:", initialData);
  var todo=new TodoView({
    collection: new Backbone.Collection(initialData),
    model: new ToDoModel()
  });

  this.showView(todo);
})

App.start({initialData: initialData});