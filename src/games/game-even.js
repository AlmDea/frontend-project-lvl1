import runGameEngine from '../index.js';
import generateRandom from '../generateRandom.js';

// Правила игры и проверка числа
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

// Логика игры
const gameQuestionAnswer = () => {
  const question = generateRandom(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGameEngine(gameRules, gameQuestionAnswer);
