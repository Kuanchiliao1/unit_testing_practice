const orderTotal = require('./order-total')

it('Quantity', () => 
  expect(orderTotal({
    items: [
      { name: 'Dragon candy', price: 2, quantity: 3 }
    ]
  })).toBe(6))

it('happy path (1)', () => 
  expect(orderTotal({
    items: [
      {name: 'Dragon food', price: 8 },
      {name: 'Dragon cage (small)', price: 800}
    ]
  })).toBe(808))

it('no quantity specified', () => {
  return expect(orderTotal({
    items: [
      {name: 'Dragon candy', price: 3}
    ]
  })).toBe(3)
})

it('happy path (2)', () => {
  return expect(orderTotal({
    items: [
      {name: 'Dragon collar', price: 20, quantity: 1 },
      {name: 'Dragon chew toy', price: 40, quantity: 1}
    ]
  })).toBe(60)
})