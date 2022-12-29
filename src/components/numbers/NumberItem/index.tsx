import { playNumber } from '../../../utils/numbers';

interface INumberItem {
  number: number;
  playSelectNumberGame: boolean;
  setSelectedNumber: (number: number) => void;
}

const NumberItem = ({
  number,
  playSelectNumberGame,
  setSelectedNumber,
}: INumberItem) => {
  const handleNumberClick = () => {
    if (playSelectNumberGame === false) playNumber(number);
    setSelectedNumber(number);
  };

  return (
    <div className='number-card-content' onClick={handleNumberClick}>
      <div className='number-card-content-text'>{number}</div>
    </div>
  );
};

export default NumberItem;
