import { ShoppingCart } from '../services/ShoppingCart';
import { BlckFridayDiscount, WeekendDiscount } from '../models/Discount';

describe('ShoppingCart', () => {
    let cart: ShoppingCart;

    beforeEach(() => {
        cart = new ShoppingCart();
    });

    test('should add items to the cart', () => {
        cart.addProduct("1", "Shoes", 50);
        expect(cart.getTotalPrice()).toBe(10);
    });

    test('should remove items from the cart', () => {
        cart.addProduct("2", "Apple", 50);
        cart.removeProduct('1');
        expect(cart.getTotalPrice()).toBe(0);
    });

    test('should throw error when removing non-existent item', () => {
        expect(() => cart.removeProduct('Apple')).toThrow('Item "Apple" not found in the cart.');
    });

    test('should throw error when adding invalid item', () => {
        expect(() => cart.addProduct('','',10)).toThrow('Invalid item: Name and price must be valid.');
        expect(() => cart.addProduct('4','Apple', -10)).toThrow('Invalid item: Name and price must be valid.');
    });

    test('should apply Black Friday discount correctly', () => {
        cart.addProduct('4', 'Apple', 10);
        const blackFridayDiscount = new BlckFridayDiscount();
        cart.applyDiscount(blackFridayDiscount);
        expect(cart.getTotalPrice()).toBe(5);
    });

    test('should apply Weekend discount correctly', () => {
        cart.addProduct('3','Apple', 10);
        const weekendDiscount = new WeekendDiscount();
        cart.applyDiscount(weekendDiscount);
        expect(cart.getTotalPrice()).toBe(9);
    });
});