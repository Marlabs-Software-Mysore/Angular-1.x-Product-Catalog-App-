angular.module('mystore')
    .service('productService',['$q','$http','localStorageService',function($q, $http,localStorageService) {
        
    this.AddProduct = function(newProduct) {
        var savedprod = localStorageService.get("products");
        var products = savedprod!==null?JSON.parse(savedprod):null;
        if(products==null){
            localStorageService.set("products",JSON.stringify(newProduct));
        }
        else{
            products.push(newProduct);
            localStorageService.set("products",JSON.stringify(products));
        }
    }
    
    // Get Products
    this.GetProducts = function() {
        debugger;
        var savedprod = localStorageService.get("products");
        var products = savedprod!==null?JSON.parse(savedprod):null;
        var deferred = $q.defer();
        if(products==null){
             $http.get('/app/data/product.json')
            .success(function(response){
                localStorageService.set("products",JSON.stringify(response.products));
                deferred.resolve(response.products);
            })
            .error(function(response) {
                deferred.reject(response);
            });
        }
        else{
            deferred.resolve(products);
        }
        return deferred.promise;
    }
}]);