var express = require('express');
var app = express();

var app1 = angular.module('app', []);

app1.directive('hello', [function() {
    return {
        restrict: 'CEMA',       // C: class, E: element, M: comments, A: attributes
        replace: true,          // replaces original content with template
        template: '<span><br>Hello</span>'
    }
}]);

app.listen(process.env.PORT, process.env.IP);
console.log('Asif: The <fractalStrategies> server is running.');