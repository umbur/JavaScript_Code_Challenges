// function stackBoxes(n) {
//   return n > 0 ? Math.pow(n, n) : 0;
//   //   if (n == 0) {
//   //     return 0;
//   //   } else {
//   //     return Math.pow(n, n);
//   //   }
// }
// console.log(stackBoxes(0));

// function flipBool(b) {
//   return b == true ? 0 : 1;
// }
// console.log(flipBool(false));

// function isPlural(word) {
//   console.log(word.endsWith("s"));
// }
// console.log(isPlural("changes"));

// function footballPoints(wins, draws, losses) {
// 	return wins * 3 + draws * 1
// }

// function isOdd(num) {
//   if (num % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isOdd(-5));

// function validStrNumber(n) {
//   if (isNaN(n)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(validStrNumber("3..3"));

// function nSidedShape(n) {
//   let obj = {
//     1: "circle",
//     2: "semi-circle",
//     3: "triangle",
//     4: "square",
//     5: "pentagon",
//     6: "hexagon",
//     7: "heptagon",
//     8: "octagon",
//     9: "nonagon",
//     10: "decagon",
//   };
//   return obj[n];
// }
// console.log(nSidedShape(2));

// function longBurp(num) {
//   let word = "r";
//   return "Bu" + word.repeat(num) + "p";
// }
// console.log(longBurp(3));

// function spaceMeOut(str) {
//   return str.split("").join(" ");
// }
// console.log(spaceMeOut("space"));

// function countWords(str) {
//   return str.split(" ").length;
// }
// console.log(countWords("This is a test"));

// function both(n1, n2) {
//   if (n1 < 0 && n2 < 0) {
//     return true;
//   } else if (n1 > 0 && n2 > 0) {
//     return true;
//   } else if (n1 == 0 && n2 == 0) {
//     return true;
//   }
// }
// console.log(both(6, 2));

// function findSmallestNum(arr) {
//   return Math.min(...arr);
// }
// console.log(findSmallestNum([34, 15, 88, 2]));

// function firstLast(arr) {
//   return [arr.shift(), arr.pop()];
// }
// console.log(firstLast([5, 10, 15, 20, 25]));

// function addEnding(arr, ending) {
//   return arr.map((n) => n + ending);
// }
// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));

// function getFillings(sandwich) {
//   return sandwich.filter(() => sandwich.pop());
// }
// console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));

// function additiveInverse(arr) {
//   return arr.map((n) => -n);
// }
// console.log(additiveInverse([5, -7, 8, 3]));

// function repetition(txt, n) {
//   return txt.repeat(n);
// }
// console.log(repetition("ab", 3));

// function filterArray(arr) {
//   return arr.filter((n) => typeof n == "number");
// }
// console.log(filterArray([1, 2, "a", "b"]));

// function factorial(z) {
// 	for(i=0; i < z; i++){

//     }
// }

// function flip(y) {
//   return "dsad" ? y == 0 : "0";
// }
// console.log(flip(0));

// function charCount(myChar, str) {
//   return str.split("").filter((n) => n == myChar).length;
// }
// console.log(charCount("b", "big fat bubble"));

// const animal = "cat";

// for (let i = 0; i < animal.length; i++) {
//   console.log(animal[i]);
//   for (let j = 1; j < 8; j++) {
//     console.log(j);
//   }
// }

// const team = {
//   _players: [
//     {
//       firstName: "Luffy",
//       lastName: "Monkey",
//       age: 19,
//     },
//   ],
//   _games: [
//     {
//       opponent: "Crocodile",
//       teamPoints: 3,
//       opponentPoints: 2,
//     },
//   ],
//   get players() {
//     return this._players;
//   },
//   get games() {
//     return this._games;
//   },
//   addPlayer(firstName, lastName, age) {
//     const player = {
//       firstName,
//       lastName,
//       age,
//     };
//     this.players.push(player);
//   },
// };

// team.addPlayer("John", "Doe", 13);
// team.addPlayer("Jane", "Doe", 37);
// console.log(team.players);

// function factorial(int) {
//   let result = int;
//   while (int > 1) {
//     int--;
//     result = result * int;
//   }
//   return result;
// }
// console.log(factorial(3));

// function setTest(s) {
//   // let test = {
//   //   a: 1,
//   //   b: 2,
//   //   b: 2,
//   // };
//   // console.log(test);
//   // test = new Set();
//   let mySet = new Set();

