import engine from '../index.js';
import generateRandom from '../generateRandom.js';

// Правила игры
const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

// Проверка
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

// Логика игры
const gameQuestionAnswer = () => {
  const num1 = generateRandom(1, 20);
  const num2 = generateRandom(1, 20);
  const operator = operators[generateRandom(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);
  return [question, String(answer)];
};

export default () => engine(gameRules, gameQuestionAnswer);
