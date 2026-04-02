const { View } = require('backbone.marionette');
const _ = require('underscore');
const $=require('jquery');

module.exports = View.extend({
    template: _.template(require('../templates/root_layout.html').default),
    
    regions: {
        main: '#main-content'
    },

    events: {
        'click a[data-nav]': 'onNavigate'
    },

    onNavigate: function(e){
        e.preventDefault()
        const path=$(e.currentTarget).attr('href');

        Backbone.history.navigate(path, {trigger: true})
    },

    onRender: function() {
        // Store a reference to this layout so the router can access its regions
        window.rootLayout = this;
    }
});
