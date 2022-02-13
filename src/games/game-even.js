import engine from '../index.js';
import randomNumber from '../generateRandom.js';

// Правила игры и проверка числа
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

// Логика игры
const gameQuestionAnswer = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(gameRules, gameQuestionAnswer);
