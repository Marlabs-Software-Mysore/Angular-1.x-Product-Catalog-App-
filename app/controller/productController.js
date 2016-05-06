(function(){
    
     function productController($scope, $element, $attrs, $location, productService) {
        var ctrl = this;
        
        ctrl.products = productService.GetProducts();
        ctrl.message = "";
        ctrl.newProduct = {};
        
        ctrl.orderByProp = "Price";
        ctrl.direction = false;
        
        Initialization();
        
        //Initialization function
        function Initialization () {
            var promise = productService.GetProducts();
            promise.then(function (response) {
                    if (response !== undefined) {
                    ctrl.products = response;
                        //console.log(response);
                    }
            }, function (err) {
                ctrl.message = err.error_description;
            });
        }
        
        ctrl.filterBy = function(prop , direction) {
            ctrl.orderByProp = prop;
            ctrl.direction = direction =="ASC" ?false:true;
        }
        
        ctrl.AddProduct =function() {
            productService.AddProduct($scope.newProduct);
            //$scope.newProduct = { Name:"",Description:"",Price:"" };
            ctrl.message = "Product added successfully";
            $location.path("/products");
        }
    }

    angular.module("mystore").component('productList',{
        templateUrl: '../Views/products.html',
        controller: productController
    });
})();



>>>>>>> 402de00b87447a0b76580d0060fc251b92ce55e9

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