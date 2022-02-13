import { question } from 'readline-sync';
import newGame from '../index.js';
import generateRandom from '../generateRandom.js';

// game task
const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

// game logic
const gameQuestionAnswer = () => {
  const startNumber = 1;
  const maxNumberForGame = 199;
  const question = generateRandom(startNumber, maxNumberForGame);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const prime = () => newGame(gameQuestion, gameQuestionAnswer);
export default prime;
