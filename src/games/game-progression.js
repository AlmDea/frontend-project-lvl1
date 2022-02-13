import engine from '../index.js';
import randomNumber from '../generateRandom.js';

// buildMathProgression
const buildProgression = (begin, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(begin + i * step);
  }
  return result;
};

// Правила игры
const gameRules = 'What number is missing in the progression?';

//
const progressionLength = 10;
const maxBeginItem = 100;
const maxStep = 5;

// Логика игры
const gameQuestionAnswer = () => {
  const firstItem = randomNumber(0, maxBeginItem);
  const progressionStep = randomNumber(1, maxStep);
  const progression = buildProgression(firstItem, progressionStep, progressionLength);
  const hiddenItemIndex = randomNumber(0, progressionLength - 1);
  const answer = progression[hiddenItemIndex];
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

export default () => engine(gameRules, gameQuestionAnswer);
