angular.module('mystore')
    .service('productService',['$q','$http',function($q, $http) {
    // Get Products
    this.GetProducts = function() {
        var deferred = $q.defer();
        $http.get('/ProductCatlogDB').success(function(response){
            var ProductCatlogDB = response;
            console.log(response);
            deferred.resolve(response);
      });
         return deferred.promise;
    }

    this.AddProduct = function(product){
        console.log(product);
        $http.post('/ProductCatlogDB',product).success(function(response){
      });
    }
}]);
 