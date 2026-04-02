const Marionette=require('backbone.marionette');
const Backbone=require('backbone')
const { template } = require('underscore');

const Item = Marionette.View.extend({
    tagName: 'li',
    template: template(require('../templates/item.html').default)
});

const List = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: Item
})

const collection = new Backbone.Collection([
    {text: 'Some Text 1', url: '/items/1'},
    {text: 'Some Text 2', url: '/items/2'}
])

const NewListView = new List({collection: collection});

module.exports=NewListView;