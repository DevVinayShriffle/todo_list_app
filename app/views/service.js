const { View } = require('backbone.marionette');
const _ = require('underscore');

const ServiceView = View.extend({
  template: _.template('<h1>Service</h1>')
});

module.exports=ServiceView;