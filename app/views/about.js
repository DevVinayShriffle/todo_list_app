const { View } = require('backbone.marionette');
const _ = require('underscore');

const AboutView = View.extend({
  template: _.template('<h1>About Us</h1>')
});

module.exports=AboutView;