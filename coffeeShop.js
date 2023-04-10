/*
CoffeeShop
Properties:
name: a string (basically, of the shop)
menu: an array of items (of object type), with each item containing the item (name of the item), type
(whether food or a drink) and price.
orders: an empty array
Methods:
addOrder: adds the name of the item to the end of the orders array if it exists on the menu.
Otherwise, return "This item is currently unavailable!"
fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is
empty, return "All orders have been fulfilled!" listOrders: returns the list of orders taken, otherwise, an
empty array.
dueAmount: returns the total amount due for the orders taken.
cheapestItem: returns the name of the cheapest item on the menu.
drinksOnly: returns only the item names of type drink from the menu.
foodOnly: returns only the item names of type food from the menu.
IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.
*/
class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder(itemName) {
    const menuItem = this.menu.find(({ name }) => {
      return name.toLowerCase() === itemName.toLowerCase();
    });
    if (!menuItem) {
      return "This item is currently unavailable!";
    }
    this.orders.push(menuItem.name);
    return "Order added!";
  }
  fulfillOrder() {
    const ord = this.orders;

    if (ord.length) {
      return `This ${ord.shift()} is ready!`;
    } else {
      return "All orders have been fulfilled!";
    }
  }
  listOrders() {
    return this.orders; //.map(({ name }) => name);
  }
  dueAmount() {
    let sum = 0;
    for (let i = 0; i < this.orders.length; i++) {
      sum += this.menu.find(({ name }) => name === this.orders[i]).price;
    }
    return sum;
  }
  cheapestItem() {
    let cheapest = this.menu[0];

    this.menu.forEach((element) => (cheapest = cheapest.price >= element.price ? element : cheapest)
    );

    return `${cheapest.name} is the cheapest item on our menu !`;
}
  drinksOnly() {
    return this.menu
      .filter(({ type }) => type === "drink")
      .map(({ name }) => name);
  }
  foodOnly() {
    return this.menu
      .filter(({ type }) => type === "food")
      .map(({ name }) => name);
  }
}
const myMenu = [
  { name: "Cappuccino", type: "drink", price: 400 },
  { name: "pizza", type: "food", price: 3500 },
  { name: "Ice cream", type: "food", price: 350 },
  { name: "cinnamon roll", type: "food", price: 750 },
  { name: "iced coffee", type: "drink", price: 450 },
  { name: "orange juice", type: "drink", price: 400 },
  { name: "lemonade", type: "drink", price: 200 },
  { name: "tuna sandwich", type: "food", price: 700 },
  { name: "ham and cheese sandwich", type: "food", price: 1100 },
  { name: "bacon and egg", type: "food", price: 1300 },
  { name: "steak", type: "food", price: 900 },
  { name: "hamburger", type: "food", price: 800 },
  { name: "cranberry juice", type: "drink", price: 650 },
  { name: "pineapple juice", type: "drink", price: 500 },
  { name: "lemon iced tea", type: "drink", price: 350 },
  { name: "vanilla chai latte", type: "drink", price: 700 },
  { name: "hot chocolate", type: "drink", price: 800 },
];

const tcs = new CoffeeShop("MyCoffeeShop", myMenu);

console.log(tcs.addOrder("Cola")); // "This item is currently unavailable!"
console.log(tcs.addOrder("iced tea")); // "This item is currently unavailable!"
console.log(tcs.addOrder("cinnamon roll")); // "Order added!"
console.log(tcs.addOrder("iced coffee")); // "Order added!"
console.log(tcs.listOrders()); // ["cinnamon roll", "iced coffee"]
console.log(tcs.dueAmount()); // 1200
console.log(tcs.fulfillOrder()); // "The cinnamon roll is ready!"
console.log(tcs.fulfillOrder()); // "The iced coffee is ready!"
console.log(tcs.fulfillOrder()); // "All orders have been fulfilled!"
// all orders have been presumably served
console.log(tcs.listOrders()); // []
// an empty array is returned if all orders have been exhausted!
console.log(tcs.dueAmount()); // 0
// no new orders taken, expect a zero payable
console.log(tcs.cheapestItem()); // "lemonade"
console.log(tcs.drinksOnly()); // ['Cappuccino','iced coffee','orange juice','lemonade','cranberry juice',
//'pineapple juice','lemon iced tea','vanilla chai latte','hot chocolate']
console.log(tcs.foodOnly()); // ['pizza','Ice cream','cinnamon roll','tuna sandwich','ham and cheese sandwich',
//'bacon and egg','steak','hamburger']
