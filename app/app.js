var app = angular.module('mystore',['ngRoute','ngSanitize',,'ngOrderObjectBy', 'LocalStorageModule']);

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
          when('/details/:id', {
            templateUrl: 'app/Views/details.html',
            controller: 'productDetailsController'
          }).
        otherwise({
            redirectTo: '/'
        });
}]);