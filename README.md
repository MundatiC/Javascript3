# Javascript3

Assignment given on the Jitu training on Array Methods

# Tasks

# sort.js

1. Write a JavaScript program to Sort the below array of employees in ascending order by age.

```js
let employees = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },
  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },
  {
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];
```

# lastNelements.js

2. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

# print-array.js

3. Write a JavaScript program that prints the elements of the following array.
   Note : Use nested for loops.
   Sample array

```js
const a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
```
Sample output
```bash
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------
```
# difference_array.js

4. Write a JavaScript function to find the difference between two arrays.

```js
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
```
```bash
["3", "10", "100"]
```

# filter.js

5. Write a JavaScript function to filter false, null, 0 and blank values from an array.
```js
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
```

```bash
[58, "abcd", true]
```
