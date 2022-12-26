interface INumberItem {
  number: number;
}

const NumberItem = ({ number }: INumberItem) => {
  const handleOnclick = () => {
    const audio = new Audio(`/numbers/${number}ua.mp3`);
    audio.play();
  };

  return (
    <div className='number-card-content' onClick={handleOnclick}>
      <div className='number-card-content-text'>{number}</div>
    </div>
  );
};

export default NumberItem;
