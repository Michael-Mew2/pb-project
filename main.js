/* const { QMainWindow, QWidget, FlexLayout, QLabel, QPushButton, QLineEdit } = require("@nodegui/nodegui");

const win = new QMainWindow();
const centralWidget = new QWidget();
const rootLayout = new FlexLayout;

centralWidget.setLayout(rootLayout);

const label = new QLabel(win);
label.setText("Hello World");
label.setInlineStyle(`
color: red;
background-color: blue;
width: "100%";
height: "50%";
font-size: 30px;
qproperty-alignment: "AlignCenter";
`);
const button = new QPushButton();
button.setText("Click Me");
button.setObjectName("button");
button.addEventListener("clicked", () => {
    console.log("Clicked");
    const name = input.text();
    console.log(`Hello ${name}`);
    label.setText(`Hi, ${name}`)
})


const input = new QLineEdit();
input.setObjectName("input");
input.setInlineStyle(`
background-color: yellow;
padding: 20px;
color: blue;
font-size: 20px;
`)

rootLayout.addWidget(button);
rootLayout.addWidget(label);
rootLayout.addWidget(input);


win.setCentralWidget(centralWidget);

win.show();
global.win = win; // To prevent win from being garbage collected. */

// --------------
// Readline-sync:
const { clear, log } = require('console');
const { Agent } = require('http');
const readlineSync = require('readline-sync');
// ----------

let generalCounter = 1;

const agents = {
    "0": {
        empNumber: "0",
        password: "0",
        firstName: "Torben",
        lastName: "Testuser",
        department: "manager",
        isAdmin: true,
    },
    "0020": {
        empNumber: "0020",
        password: "12345",
        firstName: "Tatiana",
        lastName: "Tauziehen",
        department: "manager",
        isAdmin: true,
    },
    "0030": {
        empNumber: "0030",
        password: "pass5",
        firstName: "Gary",
        lastName: "Garrison",
        department: "Customer Support",
        isAdmin: false,
    },
}

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
            steuer: "19%",
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
            steuer: "19%",        
        },
    },

    mietenAnhänger: {
        "0021": {
            dienstName: "Kleiner Anhänger - Mieten",
            dienstBez: "Anhänger mit einer Ladefläche von Länge: 2,00m, Breite: 1,15m und Höhe: 0,40m",
            preise: {
                "24 Std": 20,
                "3 Tage": 50,
                "3 Tage": 80,
            },
            abrechnung: "nachZeit",
            steuer: "19%",
        },

        "0024": {
            dienstName: "Maxxi Anhänger - Mieten",
            dienstBez: "Anhänger mit einer Ladefläche von Länge: 3,10m, Breite: 1,55m und Höhe: 1,85m",
            preise: {
                "24 Std": 30,
                "3 Tage": 80,
                "3 Tage": 120,
            },
            abrechnung: "nachZeit",
            steuer: "19%",
        },
    }
}

const customers = [
    {
        id: "000000",
        firstName: "Test",
        lastName: "Customer",
        address: {
            street: "Teststreet",
            number: "00",
            zipCode: "00000",
            city: "Testhausen",
            country: "Testistan"
        },
        contact: {
            tel: "+000 000 00000",
            mobile: "0000 0000000",
            email: "test@test.te",
        },
        addedBy: "Gary",
    }
]

class Customer {
    constructor(id, firstName, lastName, street, number, zipCode, city, country, tel, mobile, email, addedBy){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = {
            street: street,
            number: number,
            zipCode: zipCode,
            city: city,
            country: country,
        };

        this.contact = {
            tel: tel,
            mobile: mobile,
            email: email,

        }

        this.addedBy = addedBy;
    } 
}

// ----------

class ShoppingCart {
    constructor(){
        this.items = [];
    }

    // Rechnungsinformationen hinzufügen:
    addCustomerInfos(boughtByID, boughtByName, billNumber) {
        this.items.push({
            customerId: boughtByID,
            customerName: boughtByName,
            billingNumber: billNumber,
        })
    }
    
