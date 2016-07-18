describe('Test : productService', function() {
  
    var productService, $httpBackend;
    
    var productApiUrl, testProduct, testProducts;
        
    beforeEach(module('mystore'));
    
    beforeEach(inject(function(_productService_, _$httpBackend_) {
        productApiUrl = '/ProductCatlogDB';
        // Test data
        testProduct = {Id:"1", Name:"Engine",Description:"BMW Engine",Price:"129.00"};
        testProducts = [testProduct];
        
        productService = _productService_;
        $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    
<<<<<<< HEAD
    describe('Test Method : Add Product', function() {
        it('Test Case : Add New Product', function() {
            //
        });
    });
    describe('Test Method : Get Products', function() {
        it('Test Case : Get Products', function() {
            var promise, result;
            // Make the request and implement a fake success callback
            promise = productService.GetProducts();
            promise.then(function(data) {
                result = data;
            });

            response = { success: true, data: { products: testProducts }};
            $httpBackend.expectGET(productApiUrl).respond(200, response);
            // Expect a GET request and send back a canned response
            $httpBackend.flush(); 
            // Flush pending requests
            
            expect(response.data.products.length).toEqual(1);
            //expect(result.length).toEqual(3);
=======
    
    it('Test Case : Get Products', function() {
        var promise, mockedResponse, result;
        // Make the request and implement a fake success callback
        promise = productService.GetProducts();
        promise.then(function(data) {
            result = data;
>>>>>>> 35355cc3037b6a66c43edd53635390970c2012eb
        });
        
        response = { success: true, data: { products: testProducts }};
        $httpBackend.expectGET(productApiUrl).respond(200, response);
        // Expect a GET request and send back a canned response
        $httpBackend.flush(); 
        // Flush pending requests
        
        expect(response.data.products.length).toEqual(1);
        //expect(result.length).toEqual(3);
    });
});