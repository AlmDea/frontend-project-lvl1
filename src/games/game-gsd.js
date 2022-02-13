import engine from '../index.js';

// Правила игры и проверка числа
const gameRules = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  if (b !== 0) {
    const k = a % b;
    return nod(b, k);
  }
  return a;
};

// Логика игры
const gameQuestionAnswer = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${nod(num1, num2)}`;
  return [question, correctAnswer];
};

export default () => engine(gameRules, gameQuestionAnswer);