    // Produkte in die Liste hinzufügen:
    addProduct(counter, productDetails, productNumber,quantity) {
        this.items.push({
            nr: counter,
            productId: productNumber,
            product: productDetails.dienstName,
            quantity: getQuantityAsNumber(quantity),
            unit: getUnit(quantity),
            tax: productDetails.steuer,
            grossPrice: priceCalc(productDetails, getQuantityAsNumber(quantity), getUnit(quantity)), // Preis nach steuern
        });
        console.log(this.items);
    }
    
}
// ^^ Muss vor dem eigentlichen Funktionsaufruf stehen!! ^^

function getQuantityAsNumber(quantity) {
    const quantityArr = quantity.split(" ");
    const lastQuantityArr = quantityArr[0];
    const lastQuantityStr = lastQuantityArr.toString();
    return lastQuantityStr;
}

function getUnit(quantity) {
    const quantityArr = quantity.split(" ");
    const lastQuantityArr = quantityArr[quantityArr.length-1];
    const lastQuantityStr = lastQuantityArr.toString();
    return lastQuantityStr;
};

function priceCalc(productDetails, quantity, unit) {
    if (productDetails.abrechnung === "nachZeit") {
        const thisUnit = unit;
        let regex = /Tag*/i;
        console.log(regex.test(thisUnit));
        if (regex.test(thisUnit)) {
            // ===========
            // Hier gehts weiter

            // ==========
            return `Klappt`;
        } else {
            return `Klappt nicht`
        }
    }
}



// ==========
// ----- Functions ========== 

start();

// ----------

// Startsequenz mit Log-in:

function start() {
    console.log("Guten Morgen");
    let isLoggedIn = false;
    let loggedAccount = "";
    do {
        console.log(`_-_-_-_-_-_-_\n`);
        const intUsername = readlineSync.question(`Bitte Benutzernamen eingeben:\n> `)
        const intPassword = readlineSync.question(`Bitte Password eingeben:\n> `)
        for (let account in agents) {
            if (account === intUsername) {
                console.log("account:", account);
                const checkPassword =  agents[account]["password"];
                loggedAccount = agents[account]
                if (checkPassword === intPassword) {
                    console.clear();
                    console.log(`-_-_-_-`);
                    console.log(`Willkommen ${loggedAccount.firstName}\n`);
                    isLoggedIn = true
                } else {
                    console.clear();
                    console.log(`\nAnmeldedaten falsch!!\n----- -----`);
                    continue
                }
            }
        }

    } while (isLoggedIn === false);

    chooseFunction(isLoggedIn, loggedAccount);
}

// ----------

// Optionen auswählen

