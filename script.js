const arr = [ "1", "43", "23", "54", "2", "3", "89"]
// первая задача  Верните строку состоящую из всех ячеек массива
const str = arr.join(" ")
console.log(str)

// задача 2 ) Верните самое большое и самое маленькое значение из массива
// let max = arr[0]
// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
//     if (min > arr[i]) {
//         min = arr[i]
//     }
// }
// console.log(max)
// console.log(min)

//задача 3 ) Верните сумму всех четных чисел из массива
// for (let i =arr.length -1; i >=0; i--) {
//       if (arr[i] % 2 !== 0) {
//       console.log(arr [i])
//      }
//    }

// const arr = [ 1, 43, 23, 54, 2, 3, 89]

// let even = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         even += arr[i]
//     }
// }
// console.log(even)

//задача 4 Напишите функцию которая выведет в консоль
// все значения массива в обратном порядке

// for (let i = arr.length - 1; i >= 0; i--) {
//    console.log(arr[i])
// }

//задача 5  Перезапишите каждый элемент массива в числовой тип

// const str =arr.join(" ")
// console.log(str)


//задача 6 Напишите функцию результатом выполнения которой мы получим массив состоящий из суммы цифр каждого элемента
   // например: ["1", "23", "45"]    ->     [1, 5,  9]
    
