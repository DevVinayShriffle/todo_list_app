const Marionette=require('backbone.marionette')
const _ = require('underscore')

const BoardView=Marionette.View.extend({
  tagName: 'div',
  template: _.template(require('../templates/board.html').default),

  events: {
    'click .mybutton': 'alertBox',
  },

  alertBox: function() {
    alert("You have clicked on mybtn click")
  }
})

module.exports=BoardView;