function chooseFunction(status, workAccount) {
    if (status !== true) {
        console.log(`Du bist nicht eingeloggt!`);
        start();
    }
    else {
        console.log(`Folgende Möglichkeiten stehen zur Auswahl:\n`);
        console.log(`1. Rechnung erstellen\n2. Rechnung als PDF speichern\n3. Produkte ausgeben\n4. Neues Produkt hinzufügen\n5. Angestellte ausgeben\n6. Kunden ausgeben\n7. Neuen Kunden hinzufügen\n8. Neuen Angestellten Hinzufügen\n9. Programm beenden`);
        const selectedOption = readlineSync.question(`===== =====\nBitte wähle eine der obrigen Optionen aus, in dem du die entsprechende Zahl eingibst:\n> `) 
        
        switch (selectedOption) {
            case ("1" || "Rechnung erstellen"):
                console.clear()
                console.log("Du hast rechnungen erstellen ausgewählt!");
                createBill(status, workAccount)
                break;

            case ("2" || "Rechnung als PDF speichern"):
                console.clear();
                console.log("Du hast 'Rechnung als PDF speichern' ausgewählt");
                //printBill();
                break;

            case ("3" || "Produkte ausgeben"):
                console.clear();
                console.log("Du hast 'Produkte ausgeben' ausgewählt");
                //printProducts();
                break;

            case ("4" || "Neues Produkt hinzufügen"):
                console.clear();
                console.log("Du hast 'Neues Produkt hinzufügen' ausgewählt");
                //addProducts();
                break;
                
            case ("5" || "Angestellte ausgeben"):
                if (workAccount.isAdmin === false) {
                    console.clear()
                    const acceptCondition = readlineSync.question("Du benötigst Adminrechte um hierauf zugreifen zu können! (bestätige mit Enter)")
                    if (acceptCondition.length >= 0){
                        chooseFunction(status, workAccount);
                    }
                } else {
                    console.clear();
                    console.log("Du hast 'Angestellte ausgeben' ausgewählt");
                    //printEmployees();
                }
                break;
                
            case ("6" || "Kunden ausgeben"):
                console.clear()
                console.log("Du hast 'Kunden ausgeben' ausgewählt!");
                printCustomers(status, workAccount)   
                break;      
                
            case ("7" || "Neuen Kunden hinzufügen"):
                console.clear()
                console.log("Du hast 'Neuen Kunden hinzufügen' ausgewählt!");
                addCustomer(status, workAccount)   
                break;             

            case ("8" || "Neuen Angestellten hinzufügen"):
                if (workAccount.isAdmin === false) {
                    console.clear()
                    const acceptCondition = readlineSync.question("Du benötigst Adminrechte um hierauf zugreifen zu können! (bestätige mit Enter)")
                    if (acceptCondition.length >= 0){
                        chooseFunction(status, workAccount);
                    }
                } else {
                    console.clear();
                    console.log("Du hast 'Neuen Angestellten hinzufügen' ausgewählt");
                    //addEmployee();
                }
                    break;

            case ("9" || "Programm beenden"):
                status = false;
                workAccount = "";
                console.clear();
                console.log(`Du wurdest erfollgreich ausgeloggt\n----- -----\nDu kannst das Fenster jetzt schließen\n\n=====\n© Michaels Basic Interactive Programms Incorporated Ltd.\n=====`);
                start();
                break;

            default:
                console.clear()
            chooseFunction(status, workAccount);
            break;
        }
    }
}

// ----------

// Rechnung erstellen:

function createBill(status, workAccount) {
    let selectedCustomer = {};

    if (status !== true) {
        console.log(`Du bist nicht eingeloggt!`);
        start();
    } else {
        const chooseNewOrExistingCustomer = readlineSync.question(`Willst du einen bestehenden Kunden auswählen oder einen neuen erstellen?\nWähle "neu" für neuen Kunden oder "weiter" für bestehenden Kunden\n> `)
        
        if (chooseNewOrExistingCustomer === "neu" || chooseNewOrExistingCustomer === "n" || chooseNewOrExistingCustomer === "New") {
            addCustomer(status, workAccount)
        } else if (chooseNewOrExistingCustomer === "weiter") {
            selectedCustomer = findCustomer();
        }

        writeBill(status, workAccount, selectedCustomer);
    }
}

// ----------

// Kunden in die Kartei hinzufügen: 

function addCustomer(status, workAccount) {
    if (status !== true) {
        console.log(`Du bist nicht eingeloggt!`);
        start();
    } else {
        console.clear();
        const newFirstName = readlineSync.question(`Vornamen des/der Kunden/in:\n>`);
        const newLastName = readlineSync.question(`Nachnamen des/der Kunden/in:\n>`);
        const newStreet = readlineSync.question(`Straßennamen (ohne Hausnummer):\n>`);
        const newNumber = readlineSync.question(`Hausnumer:\n>`);
        const newZipCode = readlineSync.question(`Postleitzahl:\n>`);
        const newCity = readlineSync.question(`Stadt:\n>`)
        const newCountry = readlineSync.question(`Land:\n>`);
        console.clear();
        console.log("Gebe mindestens eine der Folgenden rückkontaktarten ein!");
        const newTel = readlineSync.question(`Telefon:\n>`);
        const newMobile = readlineSync.question(`Handy-/Smartphonenummer:\n>`);
        const newEmail = readlineSync.question(`Email:\n>`);

        const randomCustomernumber = randomNumberGeneratorEndingWithLetter(6);

        const newCustomer = new Customer(randomCustomernumber, newFirstName, newLastName, newStreet, newNumber, newZipCode, newCity, newCountry, newTel, newMobile, newEmail, workAccount.firstName)
        
        customers.push(newCustomer)

        console.log(newCustomer);

        console.log("danke");
        chooseFunction(status, workAccount);
    }
}

