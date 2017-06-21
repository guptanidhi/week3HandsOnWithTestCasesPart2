let expect = require('chai').expect;
let index = require('../output/w3q2');

describe('Question 2 - Test code for correct output', function(){
	
	it('Desired output should be store detail only', function(done){
		const storeDetail = [ 
			{ s_id: '0093WRS21', s_name: 'Hi5' }, 
			{ s_id: '54241QSUT', s_name: 'Jupiter' } 
		];
		expect(index.getStoreDetail()).to.deep.equal(storeDetail);
		done();
	})

	it('Desired output should be customer detail only', function(done){
		const customerDetail = [ 
			{ c_id: 'C78305212', c_name: 'Alice' },
  		{ c_id: 'C32160832', c_name: 'Scooby' },
  		{ c_id: 'C06512389', c_name: 'Tom' } 
  	];
		expect(index.getCustomerDetail()).to.deep.equal(customerDetail);
		done();
	})

	it('Desired output should be equal to 54241QSUT', function(done){
		const storeId = '54241QSUT';
		expect(index.getSecondStoreId()).to.deep.equal(storeId);
		done();
	})

	it('Desired output should be customer names only', function(done){
		const customerNames = [ 'Alice', 'Scooby', 'Tom' ];
		expect(index.getCustomerNames()).to.deep.equal(customerNames);
		done();
	})

	it('Desired output should be customer object only', function(done){
		const objectWithOnlyStore = { store: [ { s_id: '0093WRS21', s_name: 'Hi5' },
     { s_id: '54241QSUT', s_name: 'Jupiter' } ] }
		expect(index.removeAllDetailsExcludingStore()).to.deep.equal(objectWithOnlyStore);
		done();
	})
})
