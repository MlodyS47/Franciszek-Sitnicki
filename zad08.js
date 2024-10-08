function findSubstringOccurrences(text, substring) {
    const occurrences = [];
    const textLength = text.length;
    const substringLength = substring.length;

    for (let i = 0; i <= textLength - substringLength; i++) {
       
        if (text.substring(i, i + substringLength) === substring) {
            occurrences.push(i); 
        }
    }

    return occurrences;
}

// Przykładowe użycie
const text = "To jest test. Testowanie testów. Test!";
const substring = "test";
const indices = findSubstringOccurrences(text, substring);

if (indices.length > 0) {
    console.log(`Podciąg "${substring}" występuje w tekście na indeksach: ${indices.join(', ')}`);
} else {
    console.log(`Podciąg "${substring}" nie występuje w tekście.`);
}