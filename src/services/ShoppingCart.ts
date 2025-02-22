import { Product } from "../models/Product";
import { Discount }    from "../models/Discount";

export class ShoppingCart {
    private items: Product[] = [];
    private price: number = 0;

    addProduct (id: string, name: string, price: number): void {
        if(price <= 0) {
            throw new Error("Invalid price");
        }
        if(name === "") {
            throw new Error("Invalid name");
        }
        const product: Product = { id, name, price };
        this.items.push(product);
        this.price += product.price;
    }; 

    removeProduct (id: string): void {
        const index = this.items.findIndex(item => item.id === id);
        if(index === -1) {
            throw new Error(`Product with id ${id} not found`);
        }
        this.price -= this.items[index].price;
        this.items.splice(index, 1);
    };

    getTotalPrice (): number {
        return this.price;
    };

    applyDiscount (discount: Discount): void {
        this.price = discount.apply(this.price);
    };

    showProducts (): void {
        this.items.forEach(item => {
            console.log(`Product: ${item.name} - Price: ${item.price}`);
        });
    };
};