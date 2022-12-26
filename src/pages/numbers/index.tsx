import NumberItem from '../../components/numbers/NumberItem';
import { numbers } from '../../constants';

const Numbers = () => {
  return (
    <>
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
