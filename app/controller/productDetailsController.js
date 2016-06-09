angular.module('mystore')
    .controller('productDetailsController', ["$scope","productService", "$routeParams",
     function($scope,productService,$routeParams) {
 
    GetProductDetails($routeParams.id);
    
      function GetProductDetails (id) {
          var promise = productService.GetProduct(id);
          promise.then(function (response) {
                if (response !== undefined) {
                    $scope.product = response;
                    //console.log(response);
             
                }
         }, function (err) {
             $scope.message = err.error_description;
         });
      }
 }]);