function generateAnagrams(word) {
    if (word.length < 2) return [word]; 

    const anagrams = new Set(); 
    
    function permute(current, remaining) {
        if (remaining.length === 0) {
            anagrams.add(current); 
        } else {
            for (let i = 0; i < remaining.length; i++) {
               
                const nextCurrent = current + remaining[i];
                const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
                permute(nextCurrent, nextRemaining); 
            }
        }
    }

    permute('', word);
    return Array.from(anagrams); 
}

// Przykładowe użycie
const word = "xyz";
const anagrams = generateAnagrams(word);
console.log(`Anagramy słowa "${word}":`, anagrams);