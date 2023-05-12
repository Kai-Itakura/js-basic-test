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
