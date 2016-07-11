describe('Test custom element', function () {
	 var customElement = '<jqx-custom-element text="Sun"></jqx-custom-element>';
	
	 beforeEach(function() {
	    document.body.insertAdjacentHTML('afterbegin', customElement);
	  });

     it('Has html', function () {
	 		var testHtml =  $('body').find('jqx-custom-element').html();
	        expect(testHtml.length>0).toEqual(true);
	    });
});
