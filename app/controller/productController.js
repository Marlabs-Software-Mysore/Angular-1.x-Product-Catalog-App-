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




