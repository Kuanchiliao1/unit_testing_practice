function orderTotal(order) {
  return order.items.reduce((total, item) => {
    const quantity = item.quantity || 1    
    return total + item.price * quantity
  }, 0)
}

module.exports = orderTotal