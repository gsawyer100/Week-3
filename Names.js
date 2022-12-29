

let numLetters = 0;

let arrayNames = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

for(let i = 0; i < arrayNames.Length; i++) {
    console.log(arrayNames[i]); // Sam, Tommy, Tim, Sally, Buck, Bob
    numLetters = numLetters + arrayNames[i].Length; //add the length of each name to the total
    console.log(numLetters); //prints out the total number of letters in the array at each iteration
}