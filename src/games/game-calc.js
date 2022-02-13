import newGame from '../index.js';
import generateRandom from '../generateRandom.js';

const operators = ['+', '-', '*'];

// calculating
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

// game task
const task = 'What is the result of the expression?';

// game logic
const gameQuestionAnswer = () => {
  const num1 = generateRandom(1, 20);
  const num2 = generateRandom(1, 20);
  const operator = operators[generateRandom(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);
  return [question, String(answer)];
};

export default () => newGame(task, gameQuestionAnswer);
