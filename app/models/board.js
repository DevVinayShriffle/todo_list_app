const Backbone=require('backbone');

const BoardModel=Backbone.Model.extend({
  defaults: {
    mytext: 'Write Something to render'
  }
})

module.exports=BoardModel;