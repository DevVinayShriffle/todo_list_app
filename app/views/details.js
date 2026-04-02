const Marionette=require('backbone.marionette');
const { template } = require('underscore');

const RowView=Marionette.View.extend({
  tagName: 'tr',
  template: template(require('../templates/row.html').default)
});

const TableView=Marionette.CollectionView.extend({
  tagName: 'table',
  template: template(require('../templates/table.html').default),

  childView: RowView,
  childViewContainer: 'tbody'
})

module.exports=TableView;