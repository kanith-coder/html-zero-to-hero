function discount() {
    // Local variable
    let discount = -5;
    basket.total = basket.total + discount;
  }

// Global variable
const basket = {
  items: [],
  total: 0,
  discount: ''
};

function checkout() {

  let cokeItem = {
    itemName: 'Coke',
    price: 15
  }

  let coffeeItem = {
    itemName: 'Coffee',
    price: 40
  }

  basket.items.push(cokeItem);
  basket.total += cokeItem.price;

  basket.items.push(coffeeItem);
  basket.total += coffeeItem.price;
}
checkout();

console.log('basket  = ', basket);
discount();
// basket.discount();
console.log('basket total = ', basket.total);
