import newGame from '../index.js';
import generateRandom from '../generateRandom.js';

// buildMathProgression
const buildProgression = (begin, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(begin + i * step);
  }
  return result;
};

// task
const task = 'What number is missing in the progression?';

//
const progressionLength = 10;
const maxBeginItem = 100;
const maxStep = 5;

// game logic
const genGameData = () => {
  const firstItem = generateRandom(0, maxBeginItem);
  const progressionStep = generateRandom(1, maxStep);
  const progression = buildProgression(firstItem, progressionStep, progressionLength);
  const hiddenItemIndex = generateRandom(0, progressionLength - 1);
  const answer = progression[hiddenItemIndex];
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

export default () => newGame(task, genGameData);
