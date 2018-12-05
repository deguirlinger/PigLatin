// Enter the word or phrase to be translated to Pig Latin.
var toTranslate = prompt("Please enter a word or phrase to translate to Pig Latin", toTranslate)

// Break sentence into array of words.
var sentenceArray = toTranslate.split(" ")

//declare variable for sentence
var pigLatinSentence = ""
//putting each word into pig latin word function, and looping
for (let i = 0; i < sentenceArray.length; i++){
  pigLatinSentence = pigLatinSentence + " " + pigLatinWord(sentenceArray[i])
}
//display
alert(pigLatinSentence)


// function to convert user input to Pig Latin.
function pigLatinWord(toTranslate){
// Splits words of sentence into arrays of characters.
var toTranslateArr = toTranslate.split("")
// take last letter from the array
var punctuation = toTranslateArr[toTranslateArr.length - 1]
// Detects when punctuation is present at the end of a word.
if (!/[A-z]/.test(toTranslateArr[toTranslateArr.length - 1])) {
  // if the last letter is not an alphabet, remove the letter from array
  toTranslateArr.pop()
} else {
  // if the last letter is an alphabet, empty punctuation
  punctuation = ""
}

// make vowel arrays for regula vowels and y vowel
var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
var yVowels = ["Y", "y"]

// declare the first vowel position as 0
var firstVowel = 0

// check letters in the array matches with vowel arrays, then change the first vowel position, and break the loop
for(let i=0; i <toTranslateArr.length; i++) {
  if (vowels.includes(toTranslateArr[i]) || (i != 0 && yVowels.includes(toTranslateArr[i]))){
    firstVowel = i
    break
  }
}

// in case of "qu", increase the first vowel postion by 1
if((toTranslateArr[firstVowel]==="u"||toTranslateArr[firstVowel]==="U"  )&& (toTranslateArr[firstVowel-1] === "q" || toTranslateArr[firstVowel-1]==="Q")){
  firstVowel++
}

// declare consonant array
var firstConsonants = []

// make consonant arry upto the first vowel
for(let i=0; i <firstVowel; i++) {
  firstConsonants.push(toTranslateArr[i].toLowerCase())
}

// declare array for pig latin word
var translated = []
// assign whole word in to pig latin word
translated = translated.concat(toTranslateArr)
// take out consonants before the first vowel.
for (let i = 0; i < firstVowel; i++) {
  translated.shift()
}
// if the first letter of the original word is upper case, then change the first letter of pig latin word to upper case
if (/[A-Z]/.test(toTranslateArr[0])){
  translated[0] = translated[0].toUpperCase()
}
// adding removed consonants to the end of the array after chaning to lower case
for (let i = 0; i < firstConsonants.length; i++) {
  translated.push(firstConsonants[i].toLowerCase())
}
// converting pig latin array to string
var finalTrans = translated.join("")
// if the first letter is vowel, then add "way", else add "ay"
if (firstVowel === 0) {
  finalTrans = finalTrans + "way"
} else {
  finalTrans = finalTrans + "ay"
}
// add punctuation to the end. The end of the function
return finalTrans + punctuation
}
