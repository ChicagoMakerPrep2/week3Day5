// function print(x) {
// 	console.log(x);
// } 

// function each(collection, func) {
// 	if(Array.isArray(collection)) {
// 		for (var i = 0; i < collection.length; i++) {
// 			func(collection[i],i);
// 		}
// 	} else {
// 		for (var key in collection) {
// 			func(collection[key], key);
// 		}
// 	}
// }

// function reduce(array, f, start) {
//   var acc = start;
//   each(array, function(element) {
//     acc = f(acc, element);
//   });
//   return acc;
// }


// // Basic Requirements
// // We've shown that we can write the function sum -- which sums an array of 
// // numbers -- using reduce like this (see slides for more):
// var numbers = [2,4,6,8];
// function sum(numbers) {
//   return reduce(numbers, function(total, number) {
//     return total + number;
//   }, 0);
// }
// print(sum(numbers));
// // Replace the ??? below to complete the implementation of product, that 
// // returns the product of an array of numbers.

// function product(numbers) {
//   return reduce(numbers, function(total, number) {
//     return total * number;
//   }, 1);
// }

// print(product(numbers));
// // Rewrite the averageAge function from the warmup using reduce. The function 
// // signature and people array are copied below for your convenience:

// var people = [
//   {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
//   {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
//   {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
//   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
//   {name: {first: "Louis", last: "Reasoner"}, age: 21}
// ];

// function averageAge(people) {
//   var sumOfAge = reduce(people, function(total, person) {
//   	return total + person.age;
//   },0);
//   return sumOfAge/people.length;
// }

// print(averageAge(people));
// // The range function from yesterday looks like this:

// function range(start, end) {
//   var acc = [];
//   for (var i = start; i < end; i++) {
//     acc.push(i);
//   }
//   return acc;
// }

// // Using range and reduce, complete the factorial function below that should 
// // compute the factorial of n.

// function factorial(n) {
//   print(range(1,n));
//   return reduce(range(1,n+1), function(total, num) {
//   	print("total:" + total);
//   	print("num:"+ num);
//   	return total * num;
//   }, 1);
// }

// print(factorial(4));
// // HINT: If you cannot think of how to do this, it may help to first try 
// // writing the function using each, and then refactor it to use range 
// // & reduce.

// // More Practice

// // The sumBy function from previous lessons can be implemented using each 
// // like this:

// function sumBy(numbers, f) {
//   var sum = 0;
//   each(numbers, function(number) {
//     sum = sum + f(number);
//   });
//   return sum;
// }



// // Rewrite sumBy using reduce.

// // The max function below takes an array of numbers as a parameter, and 
// // returns the maximum number in the array:

// function max(numbers) {
//   var max = numbers[0];
//   each(numbers, function(number) {
//     if (number > max) {
//       max = number;
//     }
//   });
//   return max;
// }

// // Rewrite max using reduce.

// // Write a function called countOccurrences that, given a string and a 
// // character (a string with length one) as parameters, returns the total 
// // number of times that character occurs in the string. For example:

// // countOccurrences("hello", "l"); // => 2
// // countOccurrences("the", "z"); // => 0
// // countOccurrences("hello, world!", "l"); // => 3

// // In the lecture (see slides) we ran through a function called 
// // everyNumberEven -- write functions like it that do the following:

// // Given an array of numbers, determine if every one of them is odd
// // Given an array of numbers, determine if every one of them is positive
// // Given an array of strings, determine if all of them have a length greather 
// // than 3.
// // Given an array of strings, determines if all of them contain the letter "e".
// // Write a function every that takes two parameters: an array and a predicate 
// // (a function that returns true or false). every should return true if the 
// // predicate returns true for every element in the array. You should be 
// // able to use it to write everyNumberEven like this:

// function everyNumberEven(numbers) {
//   return every(numbers, function(number) {
//     return number % 2 === 0;
//   });
// }

// // Test that it works by rewriting the functions in exercise (4) above 
// // using every.

// // Advanced
// // Let's write a function called join that works just like the built-in join, but using reduce! If you're unfamiliar with the built-in version of join, this is how it works:

// // ["the", "quick", "brown", "fox"].join(" "); // => "the quick brown fox"
// // ["one", "two", "three"].join(":"); // => "one:two:three"
// // Part One: First, write a function called joinWith that takes three arguments: the string to join onto, the string that will be joined, and a separator. That is, it should work like this:

// // function joinWith(onto, next, separator) {
// //   // YOUR CODE HERE
// // }
// // joinWith("the quick", "brown", " "); // => "the quick brown"
// // joinWith("one:two", "three", ":"); // => "one:two:three"
// // Part Two: Now, using joinWith and reduce, write join:

// // function join(array, separator) {
// //   // YOUR CODE HERE
// // }
// // join(["the", "quick", "brown", "fox"], " "); // => "the quick brown fox"
// // join(["one", "two", "three"], ":"); // => "one:two:three"
// // Uses of reduce are not restricted to turning arrays into numbers -- use reduce to rewrite map (instead of using each).

// // We previously covered the function countWords that worked like this:

// // function countWords(s) {
// //   var acc = {};
// //   var words = s.split(" ");
// //   for (var i = 0; i < words.length; i = i + 1) {
// //     var word = words[i];
// //     if (acc[word] === undefined) {
// //       acc[word] = 1;
// //     } else {
// //       acc[word]++;
// //     }
// //   }
// //   return acc;
// // }
// // Rewrite countWords using reduce.
// // Write the function countChars that works like countWords, but counts characters instead of words (using reduce of course).