let generalCounter = 1;

const products = {
    mietenTransporter : {
        "0011": {
            dienstName: "Kompakt-Transporter - Mieten",
            dienstBez: "Transporter mit einer Ladefläche von Länge: 2,42m, Breite: 1,40m und Höhe: 1,40m",
            preise: {
                "4 Std": 49,
                "8 Std": 69,
                "24 Std": 90,
                "3 Tage": 180,
                "5 Tage": 270,
            },
            abrechnung: "nachZeit",
        },

        "0014": {
            dienstName: "maxxi-Transporter - Mieten",
            dienstBez: "Transporter mit einer Ladefläche von Länge: 4,70m, Breite: 2,15m und Höhe: 1,80m",
            preise: {
                "4 Std": 80,
                "8 Std": 135,
                "24 Std": 180,
                "2 Tage": 250,
                "3 Tage": 350,
            },
            abrechnung: "nachZeit",
        
        },
    },

    mietenAnhänger: {
        "0021": {
            dienstName: "Kleiner Anhänger - Mieten",
            dienstBez: "Anhänger mit einer Ladefläche von Länge: 2,00m, Breite: 1,15m und Höhe: 0,40m",
            preise: {
                "24 Std": 20,
                "3 Tage": 50,
                "5 Tage": 80,
            },
            abrechnung: "nachZeit",

        },

        "0024": {
            dienstName: "Maxxi Anhänger - Mieten",
            dienstBez: "Anhänger mit einer Ladefläche von Länge: 3,10m, Breite: 1,55m und Höhe: 1,85m",
            preise: {
                "24 Std": 30,
                "3 Tage": 80,
                "5 Tage": 120,
            },
            abrechnung: "nachZeit",
        },
    }
}

// ----------

console.log(Object.keys(products.mietenAnhänger["0024"].preise)[1]);

    let word = "Ich allein mit den Booten";
    let regex1 = /boot*/i;
    console.log(regex1.test(word));

/* writeBill();

function writeBill(status, workAccount, selectedCustomer) {
    let addMoreProducts = "ja"
    const billNumber = generateBillNumber();
    // const boughtBy = selectedCustomer;
    console.log(`--------\nRechnungs-Nr. ${billNumber}\n`);
    const cart = new ShoppingCart();

    do {
        let boughtProduct = readlineSync.question(`Produktnummer eingeben:\n> `);
        const boughtQuantity = readlineSync.question(`Anzahl eingeben:\n> `)


        const middleMan = findCategory(boughtProduct)

        const productDetails = products[middleMan][boughtProduct];
        console.log(productDetails);

        newCart.addProduct(productDetails, boughtQuantity);
        newCart[billNumber].printReceipt();

        addMoreProducts = readlineSync.question(`Willst du noch weitere produkt/Dienstleistungen hinzufügen?\n(ja/nein)\n> `);
    } while (addMoreProducts !== "nein");
}

// Funktion zur Erstellung der Rechnungsnummer:

function generateBillNumber() {
    const now = new Date();
    const billDate = now.toISOString().slice(0, 10).replace(/-/g, ''); // Formatiert das Datum im YYYYMMDD-Format
    const billCounter = String(generalCounter).padStart(3, '0'); // Fügt Nullen am Anfang hinzu, falls nötig
    generalCounter++;
    
    return `R${billDate}${billCounter}`;
}

// Funktion um Produktkategorie zu ermitteln

function findCategory(boughtProduct) {
    switch (boughtProduct[2]) {
        case "1":
            return "mietenTransporter";
            break;
        case "2":
            return "mietenAnhänger";
            break;
    
        default:
            break;
    }
}

// Eigentliche Funktion für die Erstellung der Rechnung:

class ShoppingCart {
    constructor(){
        this.items = [];
    }
    
    addProduct(productDetails, quantity) {
        this.items.push({
            product: productDetails,
            quantity: quantity
        });
        console.log(this.items);
    }
    
} */