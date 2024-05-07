// Напишите функцию, которая будет принимать координаты числа в треугольника Паскаля и будет возвращать значение по координатам.
// Если вы не знаете, что такое треугольник Паскаля, советую прочитать перед выполнение задания.
// https://cdn.fishki.net/upload/post/201502/04/1414683/947eb978f710426fd0702fd119da506b.gif тут можно посмотреть наглядно принцип работы.
// Предположим, что начальные координаты 0,0.
// Тут, возможно, поможет рекурсия.

//  DONE

function pascalsTriangle(x, y) {
    if (x === 0) {
        return 1;
    }
    if (y === 0 || y === x) {
        return 1;
    }
    return pascalsTriangle(x - 1, y - 1) + pascalsTriangle(x - 1, y);
}

console.log(pascalsTriangle(3, 2)); //  3
console.log(pascalsTriangle(5, 4)); //  5
console.log(pascalsTriangle(1, 1)); //  1
console.log(pascalsTriangle(5, 3)); //  10

//      1            0
//     1 1           1
//    1 2 1          2
//   1 3 3 1         3
//  1 4 6 4 1        4
// 1 5 10 10 5 1     5