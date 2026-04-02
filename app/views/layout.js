var Marionette = require('backbone.marionette')
var FormView = require('./form')
var ListView = require('./list')
const InputView = require('./input')
const NewListView = require('./newlist')
const _ = require('underscore')
const OutputView = require('./output')
const BoardModel = require('../models/board')
const TableView = require('./details')
const DetailsCollection = require('../collections/details')
const DetailModel=require('../models/detail')

var Layout = Marionette.View.extend({
  template: _.template(require('../templates/layout.html').default),

  regions: {
    form: ".form",
    list: ".list",
    output_slot: ".output-slot",
    input_slot: ".input-slot",
    new_list: '.new-list',
    details_table: '.details-table'
  },

  collectionEvents: {
    add: "itemAdded"
  },

  initialize: function (options) {
    this.collection = options.collection;
  },

  onRender: function () {
    const sharedModel = new BoardModel();
    var details_collection = new DetailsCollection([
      { name: 'John', gender: 'male', nationality: 'uk', url: '/items/1' },
      { name: 'Sara', gender: 'female', nationality: 'Germany', url: '/items/2' },
    ])

    var detail_model=new DetailModel({total:30})

    var tableView = new TableView({ collection: details_collection, model: detail_model })
    var formView = new FormView({ model: this.model });
    var listView = new ListView({ collection: this.collection });
    var inputView = new InputView({ model: sharedModel })
    var outputView = new OutputView({ model: sharedModel })
    // var newlistView = new NewListView()

    this.showChildView('form', formView);
    this.showChildView('list', listView);
    // this.showChildView('board', boardView);
    this.showChildView('output_slot', outputView);
    this.showChildView('input_slot', inputView);
    this.showChildView('new_list', NewListView);
    this.showChildView('details_table', tableView);
  },

  childViewEvents: {
    'add:todo:item': 'onAddTodoItem'
  },

  onAddTodoItem: function (childView) {
    console.log("Form UI values:", childView.ui.assignee.val(), childView.ui.text.val());

    this.model.set({
      assignee: childView.ui.assignee.val(),
      text: childView.ui.text.val()
    }, { validate: true });

    if (this.model.isValid()) {
      var items = this.model.pick('assignee', 'text');
      this.collection.add(items);

      this.model.set(this.model.defaults);
    } else {
      console.log('validation failed');

    }

  },
})

module.exports = Layout;