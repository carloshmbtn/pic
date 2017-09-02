/*global angular*/
var app = angular.module('app');

app.factory('Config', function(){
    var urlBase = '';
    return {
        getUrlBase: function(){
            return urlBase;
        }
    };
});
