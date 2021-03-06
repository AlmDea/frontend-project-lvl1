import runGameEngine from '../index.js';
import generateRandom from '../generateRandom.js';

// Правила игры
const gameRules = 'What number is missing in the progression?';

// Проверка
const buildProgression = (begin, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(begin + i * step);
  }
  return result;
};

// Логика игры
const progressionLength = 10;
const maxBeginItem = 100;
const maxStep = 5;

const gameQuestionAnswer = () => {
  const firstItem = generateRandom(0, maxBeginItem);
  const progressionStep = generateRandom(1, maxStep);
  const progression = buildProgression(firstItem, progressionStep, progressionLength);
  const hiddenItemIndex = generateRandom(0, progressionLength - 1);
  const answer = progression[hiddenItemIndex];
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

export default () => runGameEngine(gameRules, gameQuestionAnswer);
