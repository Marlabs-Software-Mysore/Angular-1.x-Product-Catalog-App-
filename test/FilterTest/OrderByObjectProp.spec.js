describe('Test : OrderByObjectPropFilter Test', function() {
    var $filter, testProducts;
    
    beforeEach(module('mystore'));
    
    beforeEach(inject(function(_$filter_) {
        $filter = _$filter_;
        OrderObjectBy = $filter('OrderObjectBy');
        
        testProducts = [{"Id":"1", "Name":"Engine","Description":"BMW Engine","Price":"129.00"},
                            {"Id":"2", "Name":"Cover","Description":"Silver Cover","Price":"145.00"},
                            {"Id":"3", "Name":"Pipe","Description":"Fuel Pipe","Price":"132.00"}];
    }));
    
    it('Test Case : Order By Name ASC order', function() {
        var FilteredProducts = OrderObjectBy(testProducts, "Name", true);
        expect(FilteredProducts[0].Name).toEqual(testProducts[2].Name);
    });
    
    it('Test Case : Order By Name DESC order', function() {
        var FilteredProducts = OrderObjectBy(testProducts, "Name", false);
        expect(FilteredProducts[0].Name).toEqual(testProducts[1].Name);
    });
});