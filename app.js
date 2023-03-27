// Fibonacci sequence

function fibonacci(num) {
    if(num <= 1){
        return num;
    }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
console.log(fibonacci(10));


// The sum of Array Elements

function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
};

console.log(sum([1, 2, 3, 4, 5]));


// Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
};

console.log(reverseString('bushra'));


// Print a Triangle of a given size

function printTriangle(size) {
    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= i; j++){
            console.log(j);
        }
    }
};
console.log(printTriangle('2'));


// Flatten-Nested Arrays 

function flatten(arr) {
    let flattened = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            flattened = flattened.concat(flatten(arr[i]));
        } else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
};

console.log(flatten([[1, 2], [3, 4], [5, 6]]));


// Binary Search

function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === num){
            return mid;
        } else if(arr[mid] < num){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));


