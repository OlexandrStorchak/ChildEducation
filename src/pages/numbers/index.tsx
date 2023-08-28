import { useContext, useEffect, useState } from 'react';
import NumberItem from '../../components/numbers/NumberItem';
import _ from 'lodash';
import { numbersArray } from '../../constants';
import {
  onTryAgain,
  onWin,
  findNumberGame,
  pickNumberGameCheck,
} from '../../utils/numbers';
import { AuthContext } from '../../context/AuthContext';

const Numbers = () => {
  const { user } = useContext(AuthContext);
  const [findNumberDissabled, setFindNumberDissabled] = useState(() => false)
  const [numbers, setNumbers] = useState<number[]>(() => numbersArray);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [number, setNumber] = useState<number | null>(null);
  const [playSelectNumberGame, setPlaySelectNumberGame] =
    useState<boolean>(false);

  const resetHandling = () => {
    setPlaySelectNumberGame(false);
    setFindNumberDissabled(false)
    setNumbers(numbersArray);
  };

  const onShuffleHandling = () => {
    setNumbers(_.shuffle(numbers));
  };

  const startSelectNumberGame = () => {
    setFindNumberDissabled(true)
    findNumberGame(setPlaySelectNumberGame, setNumber);
    onShuffleHandling();
  };

  useEffect(() => {
    if (playSelectNumberGame) {
      if (pickNumberGameCheck(number!, selectedNumber!)) {
        onWin();
        setNumbers([number!]);
        setFindNumberDissabled(false)
        setTimeout(() => {
          startSelectNumberGame();
        }, 2500);
      } else {
        onTryAgain();
        setNumbers([number!]);
        setTimeout(() => {
          startSelectNumberGame();
        }, 4100);
      }
    }
  }, [selectedNumber]);

  return (
    <>
      <div className='numbers-buttons'>
        <button onClick={startSelectNumberGame} disabled={findNumberDissabled}>Знайди цифру</button>
        <button onClick={resetHandling}>Скинути</button>
        <button onClick={onShuffleHandling}>Перемішати</button>
      </div>
      <div className='numbers-container'>
        <div className='numbers-cards'>
          {numbers.map((number) => {
            return (
              <div key={number} className='number-card'>
                <NumberItem
                  number={number}
                  setSelectedNumber={setSelectedNumber}
                  playSelectNumberGame={playSelectNumberGame}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Numbers;
