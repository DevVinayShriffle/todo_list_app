const { View } = require('backbone.marionette');
const _ = require('underscore');

const HelpView = View.extend({
  template: _.template('<h1>Help</h1>')
});

module.exports=HelpView;