//Задание 1
// const arr = [1, 3, 6];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr.length)

// const arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);


// задание 2

// const arr = [1, 2, 3];
// for (let i = 0; i  < arr.length; i++) {
//     arr[i]++;
// }
// console.log(arr);

// const array = [1, 2, 3];
// array.push(4, 5);
// console.log(array);
// array.shift();
// array.pop();
// console.log(array);


// Задание 3
// for (let i = 11; i < 34; i++) {
//     console.log(i);
// }


// for (let i = 1; i < 100; i++) {
//     if (i%2 !== 0) {
//         console.log(i);
//     }
// }

// for (let i = 100; i >= 0; i--){
//     console.log(i);  
// }

// let num = 30;
// let count = 0;

// do {
//     num = num * 3;
//     console.log(num);
//     count++;
// } while (num < 1000);
// console.log(count);

//Задание 4

// const array = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 3 && array[i] < 10) {
//         console.log(array[i]);
//     }
// }

// const array = [2, 5, 9, 15, 1, 4];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     sum += element;
// }
// console.log(sum);


// let sum = 0;
// for (let i = 2; i < 101; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// let string = '-';
// for (let i = 0; i <= 9; i++) {
//     string += i + '-';
// }
// console.log(string);


// const array = [2, 5, 9, 3, 1, 0, 4];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element === 0) {
//         break
//     }
//     console.log(element);
// }


//Задание 5

// const array = [1, 5, 6, 8, 34, 23, 4, 9, 10, 21];
// for (let i = 0; i < array.length; i++) {
//     let element = array[i];
//     if (element % 2 === 0){
//         element = element ** 2;
//         console.log(element);
//     } else if (element % 3 === 0){
//         element = element ** 3;
//         console.log(element);
//     }
// }

// let count = 0;
// const arr = [1, 2, 3, 2, 3, 4, 3, 5, 6, 3, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element === 3) {
//         count += 1;
//     }
// }
// console.log(count);

const arr = [1, 2, 3, 4, 5]
console.log(arr);
arr.splice(1,2)
console.log(arr);