// Array length:
// Exercise: Write a function that takes an array as input and returns its length.
// Example: getArrayLength(['apple', 'banana', 'orange']) should return 3.

let familyNames = new Array(`Dirceu`, `Vanderli`, `Marcio`, `Monica`, `Jose`, `Diego`, `Laura`)

function arrayLength (){
    names = familyNames.length
    console.log(familyNames[2]) // Outputs Marcio
    return names
}
arrayLength()

// you can also pass a parameter on you function

function getArrayLength(array) {
    return array.length;
}
console.log(getArrayLength(familyNames)); // Output: 7


//=====================================================================================================================
// Array toString():
// Exercise: Write a function that takes an array as input and returns a string representation of the array.
// Example: arrayToString([1, 2, 3]) should return "1,2,3".

function arrayToString () {
  let string = familyNames.toString()
  console.log(string)
  return string
}
arrayToString()

// you can also pass a parameter on you function

function getArrayToString(array) {
    let string = array.toString();
    console.log(string);
    return string;
}

getArrayToString(familyNames); // Output: "Dirceu,Vanderli,Marcio,Monica,Jose,Diego,Laura"




//=====================================================================================================================
// Array at():
// Exercise: Write a function that takes an array and an index as input and returns the element at that index.
// Example: getElementAt([10, 20, 30], 1) should return 20.











//=====================================================================================================================
// Array join():
// Exercise: Write a function that takes an array and a separator as input and returns a string where each element of the array is separated by the given separator.
// Example: joinArray(['a', 'b', 'c'], '-') should return "a-b-c".












//=====================================================================================================================
// Array pop():
// Exercise: Write a function that removes the last element from an array and returns that element.
// Example: removeLastElement(['apple', 'banana', 'orange']) should return 'orange'.











//=====================================================================================================================
// Array push():
// Exercise: Write a function that adds an element to the end of an array and returns the new length of the array.
// Example: addElementToEnd(['apple', 'banana'], 'orange') should return 3.











//=====================================================================================================================
// Array shift():
// Exercise: Write a function that removes the first element from an array and returns that element.
// Example: removeFirstElement(['apple', 'banana', 'orange']) should return 'apple'.









//=====================================================================================================================
// Array unshift():
// Exercise: Write a function that adds one or more elements to the beginning of an array and returns the new length of the array.
// Example: addFirstElement(['banana', 'orange'], 'apple') should return 3.










//=====================================================================================================================
// Array delete():
// Exercise: Write a function that removes an element from an array at a specific index.
// Example: deleteElementAt(['apple', 'banana', 'orange'], 1) should return ['apple', 'orange'].










//=====================================================================================================================
// Array concat():
// Exercise: Write a function that concatenates two or more arrays.
// Example: concatArrays([1, 2], [3, 4], [5, 6]) should return [1, 2, 3, 4, 5, 6].