//   mySet.add(1); // Set [ 1 ]
//   mySet.add(5); // Set [ 1, 5 ]
//   mySet.add(5); // Set [ 1, 5 ]
//   console.log(typeof mySet);
// }
// console.log(setTest());

// function countUnique(s1, s2) {
//   let number = 0;
//   const x = s1.split("");
//   const y = s2.split("");
//   const all = x.concat(y);
//   const unique = [];
//   for (let i = 0; i < all.length; i++) {
//     unique.includes(all[i]) ? i : unique.push(all[i]);
//   }
//   return unique.length;
// }

// const countUnique = (s1, s2) => {
//   let chars = s1.split("").concat(...s2);
//   return [...new Set(chars)].length;
// };
// console.log(countUnique("apple", "play"));

// const REGEXP = /(?:red|blue) flag/g;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("edabit");
//   }, 1000);
// });
// let test = promise();
// console.log(test);

// function isSymmetrical(num) {
//   return num.toString().split("").reverse().join("") === num.toString();
// }
// console.log(isSymmetrical(7224));

// function sortDescending(num) {
//   let test = num.toString();
//   // console.log(Number(test));
//   return Number(
//     test
//       .split("")
//       .sort(function (a, b) {
//         return b - a;
//       })
//       .join("")
//   );
// }
// console.log(sortDescending(123));

// function toArray(num) {
//   // console.log([...num.toString()]);
//   return [...num.toString()].map((s) => Number(s));
// }
// console.log(toArray(235));

// function toNumber(arr) {
//   return Number(arr.join(""));
// }
// console.log(toNumber([2, 3, 5]));

// function num_of_digits(num) {
//   return Math.abs(num.toString().length);
// }
// console.log(num_of_digits(-123));

// function arrayOperation(x, y, n) {
//   let test = [];
//   for (let i = x; i <= y; i++) {
//     if (i % n === 0) {
//       test.push(i);
//     }
//   }
//   return test;
// }
// console.log(arrayOperation(1, 10, 3));

// function equal(a, b, c) {

// }
// console.log(equal(3, 4, 3))

// function findMissingNumbers(arr) {
//   // Create sparse array with a 1 at each index equal to a value in the input.
//   var sparse = arr.reduce((sparse, i) => ((sparse[i] = 1), sparse), []);
//   // Create array 0..highest number, and retain only those values for which
//   // the sparse array has nothing at that index (and eliminate the 0 value).
//   return [...sparse.keys()].filter((i) => i && !sparse[i]);
// }

// var someArr = [7, 2, 3, 6, 5, 9, 1, 4, 8];
// var result = findMissingNumbers(someArr);
// console.log(result);

// const miss = (arr) => {
//   let missArr = [];
//   let l = Math.max(...arr);
//   for (i = 1; i < l; i++) {
//     if (arr.indexOf(i) < 0) {
//       missArr.push(i);
//     }
//   }
//   return missArr;
// };
// console.log(miss([7, 2, 3, 6, 5, 9, 1, 4, 8, 11]));

// function matrix(x, y, z) {
//   var final = [];
//   var tab = [];

//   for (var i = 0; i < y; i++) {
//     tab.push(z);
//     console.log(tab);
//   }

//   for (var i = 0; i < x; i++) {
//     final.push(tab);
//   }

//   return final;
// }
// console.log(matrix(3, 2, 3));

// string = "Go ahead, make my day.";
// console.log(string.split("a"));

// function pifagore(arr) {
//   return arr[0] ** 2 + arr[1] ** 2 === arr[2] ** 2 ? true : false;
// }
// console.log(pifagore([3, 4, 5]));

// function add_suffix(suffix) {
//   if (suffix.endsWith("s") || suffix.endsWith("l")) {
//     return suffix + "ly";
//   } else if (suffix.endsWith("r") || suffix.endsWith("h")) {
//     return suffix + "less";
//   } else {
//     return suffix + "ing";
//   }
// }
// console.log(add_suffix("hopeless"));

// function FizzBuzz(num) {
//   return num % 3 === 0 && num % 5 === 0
//     ? "FizzBuzz"
//     : num % 3 === 0
//     ? "Fizz"
//     : num % 5 === 0
//     ? "Buzz"
//     : String(num);
// }
// console.log(FizzBuzz(9));

