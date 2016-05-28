// function print(x) {
// 	console.log(x);
// }

// // Exercises
// // Given the following array of people:
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


// function filter(collection,predicate) {
// 	var acc = [];
// 	each(collection, function(item, index) {
// 		if (predicate(item, index)) {
// 			acc.push(item);
// 		}
// 	});
// 	return acc;
// }

// var people = [
//   {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
//   {name: {first: "Louis", last: "Reasoner"}, age: 21},
//   {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
//   {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
//   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45}
// ];

// // Discuss the purpose of filter with your partner until the two of you are 
// // confident in your abilities to explain the purpose of filter to the class; 
// // as usual, this is not how filter works -- rather, what its purpose is and 
// // what kinds of problems it is suitable to solve.

// // Use filter on the array of people above to return only the people older 
// // than 30.

// print(filter(people, function(person) {
// 	return person.age > 30;
// }));
// // => [
// //   {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
// //   {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
// //   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45}
// // ]

// // Use filter on the array of people above to return only the people whose 
// // first name starts with the letter l. HINT: You can use array access 
// // notation to get the first character of an array, e.g.:

// function firstNameStartWith(people, letter) {
// 	return filter(people, function(person){
// 		return person.name.first[0].toLowerCase() === letter.toLowerCase()`; 
// 	})
// }

// print(firstNameStartWith(people,"l"));

// // "hello"[0]; // => "h"

