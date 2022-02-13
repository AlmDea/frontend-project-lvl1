import newGame from '../index.js';
import generateRandom from '../generateRandom.js';

// game task
const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

// game logic
const gameQuestionAnswer = () => {
  const startNumber = 1;
  const maxNumberForGame = 100;
  const question = generateRandom(startNumber, maxNumberForGame);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => newGame(gameQuestion, gameQuestionAnswer);
export default brainEven;