// function reverse(bool) {
//   return typeof bool === "boolean" ? !bool : "aghandz";
// }
// console.log(reverse("ds"));
// return typeof bool === "boolean" ? !bool : "aghandz";

// function smallerNum(n1, n2) {
//   let result = Math.min(parseInt(n1), parseInt(n2));
//   return String(result);
// }
// smallerNum("21", "44");

// function gradePercentage(userScore, passScore) {
//   let s = "";
//   userScore = parseInt(userScore.substring(0, userScore.length - 1));
//   passScore = parseInt(passScore.substring(0, passScore.length - 1));
//   if (userScore >= passScore) {
//     s = "PASSED";
//   } else if (userScore < passScore) {
//     s = "FAILED";
//   }

//   return `You ${s} the Exam `;
// }
// console.log(gradePercentage("85%", "85%"));

// const nextElement = (arr) => {
//   const [secondLast, last] = arr.slice(-3);
//   console.log(last);
//   // return last + (last - secondLast);
// };
// console.log(nextElement([3, 5, 7, 9]));

// function addName(obj, name, value) {
//   return { ...obj, [name]: value };
// }
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

// function countCharacters(arr) {
//   return arr.join("").length;
// }
// console.log(countCharacters(["###", "###", "###"]));

// function isStrangePair(str1, str2) {
//   // let test = ["a", "b"];
//   // // test.push(["a", "b"]);
//   // let test0 = test[0];
//   // console.log(test0);
// let last2 = str2[str2.length - 1];
//   let last1 = str1[str1.length - 1];
//   if (str1[0] === last2 && last1 === str2[0]) {
//     return true;
//   }
//   false;
// }
// console.log(isStrangePair("ratio", "orator"));

// function howManyTimes(num) {
//   return `Ed${"a".repeat(num)}bit`;
// }
// console.log(howManyTimes(5));

// function removeFirstLast(str) {
//   // let last = str[str.length - 1];
//   let strtoarr = str.split("");
//   let beforelast = strtoarr.length - 1;
//   let length = strtoarr.length;
//   return length > 2 ? `${str.slice(1, beforelast)}` : str;
// }
// console.log(removeFirstLast("hello"));

// function mysteryFunc(arr, num) {
// let a = x / num if a - a === 0 return 0 else a -
// }
// console.log(mysteryFunc([5, 7, 8, 2, 1], 2));

// function asd(num){

// }
// console.log()

// console.log(3 % 2);
// console.log(4 % 2);
// console.log(5 % 2);
// console.log(6 % 2);
// console.log(7 % 2);
// console.log(8 % 2);
// console.log(9 % 2);
// console.log(11 % 2);
// console.log(13 % 2);
// console.log(5 % 3);
// console.log(7 % 3);

//function modulo(num1, num2) {
// var sign = num1 < 0 ? -1 : 1;
// var dividend = Math.abs(num1);
// var divisor = Math.abs(num2);

// if (dividend === 0) {
//   return 0;
// }
// if (dividend === 0 || isNaN(dividend) || isNaN(divisor)) {
//   return NaN;
// }
// if (dividend < divisor) {
//   return sign * dividend;
// }

//   var counter = num1;
//   while (counter >= num2) {
//     counter = counter - num2;
//   }
//   return counter;
// }

//console.log(modulo(237, 4));

// function mysteryFunc(arr, num) {
//   var counter = arr;
//   let result = [];
// for (let i = 0; i < counter.length; i++)
// while (let i = 0; i < counter.length; i++) {
//   console.log(counter[i]);
// counter = counter[i] - num
// }
//  }
//result.push(counter)
//return result;
// }
// console.log(mysteryFunc([5, 7, 8, 2, 1], 2));

// function replaceVowels(str, ch) {
//   let result = [];
//   // let regex = /aiou/g;
//   // console.log(str.includes("a"));
//   for (let i = 0; i <= str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "o" ||
//       str[i] === "i" ||
//       str[i] === "u"
//     ) {
//       result.push(ch);
//     } else {
//       result.push(str[i]);
//     }
//   }
//   return result.join("");
// }

function removeKFromList(l, k) {
  let output = [];
  for (let i in l) {
    if (l[i] !== k) {
      output.push(l[i]);
    }
  }
  return output;
}
console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));
