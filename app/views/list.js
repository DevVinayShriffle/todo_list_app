var Backbone = require('backbone')
var Marionette = require('backbone.marionette')
var _ = require('underscore')


var ToDo = Marionette.View.extend({
  tagName: 'li',
  template: _.template(require('../templates/todoitem.html').default)
});

var TodoList = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: ToDo,
  onRender: function () {
    console.log('ListView rendered with items:', this.collection.length);

  }
})

module.exports = TodoList;