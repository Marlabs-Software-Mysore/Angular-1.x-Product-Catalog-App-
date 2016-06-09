
angular.module('mystore')
    .controller('productController', ["$scope",'$location',"productService", "$routeParams","$sce",
     function($scope,$location,productService,$routeParams,$sce) {
     $scope.ProductCatlogDB = productService.GetProducts();
     $scope.message = "";
     $scope.product = {};
     
     $scope.orderByProp = "Price";
     $scope.direction = false;
     $scope.status = "";       
      $scope.showDelete= false,
     $scope.show= true;
       $scope.hover = function(product) {
        // Shows/hides the delete button on hover
      return product.showDelete = ! product.showDelete;
    };
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
          debugger;
          $scope.orderByProp = prop;
          $scope.direction = direction=="ASC"?false:true;
      }
      
      $scope.highlight = function(text, search) {
    if (!search) {
        return $sce.trustAsHtml(text);
    }
    return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>'));
};
            
      $scope.AddProduct =function() {
          debugger;
           $scope.product.ImageUrl="/images/defaultUser.png"
           productService.AddProduct($scope.product);
           $scope.message = "Product added successfully";
           $scope.status = "Added";
           Initialization();
           $location.path("/");
      }
      
     // delete product
        $scope.remove=function(id){
        // console.log(id);
            productService.removeProduct(id);
                Initialization();
                $location.path("/");
        }
}]);
