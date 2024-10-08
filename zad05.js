function isPalindrome(word) {
    
    const cleanedWord = word.replace(/\s+/g, '').toLowerCase();
    
    
    const reversedWord = cleanedWord.split('').reverse().join('');
    
    
    return cleanedWord === reversedWord;
}

const word = "kajak"; 
if (isPalindrome(word)) {
    console.log(`"${word}" jest palindromem.`);
} else {
    console.log(`"${word}" nie jest palindromem.`);
}