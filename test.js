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
    { name: 'Dragon candy', price: 2, quantity: 3 }
  ]
}) !== 6) {
  throw new Error('Check fail: Quantity')
}

if (orderTotal({
  items: [
    {name: 'Dragon candy', price: 3}
  ]
}) !== 3) {
  throw new Error('Check fail: no quantity specified')
}

if (orderTotal({
  items: [
    {name: 'Dragon collar', price: 20, quantity: 1 },
    {name: 'Dragon chew toy', price: 40, quantity: 1}
  ]
}) !== 60) {
  throw new Error('Check fail: happy path (2)')
}

function orderTotal(order) {
  return order.items.reduce((total, item) => {
    const quantity = item.quantity || 1    
    return total + item.price * quantity
  }, 0)
}