const Marionette=require('backbone.marionette');
const _ = require('underscore');

const InputView=Marionette.View.extend({
  template: _.template(require('../templates/input.html').default),

  ui: {
    input: '.myinput',
    button: '.mybutton'
  },

  events: {
    'click @ui.button': 'handleChange'
  },

  handleChange: function(){
    const text=this.ui.input.val();

    this.model.set("mytext", text);
    this.ui.input.val('');
  }
});

module.exports=InputView;