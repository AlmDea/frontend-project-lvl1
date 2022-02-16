import engine from '../index.js';
import generateRandom from '../generateRandom.js';

// Правила игры
const gameRules = 'Find the greatest common divisor of given numbers.';

// Проверка числа
const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

// Логика игры
const gameQuestionAnswer = () => {
  const num1 = generateRandom(1, 100);
  const num2 = generateRandom(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => engine(gameRules, gameQuestionAnswer);
