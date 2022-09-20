const sentence = prompt("Type us a message!");
const upperSentence = sentence.toUpperCase();
const lowerSentence = sentence.toLowerCase();

if (sentence === upperSentence) {
    console.log("This user is yelling!");
} else if (sentence === lowerSentence) {
    console.log("This user is whispering.");
} else {
    console.log("This user is doing neither.");
}