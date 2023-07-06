import { useContext, useEffect, useState } from 'react';
import NumberItem from '../../components/numbers/NumberItem';
import _ from 'lodash';
import { numbersArray } from '../../constants';
import { Zoom, Bounce, AttentionSeeker } from 'react-awesome-reveal';
import {
  onTryAgain,
  onWin,
  findNumberGame,
  pickNumberGameCheck,
} from '../../utils/numbers';
import { AuthContext } from '../../context/AuthContext';

const Numbers = () => {
  const { user } = useContext(AuthContext);
  const [numbers, setNumbers] = useState<number[]>(numbersArray);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [number, setNumber] = useState<number | null>(null);
  const [playSelectNumberGame, setPlaySelectNumberGame] =
    useState<boolean>(false);

  const resetHandling = () => {
    setPlaySelectNumberGame(false);
    setNumbers(numbersArray);
  };

  const onShuffleHandling = () => {
    setNumbers(_.shuffle(numbers));
  };

  const startSelectNumberGame = () => {
    findNumberGame(setPlaySelectNumberGame, setNumber);
  };

  useEffect(() => {
    if (playSelectNumberGame)
      if (pickNumberGameCheck(number!, selectedNumber!)) {
        onWin();
        setNumbers([number!]);
        setTimeout(() => {
          startSelectNumberGame();
          onShuffleHandling();
        }, 2500);
      } else {
        onTryAgain();
        setNumbers([number!]);
        setTimeout(() => {
          onShuffleHandling();
          startSelectNumberGame();
        }, 4100);
      }
  }, [selectedNumber]);

  return (
    <>
      <div className='numbers-buttons'>
        <button onClick={startSelectNumberGame}>Знайди цифру</button>
        <button onClick={resetHandling}>Скинути</button>
        <button onClick={onShuffleHandling}>Перемішати</button>
      </div>
      <div className='numbers-container'>
        <Zoom>
          <div className='numbers-cards'>
            {numbers.map((number) => {
              return (
                <Bounce className='number-card' key={number}>
                  <div key={number} className='number-card'>
                    <AttentionSeeker
                      effect='tada'
                      duration={2000}
                      key={number}
                    >
                      <NumberItem
                        number={number}
                        setSelectedNumber={setSelectedNumber}
                        playSelectNumberGame={playSelectNumberGame}
                      />
                    </AttentionSeeker>
                  </div>
                </Bounce>
              );
            })}
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default Numbers;
