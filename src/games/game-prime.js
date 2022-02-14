<<<<<<< HEAD
import engine from '../index.js';
import randomNumber from '../generateRandom.js';
=======
import newGame from '../index.js';
import generateRandom from '../generateRandom.js';
>>>>>>> 34fb90cd66a4d0ec98e1ad84456a92dfeeca37fa

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
