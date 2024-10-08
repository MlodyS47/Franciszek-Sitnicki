function countWordOccurrences(text, word) {
   
    const cleanedText = text.toLowerCase();
    const cleanedWord = word.toLowerCase();

    
    const wordsArray = cleanedText.split(/\W+/); 

    // Liczymy wystąpienia słowa
    let count = 0;
    for (let w of wordsArray) {
        if (w === cleanedWord) {
            count++;
        }
    }

    return count;
}

// Przykładowe użycie
const text = "To jest test. Testowanie słowa w teście. Test!";
const word = "test";
const occurrences = countWordOccurrences(text, word);

console.log(`Słowo "${word}" występuje ${occurrences} razy w tekście.`);