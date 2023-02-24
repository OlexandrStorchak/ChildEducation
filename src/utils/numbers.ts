import _ from 'lodash';

export const playNumber = (number: number) => {
  const audio = new Audio(`/numbers/${number}ua.mp3`);
  audio.play();
};

const playFindNumber = () => {
  const audio = new Audio(`/numbers/findNumberUA.mp3`);
  audio.play();
};

export const findNumberGame = (
  setPlaySelectNumberGame: (play: boolean) => void,
  setNumber: (number: number) => void
) => {
  setPlaySelectNumberGame(true);
  const number = _.random(1, 10);
  playFindNumber();
  setTimeout(() => playNumber(number), 1800);
  setNumber(number);
};

export const onWin = () => {
  const audio = new Audio(`/numbers/winUA.mp3`);
  audio.play();
};

export const onTryAgain = () => {
  const audio = new Audio(`/numbers/tryAgain.mp3`);
  audio.play();
};

export const pickNumberGameCheck = (number: number, selectedNumber: number) =>
  number === selectedNumber;