// ----------

// Kunden ausdrucken

function printCustomers(status, workAccount) {
    console.clear();
    console.log({customers});
    const acceptCondition = readlineSync.question("Möchtest du Fortfahren?")
    if (acceptCondition.length >= 0){
        chooseFunction(status, workAccount);
    }
    chooseFunction(status, workAccount);
}

// ----------

// Kunden-ID Generator

function randomNumberGeneratorEndingWithLetter (length) {
    let randomNumber = [];
    for (let i = 0; i < length; i++){
        let newChar = Math.floor(Math.random()*10)
        randomNumber.push(newChar);
    }
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    randomNumber.push(characters[Math.floor(Math.random() * characters.length)])
    const randomNumberString = randomNumber.join("");

    return randomNumberString
} 

// ----------

// Kunden finden:

function findCustomer() {
    console.clear();
    let foundCustomer = {}
    const chooseSearchOption = readlineSync.question(`Wonach soll der Kunde aus der Kartei gesucht werden?\nWähle zwischen "name" oder "id":\n> `);

    if (chooseSearchOption === "id") {
        const searchID = readlineSync.question(`Kundennummer:\n> `);
        const searchById = customers.find(customer => customer.id === searchID)
        if (searchById) {
            console.log("Kunde gefunden:", searchById);
            foundCustomer = searchById;
        } else {
            console.clear(),
            console.log("Kein Kunde mit dieser ID gefunden.");
            findCustomer();
        }

    } else if (chooseSearchOption === "name") {
        const searchFirstName = readlineSync.question(`Vorname:\n> `);
        const searchLastName = readlineSync.question(`Nachname:\n> `);
        const searchStreet = readlineSync.question(`Straße:\n> `);
        const searchByName = customers.find(customer => customer.firstName === searchFirstName && customer.lastName === searchLastName && customer.address.street === searchStreet)
        if (searchByName) {
            console.log("Kunde gefunden:", searchByName);
            foundCustomer = searchByName
        } else {
            console.clear()
            console.log("Kein Kunde mit diesem Namen gefunden.");
            findCustomer();
        }
    } else {
        console.clear()
        console.log(`Tut mir leid, das hab ich nicht verstanden\n`);
        findCustomer();
    }

    return foundCustomer
}

// -----------

// Rechnung schreiben:

function writeBill(status, workAccount, selectedCustomer) {
    let addMoreProducts = "ja"
    const billNumber = generateBillNumber();
    const boughtByID = selectedCustomer.id;
    const boughtByName = `${selectedCustomer.firstName} ${selectedCustomer.lastName}`;

    console.log(`--------\nRechnung Nr. ${billNumber} an ${boughtByName}\n`);
    const cart = new ShoppingCart();
    cart.addCustomerInfos(boughtByID, boughtByName, billNumber)
    let productCounter = 0;

    do {
        productCounter++;
        let boughtProduct = readlineSync.question(`Produktnummer eingeben:\n> `);
        const boughtQuantity = readlineSync.question(`Anzahl eingeben:\n> `)


        const middleMan = findCategory(boughtProduct)

        const productDetails = products[middleMan][boughtProduct];

        cart.addProduct(productCounter, productDetails, boughtProduct, boughtQuantity);
        // cart.printReceipt();

        addMoreProducts = readlineSync.question(`Willst du noch weitere produkt/Dienstleistungen hinzufügen?\n(ja/nein)\n> `);
    } while (addMoreProducts !== "nein");
}

function generateBillNumber() {
    const now = new Date();
    const billDate = now.toISOString().slice(0, 10).replace(/-/g, ''); // Formatiert das Datum im YYYYMMDD-Format
    const billCounter = String(generalCounter).padStart(3, '0'); // Fügt Nullen am Anfang hinzu, falls nötig
    generalCounter++;
    
    return `K${billDate}${billCounter}`;
}

function findCategory(boughtProduct) {
    switch (boughtProduct[2]) {
        case "1":
            return "mietenTransporter";
            break;
        case "2":
            return "mietenAnhänger";
            break;
    
        default:
            console.log("Produkt konnte nicht gefunden werden.");
            break;
    }
}



// ----------
