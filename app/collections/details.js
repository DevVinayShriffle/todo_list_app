const Backbone=require('backbone');
const DetailModel=require('../models/detail')

module.exports=Backbone.Collection.extend({
  model: DetailModel,
  url: '/api/users'
})