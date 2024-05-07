// Вам нужно написать функцию которая принимает в качестве аргумента массив чисел и удаляет все повторяющиеся значения.

// DONE
function removeReps(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
        if (!res.includes(array[i])) {
            res.push(array[i])
        }
    }
    return res
}

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
console.log(removeReps([1,1,1,1])); // [1]
console.log(removeReps([1,2,3,4,5,6])); // [1,2,3,4,5,6]
