

// Warenkorb Beispiel

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getInfo(){
        return `${this.name} - ${this.price}`
    }
}

class ShoppingCart {
    constructor(){
        this.items = [];
    }
    addProduct(product, quantity){
        this.items.push({product, quantity})
        console.log(this.items); // nur zu Info
    }
    removeProduct(productName){
        this.items = this.items.filter((item) => {
            return item.product.name !== productName;
        });
        console.log(this.items);
    }
    getTotal(){
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0)
    }
    printReceipt(){
        console.log("Quittung");
        this.items.forEach(item => {
            console.log(`${item.product.name} -> ${item.quantity} x ${item.product.price.toFixed(2)} € = ${(item.product.price * item.quantity).toFixed(2)} €`);
        });
        console.log(`-_-_-_-_-_-_-_-_-_-_-_-_-_-\nTotal: ${this.getTotal().toFixed(2)} €\n-_-_-_-_-_-_-_-_-_-_-_-_-_-`);
    }
}

const apple = new Product("Apfel", 0.5);
const banana = new Product("Banane", 1);
const orange = new Product("Orange", 0.7);

const cart = new ShoppingCart();
cart.addProduct(apple, 3);
cart.addProduct(banana, 5);
cart.addProduct(orange, 2);
console.log(cart.getTotal());

cart.printReceipt();