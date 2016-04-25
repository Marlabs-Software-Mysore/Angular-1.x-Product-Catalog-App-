var app = angular.module('mystore',['ngRoute','ngOrderObjectBy','LocalStorageModule']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'app/Views/products.html',
            controller: 'productController'
        }).
        when('/add-product', {
            templateUrl: 'app/Views/addProduct.html',
            controller: 'productController'
          }).
        otherwise({
            redirectTo: '/'
        });
}]);