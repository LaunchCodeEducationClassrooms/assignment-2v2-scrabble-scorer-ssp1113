// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word = initialPrompt();

function initialPrompt() {
   console.log(`Let's play some scrabble!\n`);

   let word = input.question("Enter a word to score: ");

   return word;
}

let simpleScore = function(word) {
  word = word.toUpperCase();

  let score = 0

  for (let i = 0; i < word.length; i++) {
    score ++;
  };
  
  score = Number(score);
  return score;
}

let vowelBonusScore = function(word) {
  word = word.toUpperCase();

  let score = 0

  for (let i = 0; i < word.length; i++) {
    if (word[i] == 'A' || word[i] == 'E' || word[i] == 'I'|| word[i] == 'O' || word[i] == 'U')
    score += 3;
    else {
      score += 1;  
    }
  };

  score = Number(score);
  return score;
}

let scrabbleScore = function(word) {
  word = word.toUpperCase();
  let score = 0
  
  for (let i = 0; i < word.length; i++) {
    letter = word[i];
		score += newPointStructure[letter];
  }
}

const scoringAlgorithms = [ 
  {   
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scorerFunction: simpleScore
  },
  {
    name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
    scorerFunction: vowelBonusScore
  },
  { 
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scorerFunction: scrabbleScore
  }
];

function scorerPrompt() {
  let scoringAlgorithm = input.question(`Which scoring algorithm would you like to use?

  0 - Simple: One point per character
  1 - Vowel Bonus: Vowels are worth 3 Points
  2 - Scrabble: Uses scrabble point system
  
  Enter 0, 1, or 2: `);
  
  scoringAlgorithm = Number(scoringAlgorithm);

    if (scoringAlgorithm == 0){
    console.log(`Your score for '${word}' is: ${scoringAlgorithms[0].scorerFunction(word)}`);
  } else if (scoringAlgorithm == 1){
    console.log(`Your score for '${word}' is: ${scoringAlgorithms[1].scorerFunction(word)}`);
  } else if (scoringAlgorithm == 2){
    console.log(`Your score for '${word}' is: ${scoringAlgorithms[2].scorerFunction(word)}`);
  }

  return scoringAlgorithm;
}

function transform(object) {
  let transformObj = {};
  word = word.toLowerCase();
  
  for (key in object) {
    for (let i = 0; i < object[key].length; i++) {
      transformObj[object[key][i].toLowerCase()] = +key;
    } 
  }
  
  return transformObj;
}

let newPointStructure = function transform(oldPointStructure) {}

function runProgram() {
  scoringAlgorithms[scorerPrompt()];
  console.log(transform(oldPointStructure));
  }

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

