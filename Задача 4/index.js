const currentYear = 2024 
let index = 0

let person1 = prompt("Введите имя пользователя:")
let age1 = currentYear - prompt("Введите год рождения пользователя:")
console.log(++index, person1, age1)

let person2 = prompt("Введите имя пользователя:")
let age2 = currentYear - prompt("Введите год рождения пользователя:")
console.log(++index, person2, age2)

let person3 = prompt("Введите имя пользователя:")
let age3 = currentYear - prompt("Введите год рождения пользователя:")
console.log(++index, person3, age3)

console.log("Средний возраст пользователей:", (age1 + age2 + age3) / 3);