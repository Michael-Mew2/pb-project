const readlineSync = require('readline-sync');

function findMatchingValueAndCheckSubtractions(object, initialTargetValue) {
    if (Object.keys(object).length < 2) {
        return null;
    }

    const sortedKeys = Object.keys(object).sort((a, b) => parseInt(a) - parseInt(b));
    const highestValue = sortedKeys[sortedKeys.length - 1];

    if (initialTargetValue > parseInt(highestValue)) {
        console.log("Der angegebene Wert liegt außerhalb der definierten Werte. Bitte geben Sie den Preis manuell ein:");
        let userInput = readlineSync.question("Geben Sie den Preis (ohne Währungszeichen) ein: ");
        
        return userInput
    }

        // Starten Sie mit der initialen Zielzahl
        let targetValue = initialTargetValue;

        // Liste für die abgezogenen Zahlen
        let subtractedValues = [];
    
        // Variable für die Summe der abgezogenen Zahlen
        let sumOfSubtractedValues = 0;
    
        // Schleife, um die Zielzahl zu verringern, bis sie zwischen zwei Werten liegt
        while (true) {
            // Überprüfen, ob die Zielzahl zwischen zwei aufeinanderfolgenden Werten liegt
            for (let i = 0; i < sortedKeys.length - 1; i++) {
                if (parseInt(sortedKeys[i]) < targetValue && targetValue < parseInt(sortedKeys[i + 1])) {
                    // Wenn die Zielzahl zwischen zwei Werten liegt, geben Sie den höheren Wert und dessen Beschreibung zurück
                    return { highestKey: parseInt(sortedKeys[i + 1]), highestValue: object[sortedKeys[i + 1]], finalTargetValue: targetValue, subtractedValues, sumOfSubtractedValues };
                }
            }
    
            // Wenn die Zielzahl nirgendwo im Objekt gefunden wurde, verringern Sie sie um eins
            targetValue--;
    
            // Fügen Sie die abgezogene Zahl zur Liste hinzu
            subtractedValues.push(1);
    // Rest der Funktion...
            // Aktualisieren Sie die Summe der abgezogenen Zahlen
            sumOfSubtractedValues += 1;
    
            // Überprüfen, ob die Zielzahl negativ wurde oder die Summe der abgezogenen Zahlen den höchsten Wert im Objekt erreicht oder überschreitet
            if (targetValue < 0 || sumOfSubtractedValues > parseInt(sortedKeys[sortedKeys.length - 1])) {
                return null; // Kein passender Wert gefunden
            }
        }
    }
    

const valuesWithText = {
    1: "tomate",
    3: "mozarella",
    5: "schinken",
    7: "schnitzel",
    9: "kuchen"
};

const initialTargetValue = 2;

const result = findMatchingValueAndCheckSubtractions(valuesWithText, initialTargetValue);
if (result !== null) {
    console.log(result);
} else {
    console.log('Kein passender Wert gefunden');
}


/* 
                const filteredPrices = {};
                filteredDays.forEach(key => {
                    filteredPrices[key] = productDetails.preise[key];
                });
                console.log(filteredPrices);
*/