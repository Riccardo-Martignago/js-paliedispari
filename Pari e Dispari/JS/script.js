const userChoice = prompt('Scegli tra Pari e Dispari')
const userChoiceNumber = Number.parseInt (prompt('Inserisci un numero da 1 a 5'))
const pcNumber = randomNumb()
function randomNumb(){
    return Number.parseInt(Math.random() * 5 + 1)
}
function evenOrOdd(num1, num2){
    const odd = ("Dispari")
    const even = ("Pari")
    let somma = num1 + num2
    if(somma % 2 === 0){
        return even
    }
    else{
        return odd
    }
}
const result = evenOrOdd(pcNumber, userChoiceNumber)
if(result == userChoice){
    console.log('Hai vinto contro il computer')
}
else{
    console.log('Non hai vinto contro il computer')
}
console.log("Hai scelto",userChoice)
console.log("Numero del computer",pcNumber,"Il tuo numero",userChoiceNumber)