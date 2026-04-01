var Backbone = require('backbone')
var Marionette = require('backbone.marionette');
var _ = require('underscore');
var ToDoModel = require('./models/todo')

var ToDo = Marionette.View.extend({
  tagName: 'li',
  template: _.template(require('./templates/todoitem.html').default)
})

var TodoList = Marionette.CollectionView.extend({
  template: _.template(require('./templates/todolist.html').default),

  childView: ToDo,
  childViewContainer: 'ul',

  ui: {
    assignee: '#id_assignee',
    form: 'form',
    text: '#id_text'
  },

  triggers: {
    'submit @ui.form': 'add:todo:item'
  },


  modelEvents: {
    change: 'render'
  },

  onAddTodoItem: function (view, event) {
    event.preventDefault();

    this.model.set({
      assignee: this.ui.assignee.val(),
      text: this.ui.text.val()
    });

    if (this.model.isValid()) {
      this.collection.add(this.model.pick('assignee', 'text'));
      this.model.set(this.model.defaults);
      this.ui.assignee.val();
      this.ui.text.val();
    }
  },
})

var todo = new TodoList({
  collection: new Backbone.Collection([
    { assignee: 'Scott', text: 'Write a book about Marionette.' },
    { assignee: 'Andrew', text: 'Do some coding' }
  ]),
  model: new ToDoModel()
})

var App = new Marionette.Application({
  region: "#app-hook"
})

App.on('start', function () {
  this.showView(todo);
  console.log("App started and view shown");
})

App.start();