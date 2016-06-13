describe('Protractor Angular App', function() {
    
    it('should add component', function() {
        browser.get('http://localhost:8030/');
        var CompCount = 0;

        var elems = element.all(by.repeater('product in ProductCatlogDB'));
        CompCount = elems.count();

        CompCount = CompCount + 1;
        element(by.id('lnkAddComp')).click();

        element(by.model('product.name')).sendKeys("Test Component");
        element(by.model('product.shortDescription')).sendKeys("Short Description");
        element(by.model('product.longDescription')).sendKeys("Long Description");
        element(by.id('btnAdd')).click();
        // expect(element(by.binding('latest')).getText()).toEqual('5'); // This is wrong!
        //expect(browser.getTitle()).toEqual('Angular Application');
        //expect(browser.getCurrentUrl()).toMatch(/\//);
        var elems = element.all(by.repeater('product in ProductCatlogDB'));
        expect(elems.count()).toBe(2);
    });
});