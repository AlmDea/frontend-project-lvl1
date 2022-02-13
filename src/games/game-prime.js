import engine from '../index.js';
import randomNumber from '../generateRandom.js';

// Правила игры и проверка числа
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Логика игры
const gameQuestionAnswer = () => {
  const question = randomNumber(1, 199);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => engine(gameRules, gameQuestionAnswer);
