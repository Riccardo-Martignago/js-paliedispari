const userWord = prompt('Inserisci una parola')

function palindroma (word){
    const arrWord = word.split('');
    const reverseWord = arrWord.toReversed();
    if (arrWord.toString() === reverseWord.toString()){
        return true;
    }
    else{
        return false;
    }
}
if (palindroma(userWord) == true){
    console.log('La parola é palindroma')
}
else{
    console.log('La parola non é palindroma')
}