/**
 * What are arrays?
 * Arrays are basically used to store multiply values inside them
 * 
 * By the end of this course you should be able to list different
 * types of array method.
 * 
 */
// Array Methods [push, slice, indexOf, .length]

const groceries = ['apples', 'mangoes', 'pear', 'banana'];
console.log(groceries);
// to access item pear
// this process is called indexing
console.log(groceries[2]);
console.log(groceries[3]);

/** 
 * push() Method
 * This adds one or more elements to the end of an array and returns
 * the new length of the array.
 * */
groceries.push('cookies', 'grape');
console.log(groceries[5]);

/** 
 * slice() Method
 * This method returns the portion of the array you want in a new array.
 * */
console.log(groceries.slice(0,2));// counts only 0 & 1, leaves 2

/** 
 * indexOf() Method
 * This is use to locate or find the index of a value in an array.
 * */
console.log(groceries.indexOf('pear'));

/** 
 * .length() Method
 * Length is an array property that returns the number of elements
 * you have in a given array.
 * */
console.log(groceries.length);