// // 問題１
// const btn = document.querySelector('#js-button')
// const div = document.querySelector('div')
// btn.addEventListener('click', () => {
//   const p = document.createElement('p')
//   const elm = div.appendChild(p)
//   elm.textContent = 'Hello World'
// })

// // 問題２
// const numbers = [2, 4, 6, 8, 10]
// const doubleNumbers = numbers.map((num) => num * 2)
// console.log(doubleNumbers)

// // 問題３
// const person = {
//   name: 'Kai',
//   age: 23,
// }
// console.log(person.name)

// // 問題４
// const str = 'free research preview ChatGPT may produce inaccurate information about people, places, or facts.'
// const arr = str.split(' ')
// console.log(arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))

// // 問題５
// const createRange = (a, b) => {
//   const start = Math.min(a, b)
//   const end = Math.max(a, b)
//   const array = Array.from({ length: end - start + 1 }, (_, i) => start + i)
//   console.log(array)
// }
// createRange(20, 7)

// // 問題６
// const num = [1, 2, 3, 4, 5, 6, 6, 67, 7, 8, 7, 6, 4, 43]
// const findMax = (num) => {
//   return num.reduce((max, num) => (num > max ? num : max))
// }
// console.log(findMax(num))

// 問題７
// const countChars = (str) => {
//   const counts = {}
//   for (const char of str) {
//     if (counts[char]) {
//       counts[char]++
//     } else {
//       counts[char] = 1
//     }
//   }
//   console.log(counts)
// }

// countChars('kai itakura')

/* 問題８ */
// const sortDescending = (numbers) => {
//   console.log(numbers.sort((prev, current) => current - prev))
// }
// sortDescending([23, 245, 34, 35, 3, 56, 45, 74, 57, 567, 578, , 78, 678, 67, 3, 62, 423])

/* 問題９ */
// const containsAllChars = (s1, s2) => {
//   s1 = s1.toLowerCase()
//   s2 = s2.toLowerCase()
//   for (const char of s1) {
//     if (!s2.includes(char)) {
//       return false
//     }
//   }
//   return true
// }

// console.log(containsAllChars('kai', 'itakura'))

/* 問題１０ */
// const isEven = (n) => {
//   return n % 2 === 0
// }
// console.log(isEven(3423))

/* 問題１１ */
// const sum = (numbers) => {
//   return numbers.reduce((prev, current) => prev + current)
// }
// console.log(sum([2, 23, 25, 25, , 53, 46, 45, 34]))

/* 問題１２ */
// const isPalindrome = (str) => {
//   str = str.toLowerCase()
//   const reverseStr = str.split('').reverse().join('')
//   return str === reverseStr
// }
// console.log(isPalindrome('しんぶんし'))

/* 問題１３ */
// const removeDuplication = (arr) => {
//   const set = new Set(arr)
//   return [...set]
// }
// console.log(removeDuplication(['k', 'b', 'k', 'c', 'b']))

/* 問題１４ */
// const upperCaseStr = (str) => {
//   return str.charAt(0).toUpperCase() + str.slice(1)
// }
// console.log(upperCaseStr(`i'm kai itakura!`))

/* 問題１５ */
const convertDate = (timeStr) => {
  const parts = timeStr.match(/\d+/g)
  return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5])
}
console.log(convertDate('1999/06/09 12:56:43'))
