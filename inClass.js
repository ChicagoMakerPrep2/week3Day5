function print(x) {
	console.log(x);
}


function each(collection, func) {
	if(Array.isArray(collection)) {
		for(var i = 0; i < collection.length; i++) {
			func(collection[i], i);
		}
	} else {
	for(var key in collection) {
		func(collection[key], key);
	}
}
}
function filter(collection, predicate) {
	var acc = [];
	each(collection, function(value, index) {
		if(predicate(value, index)) {
			acc.push(value);
		}
	});
	return acc;
}


// Use filter on the array of people above to return only the people older 
// than 30.
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Louis", last: "Reasoner"}, age: 21},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45}
];

// print(filter(people, function(person) {
// 	return person.age > 30;
// }));
// => [
//   {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
//   {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
//   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45}
// ]



// Use filter on the array of people above to return only the people 
// whose first name starts with the letter l. HINT: You can use array 
// access notation to get the first character of an array, e.g.:



function nameStartWith(array, letter) {
	return filter(array, function(item) {
		return item.name.first[0].toLowerCase() === letter.toLowerCase();
	})
}

print(nameStartWith(people, "l"));


// Basic Requirements
// We've shown that we can write the function sum -- which sums an array of 
// numbers -- using reduce like this (see slides for more):

function sum(numbers) {
  return reduce(numbers, function(total, number) {
    return total + number;
  }, 0);
}
function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;print(product(numbers));
}

var numbers =[1,2,3,4]; //15
// Replace the ??? below to complete the implementation of product, that returns the product of an array of 
// numbers.

function product(numbers) {
  console.log("There is a total of " + numbers.length + " iterations")
  return reduce(numbers, function(total,num) {
  	console.log("total :" + total);
  	console.log("num :" +num);
  	console.log("updated total :" + (total * num));
  	return total * num;
  },1)
}

function product1(numbers) {
	var total = 1;
	each(numbers, function(num) {
		total = total * num;
	})
	return total;
}

print(product(numbers));
print(product1(numbers));




