// 問題１
const btn = document.querySelector('#js-button')
const div = document.querySelector('div')
btn.addEventListener('click', () => {
  const p = document.createElement('p')
  const elm = div.appendChild(p)
  elm.textContent = 'Hello World'
})

// 問題２
const numbers = [2, 4, 6, 8, 10]
const doubleNumbers = numbers.map((num) => num * 2)
console.log(doubleNumbers)

// 問題３
const person = {
  name: 'Kai',
  age: 23,
}
console.log(person.name)

// 問題４
const str = 'free research preview ChatGPT may produce inaccurate information about people, places, or facts.'
const arr = str.split(' ')
console.log(arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))

// 問題５
const createRange = (a, b) => {
  const start = Math.min(a, b)
  const end = Math.max(a, b)
  const array = Array.from({ length: end - start + 1 }, (_, i) => start + i)
  console.log(array)
}
createRange(20, 7)

// 問題６
const num = [1, 2, 3, 4, 5, 6, 6, 67, 7, 8, 7, 6, 4, 43]
const findMax = (num) => {
  return num.reduce((max, num) => (num > max ? num : max))
}
console.log(findMax(num))
