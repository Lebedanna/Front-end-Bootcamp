//Напишите функцию counter, которая при каждом вызове будет возвращать числа на 3 больше, чем в прошлый. Нельзя использовать переменные, объявленные через var!

// DONE

function counter() {
    let count = 0
    return function () {
        console.log(count)
        count += 3
    }
}

let myCounter = counter()

myCounter() // 0
myCounter() // 3
myCounter() // 6
myCounter() // 9
myCounter() // 12
