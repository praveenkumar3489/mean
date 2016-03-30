'use strict';

angular.module('core').controller('HomeController', ['$http', '$scope', 'Authentication',
  function ($http, $scope, Authentication) {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log("Thank you for installing our app!");
    }

    // This provides Authentication context.
    $scope.items = {};
    $scope.authentication = Authentication;
    $scope.selectedCategory = 'ALL';
    $scope.categories = ["Books","Mobiles","Kindles","Computer","Camera","Sports","Beauty","Handbags"];
    $scope.position = {
      'name': "Price",
      'minCost': 100,
      'maxCost': 1000,
    };
    $http.get('http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm')
      .success(function(data){
        $scope.items = data.productsInCart;
      })
      .error(function(data){
        alert("error :"+data)
      });
  }
]);
