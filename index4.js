// Oppgave 1: Summerer tre numre fra tastaturet
function summerTall() {
    let num1 = parseFloat(prompt("Skriv inn det første tallet:"));
    let num2 = parseFloat(prompt("Skriv inn det andre tallet:"));
    let num3 = parseFloat(prompt("Skriv inn det tredje tallet:"));
    
    let sum = num1 + num2 + num3;
    
    console.log("Summen av tallene er: " + sum);
}

// Oppgave 2: Sammenligner to tilfeldige tall
function sammenligneTall() {
    let tall1 = Math.floor(Math.random() * 11);
    let tall2 = Math.floor(Math.random() * 11);
    
    if (tall1 < tall2) {
        console.log(tall1 + " er mindre enn " + tall2);
    } else if (tall1 > tall2) {
        console.log(tall1 + " er større enn " + tall2);
    } else {
        console.log(tall1 + " er lik " + tall2);
    }
}

// Oppgave 3: Kalkulator
function kalkulator() {
    let num1 = parseFloat(prompt("Skriv inn det første tallet:"));
    let num2 = parseFloat(prompt("Skriv inn det andre tallet:"));
    let operator = prompt("Skriv inn operatoren (+, -, *, /):");
    let resultat;

    switch (operator) {
        case "+":
            resultat = num1 + num2;
            break;
        case "-":
            resultat = num1 - num2;
            break;
        case "*":
            resultat = num1 * num2;
            break;
        case "/":
            resultat = num1 / num2;
            break;
        default:
            console.log("Ugyldig operasjon.");
            return;
    }
    
    console.log("Resultatet er: " + resultat);
}

// Oppgave 4: Genererer tilfeldige tall innenfor et gitt intervall
function tilfeldigeTall() {
    let nedreGrense = parseInt(prompt("Skriv inn nedre grense:"));
    let øvreGrense = parseInt(prompt("Skriv inn øvre grense:"));

    let tilfeldigTall = Math.floor(Math.random() * (øvreGrense - nedreGrense + 1)) + nedreGrense;
    
    console.log("Et tilfeldig tall mellom " + nedreGrense + " og " + øvreGrense + " er: " + tilfeldigTall);
}
