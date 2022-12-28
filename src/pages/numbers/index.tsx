import { useState } from 'react';
import NumberItem from '../../components/numbers/NumberItem';
import _ from 'lodash';
import { numbersArray } from '../../constants';


const Numbers = () => {
  const [numbers, setNumbers] = useState<number[]>(numbersArray);

  return (
    <>
      <div className='numbers-buttons'>
        <button onClick={() => setNumbers(numbersArray)}>
          Скинути
        </button>
        <button onClick={() => setNumbers(_.shuffle(numbers))}>
          Перемішати
        </button>
      </div>
      <div className='numbers-container'>
        <div className='numbers-cards'>
          {numbers.map((number) => {
            return (
              <div key={number} className='number-card'>
                <NumberItem number={number} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Numbers;
