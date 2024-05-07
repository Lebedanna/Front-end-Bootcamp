// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате: {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

//  DONE

function atm(sum) {
  const banknotes = [5000, 2000, 1000, 500, 200, 100, 50];
  const limit = 20;
  let banknotesCount = 0;
  let result = {};
  let currentSum = sum;

  for (let i = 0; i < banknotes.length; i++) {
    while (currentSum >= banknotes[i] && banknotesCount <= limit) {
      result[banknotes[i]] = (result[banknotes[i]] || 0) + 1;
      currentSum -= banknotes[i];
      banknotesCount++;
    }
  }

  if (currentSum !== 0) {
    return {error: 'Incorrect value'};
  }

  if (banknotesCount > limit) {
    return {error: 'Limit exceeded'};
  }

  return result
}

console.log(atm(8350)) // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
console.log(atm(2570)) // Incorrect value
console.log(atm(100500)) // Limit exceeded
console.log(atm(10050)) // { '50': 1, '5000': 2 }



