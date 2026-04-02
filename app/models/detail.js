const Backbone=require('backbone');

module.exports=Backbone.Model.extend({
  defaults: {
    name: '',
    gender: '',
    nationality: '',
    url: ''
  }
})