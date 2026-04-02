const Marionette=require('backbone.marionette');
const { template } = require('underscore');

const OutputView=Marionette.View.extend({
  template: template(require('../templates/output.html').default),

  modelEvents: {
    'change:mytext': 'render'
  }
})

module.exports=OutputView;