import { ShoppingCart } from "./services/ShoppingCart";
import { BlckFridayDiscount, WeekendDiscount } from "./models/Discount";

const cart = new ShoppingCart();
 
cart.addProduct("1", "Shoes", 50);
cart.addProduct("2", "Shirt", 30);
cart.addProduct("3", "Pants", 40);

cart.removeProduct("2");

const blackFriday = new BlckFridayDiscount();
cart.applyDiscount(blackFriday);


console.log(`Total price with Black Friday discount: ${cart.getTotalPrice()}`);
cart.showProducts();