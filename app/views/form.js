var Marionette = require('backbone.marionette')
const _ = require('underscore')

var FormView = Marionette.View.extend({
  tagName: 'form',
  template: _.template(require('../templates/form.html').default),

  triggers: {
    'submit': {
      event: 'add:todo:item',
      preventDefault: true
    }
  },

  modelEvents: {
    change: 'render'
  },

  ui: {
    assignee: '#id_assignee',
    text: "#id_text"
  }
})

module.exports = FormView;