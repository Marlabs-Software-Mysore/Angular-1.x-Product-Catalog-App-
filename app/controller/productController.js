
angular.module('mystore')
    .controller('productController', ["$scope",'$location',"productService",
     function($scope,$location,productService) {
     $scope.products = productService.GetProducts();
     $scope.message = "";
     $scope.newProduct = {};
     
     $scope.orderByProp = "Price";
     $scope.direction = false;
     
     
     Initialization();
      
      function Initialization () {
          var promise = productService.GetProducts();
          promise.then(function (response) {
                if (response !== undefined) {
                    $scope.products = response;
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
           productService.AddProduct($scope.newProduct);
           //$scope.newProduct = { Name:"",Description:"",Price:"" };
           $scope.message = "Product added successfully";
           $location.path("/products");
           
      }
}]);