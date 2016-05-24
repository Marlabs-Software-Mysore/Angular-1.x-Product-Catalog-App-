
angular.module('mystore')
    .controller('productController', ["$scope",'$location',"productService",
     function($scope,$location,productService) {
     $scope.ProductCatlogDB = productService.GetProducts();
     $scope.message = "";
     $scope.product = {};
     
     $scope.orderByProp = "Price";
     $scope.direction = false;
     $scope.status = "";
     
     
     Initialization();
      
      function Initialization () {
          var promise = productService.GetProducts();
          promise.then(function (response) {
                if (response !== undefined) {
                    $scope.ProductCatlogDB = response;
                    //console.log(response);
                }
         }, function (err) {
             $scope.message = err.error_description;
         });
      }
      
      $scope.filterBy = function(prop , direction) {
          $scope.orderByProp = prop;
          $scope.direction = direction=="ASC"?false:true;
      }
      
      
      $scope.AddProduct =function() {
           productService.AddProduct($scope.product);
           $scope.message = "Product added successfully";
           $scope.status = "Added";
           $location.path("/");
      }
}]);
