const Marionette=require('backbone.marionette')
const _ = require('underscore')

const BoardView=Marionette.View.extend({
  tagName: 'div',
  template: _.template(require('../templates/board.html').default),

  events: {
    'keyup .myinput': 'changeDiv',
  },

  changeDiv: function() {
    const text=this.$el.find('.myinput').val();
    this.$el.find('.mytext').text(text);
  }
})

module.exports=BoardView;