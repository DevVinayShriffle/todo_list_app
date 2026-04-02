const { View } = require('backbone.marionette');
const _ = require('underscore');

// Example for HomeView (repeat for About, Help, Service)
const HomeView = View.extend({
  template: _.template('<h1>Welcome to Home Page</h1>')
});

module.exports=HomeView;