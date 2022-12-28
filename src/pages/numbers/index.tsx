import { useState } from 'react';
import NumberItem from '../../components/numbers/NumberItem';
import _ from 'lodash';
import { numbersArray } from '../../constants';
import { Zoom, Bounce, AttentionSeeker } from 'react-awesome-reveal';

const Numbers = () => {
  const [numbers, setNumbers] = useState<number[]>(numbersArray);

  return (
    <>
      <div className='numbers-buttons'>
        <button onClick={() => setNumbers(numbersArray)}>Скинути</button>
        <button onClick={() => setNumbers(_.shuffle(numbers))}>
          Перемішати
        </button>
      </div>
      <div className='numbers-container'>
        <Zoom>
          <div className='numbers-cards'>
            {numbers.map((number) => {
              return (
                <Bounce className='number-card' key={number}>
                  <div key={number} className='number-card'>
                    <AttentionSeeker effect='tada' duration={2000} key={number}>
                      <NumberItem number={number} />
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
