
var app = angular.module('GeneratorApp', []);

app.controller('GeneratorController', function () {
    var self = this;

    startingSyllables = ['Kap', 'Del', 'Alph'];

    endingSyllables = ['pa', 'ta', 'a'];

    self.generatedNames = [];

    startingSyllables.forEach(function (startingSyllable) {
        endingSyllables.forEach(function (endingSyllable) {
            self.generatedNames.push(startingSyllable + endingSyllable);
        });
    });

});
