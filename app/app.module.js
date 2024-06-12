'use strict';

angular.module('websocketApp', ['movie']);

angular.module('websocketApp').component('test', {
    templateUrl :'app.template.html',
    controller: function test() {
        var self = this;
        self.user = 'yechan';
    },
    bindings: {
        data: '<'
    },
})