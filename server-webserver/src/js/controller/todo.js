angular.module('todoApp', ['ui.router'])
  .controller('TodoListController', function ($http) {
    self = this
    self.userInput = ""
    self.result = []
    self.submit = function() {
      self.result = []
      var inputSentences = self.userInput.split('. ');
      for(var i=0; i<inputSentences.length-1;i++) {
        inputSentences[i] += '.'
      }
      $http.post('http://52.221.253.67:3000/pig',{
      	text: self.userInput
      }).success(function (response) {
          self.result = response
          console.log(response);
        })
    }
  })
