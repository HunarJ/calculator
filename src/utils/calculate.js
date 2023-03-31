export const options = [
    { value: "ADD", label: "Sčítání" },
    { value: "SUBTRACT", label: "Odčítání" },
    { value: "MULTIPLY", label: "Násobení" },
    { value: "DIVIDE", label: "Dělení" },
];

//Calculates result from x and y according to selected operation
export let calculate = (x, y, operation) => {
    let numberX = parseFloat(x); // Převedeme na číslo
    let numberY = parseFloat(y); // Převedeme na číslo

    switch (operation) {
        case "ADD":
            return numberX + numberY;
        case "SUBTRACT":
            return numberX - numberY;
        case "MULTIPLY":
            return numberX * numberY;
        case "DIVIDE":
            return numberX / numberY;
        default:
            return null; // Sem by to nikdy nemělo dojít.
    }
};