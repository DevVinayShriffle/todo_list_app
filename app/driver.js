const { Application } = require('backbone.marionette');
const Backbone=require('backbone')
const RootLayout=require('./views/root_layout')

const App = new Application({
  region: '#app-hook'
});

require('./router')

App.on('start', function(){
  window.rootLayout=new RootLayout();
  this.showView(window.rootLayout);

  if(Backbone.history){
    Backbone.history.start({pushState: true});
  }
})

App.start();
