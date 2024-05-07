// Напишите функицю, которая принимает индекс числа из ряда Фибоначчи и возвращает его значение.
// Предположим, что ряд Фибоначчи начинается с 0 индекса.  1,1,2,3,5,8,13 ......

// DONE

function fibo(index) {
    if (index <= 2) {
        return index
    } else {
        return fibo(index - 1) + fibo(index - 2)
    }
}


console.log(fibo(5)) // Вернет 8
console.log(fibo(1)) // Вернет 1
console.log(fibo(8)) // Вернет 34
console.log(fibo(21)) // 17711