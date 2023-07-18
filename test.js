if (orderTotal({
  items: [
    {name: 'Dragon food', price: 8 },
    {name: 'Dragon cage (small)', price: 800}
  ]
}) !== 808) {
  throw new Error('Check fail: happy path (1)')
}

if (orderTotal({
  items: [
    {name: 'Dragon collar', price: 20 },
    {name: 'Dragon chew toy', price: 40}
  ]
}) !== 60) {
  throw new Error('Check fail: happy path (2)')
}

function orderTotal(order) {
  return order.items.reduce((total, item) => {    
    return total + item.price
  }, 0)
}