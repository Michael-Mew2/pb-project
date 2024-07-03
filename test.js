function randomNumberGeneratorEndingWithLetter (length) {
    let randomNumber = [];
    for (let i = 0; i < length; i++){
        let newChar = Math.floor(Math.random()*10)
        randomNumber.push(newChar);
    }
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    randomNumber.push(characters[Math.floor(Math.random() * characters.length)])
    const randomNumberString = randomNumber.join("");

    console.log(randomNumberString);
} 

randomNumberGeneratorEndingWithLetter(5)

class MyClass {
    constructor(name) {
        this.name = name;
        this.property = "Wert";
    }

    display() {
        console.log(this.name + ": " + this.property);
    }
}

function generateRandomName(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < length; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    
    return result;
}

// Generieren Sie einen zufälligen Namen
const randomName = generateRandomName(6);

// Erstellen Sie eine Instanz von MyClass mit dem generierten Namen
const myInstance = new MyClass(randomName);

// Demonstration, wie man auf die Eigenschaften des Objekts zugreift
myInstance.display(); // Gibt "randomName: Wert" aus, wobei "randomName" der generierte Name ist

// Zugriff auf das Objekt über den generierten Namen
console.log(myInstance.name); // Gibt den generierten Namen zurück
