// Problem No.1 Filtering An Array

// First Solution
function evenNums(array) {
    return array.filter(num => num % 2 === 0);
}

// Second Solution
// function evenNums(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             result.push(array[i]);
//         }
//     }

//     return result;
// }

// ********************* End ********************* 

// Problem No.2 Find The Largest Number

// First Solution
function largestNum(array) {
    return Math.max(...array);
}


// Second Solution
// function largestNum(array) {

//     let result = array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > array[i - 1] && array[i] >= result) {
//             result = array[i];
//         }
//     }

//     return result;
// }

// ********************* End ********************* 

// Problem No.3 Reverse String

// First Solution
function reverseString(str) {
    return [...str].reverse().join('');
}

// Second Solution
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// ********************* End ********************* 

// Problem No.4 Remove Duplicates

// First Solution
function removeDuplicates(array) {
    return [...new Set(array)];
}

// Second Solution
// function removeDuplicates(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!result.includes(array[i])) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }

// ********************* End ********************* 