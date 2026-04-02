const Backbone=require('backbone')
const AppRouter=require('backbone.marionette').AppRouter
const HomeView = require('./views/home');
const AboutView = require('./views/about');
const HelpView = require('./views/help');
const ServiceView = require('./views/service');

const Router=Backbone.Router.extend({
    routes: {
        "": "showHome",
        "about":"showAbout",
        "help": "showHelp",
        "service": "showService"
    },

    showHome: ()=>{
        window.rootLayout.showChildView('main', new HomeView());
    },

    showAbout: ()=>{
        window.rootLayout.showChildView('main', new AboutView());
    },

    showHelp: ()=>{
        window.rootLayout.showChildView('main', new HelpView());
    },

    showService: ()=>{
        window.rootLayout.showChildView('main', new ServiceView());
    }
});

module.exports=new Router();