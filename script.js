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
// const convertDate = (timeStr) => {
//   const parts = timeStr.match(/\d+/g)
//   return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5])
// }
// console.log(convertDate('1999/06/09 12:56:43'))

/* 問題１６ */
// const createNumbers = (num) => {
//   return Array.from({ length: num }, (_, i) => i + 1)
// }
// console.log(createNumbers(9))

/* 問題１７ */
// const reverseStr = (s) => {
//   return s.split('').reverse().join('')
// }
// console.log(reverseStr('Kai Itakura'))

/* 問題１８ */
// const calcSum = (arr) => {
//   return arr.reduce((sum, current) => sum + current)
// }
// console.log(calcSum([1, 2, 3, 4, 5, 5, 67, 7]))

/* 問題１９ */
// const stringCount = (str) => {
//   return str.length
// }
// console.log(stringCount('Kai'))

/* 問題２0 */
// const mapArray = (arr, func) => {
//  return arr.map(funk)
// }

/* 問題２１ */
// const filterArray = (arr, funk) => {
//   return arr.filter(funk)
// }

/* 問題２３ */
// const reduceArray = (arr) => {
//   return arr.reduce((acc, val) => acc + val, 0)
// }
// console.log(reduceArray([3, 4, 4, 4, 5, 64, 56, 456, 345, 3, 123, 14]))

/* 問題24 */
// const divide = (a, b) => a % b
// console.log(divide(82, 8))

/* 問題25 */
// const setArray = (arr) => {
//   return new Set(arr)
// }
// console.log(setArray(['set', 'kai', 'koki', 'kai', 'koike', 'makoto', 'set', 'satoshi', 'satosi', 'koike']))

/* 問題26 */
// const createNumbers = (n) => {
//   return Array.from({ length: n }, (_, i) => i + 1)
// }
// console.log(createNumbers(7))

/* 問題27 */
// const greatestCommonDivisor = (a, b) => {
//   if (b === 0) {
//     return a
//   } else {
//     return greatestCommonDivisor(b, a % b)
//   }
// }
// console.log(greatestCommonDivisor(0, 56))

/* 問題28 */
// const createNumArray = (arr, n) => {
//   return arr.slice(0, n)
// }
// console.log(createNumArray(['kai', 'musashi', 'reiki', 'kamui', 'taishi', 'ryota', 'takeru', 'hikaru', 'tomohiro'], 30))

/* 問題29 */
// const arrayFromTwoArray = (arr1, arr2) => {
//   return arr1.filter((elem) => arr2.includes(elem))
// }
// console.log(arrayFromTwoArray(['kai', 'himika', 'mushishiko'], ['kai', 'himika', 'takeshi']))

/* 問題30 */
// const capitalize = (s) => {
//   if (s.length === 1) {
//     return s.toUpperCase()
//   } else {
//     return s.charAt(0).toUpperCase() + s.slice(1, -1) + s.slice(-1).toUpperCase()
//   }
// }
// console.log(capitalize('hello world'))

/* 問題31 */
// const replaceObj = (obj) => {
//   return Object.entries(obj).reduce((acc, [key, value]) => {
//     acc[value] = key
//     return acc
//   }, {})
// }
// console.log(replaceObj({ name: 'kai', age: 23, job: 'frontend' }))

/* 問題32 */
// const sortDescending = (arr) => {
//   return arr.sort((a, b) => b - a)
// }
// console.log(sortDescending(['2', '4', '66', '7', '1']))

/* 問題33 */
// const swapFirstAndLast = (arr) => {
//   return [arr[arr.length - 1], ...arr.slice(1, -1), arr[0]]
// }
// console.log(swapFirstAndLast(['koba', 'saiko', 'tecchan', 'doba', 'beckham']))

/* 問題34 */
// const isEven = (arr) => {
//   return arr.map((elem) => (elem % 2 === 0 ? true : false))
// }
// console.log(isEven([1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10]))

/* 問題35 */
// const newSetArray = (arr) => {
//   return new Set(arr)
// }
// console.log(newSetArray(['koki', 'horoto', 'subaru', 'koki', 'chihoro', 'subaru']))

/* 問題36 */
// const doubleArray = (arr) => {
//   return arr.map((elem) => elem * 2)
// }
// console.log(doubleArray([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9]))

/* 問題37 */
// const getMaximumNum = (arr) => {
//   return Math.max(...arr)
// }
// console.log(getMaximumNum([1, 23, 5, 45, 56, 4, 7, 8, 9, 78, 6, 856, 7, 46, 3]))

/* 問題38 */
// const matchNum = (arr) => {
//   const num = 4
//   return arr.filter((elem) => elem !== num)
// }
// console.log(matchNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 4]))

/* 問題39 */
// const swapFirstAndLast = (arr) => {
//   if (arr.length < 2) {
//     return arr
//   } else {
//     const first = arr[0]
//     const last = arr.slice(-1)[0]
//     return [last, ...arr.slice(1, -1), first]
//   }
// }
// console.log(swapFirstAndLast(['himi', 'kai', 'reiki', 'takashi', 'bono']))

/* 問題40 */
// const countOccurrences = (arr) => {
//   const num = 7
//   return arr.filter((elem) => elem === num).length
// }
// console.log(countOccurrences([1, 2, 3, 4, 5, 6, 7, 7, 8, 0, 7, 6, 8, 7, 9, 8]))

/* 問題41 */
// const FizzBuzz = () => {
//   for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz')
//     } else if (i % 3 === 0) {
//       console.log('Fizz')
//     } else if (i % 5 === 0) {
//       console.log('Buzz')
//     } else {
//       console.log(i)
//     }
//   }
// }
// FizzBuzz()

/* 問題42 */
const findMostFrequent = (arr) => {
  const frequencyMap = arr.reduce()
}
