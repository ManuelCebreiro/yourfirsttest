//const { sum } = require('./app.js');

//test('adds 14 + 9 to equal 23', () => {let total = sum(14, 9);
  //  expect(total).toBe(23);});
  const { fromDollarToYen } = require('./app.js')
  const { fromYanToPound } = require('./app.js')

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 135.47 yens", function(){
    // importo la funcion desde app.js
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3)).toBe(338.675); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One yen should be 0,0060 pounds", function(){
    // importo la funcion desde app.js
    
    // hago mi comparacion (la prueba)
    expect(fromYanToPound(3)).toBe(0.018764659890539485); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})