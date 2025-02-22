interface Discount {
    apply (total: number): number;
};

class BlckFridayDiscount implements Discount {
    apply (total: number): number {
        return total * 0.5;
    }
};

class WeekendDiscount implements Discount {
    apply (total: number): number {
        return total * 0.9;
    }
};

export { Discount, BlckFridayDiscount, WeekendDiscount };