const Marionette=require('backbone.marionette')
const _ = require('underscore')

const BoardView=Marionette.View.extend({
  tagName: 'div',
  template: _.template(require('../templates/board.html').default),

  ui: {
    content: '.mytext',
    input: '.myinput',
    button: '.mybutton',
  },

  events: {
    'click @ui.button': 'changeDiv',
  },

  changeDiv: function() {
    const text=this.ui.input.val();
    this.ui.content.text(text);
  }
})

module.exports=BoardView;