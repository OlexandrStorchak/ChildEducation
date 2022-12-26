import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import style from './Number.module.css';

interface INumberItem {
  number: number;
}

const NumberItem = ({ number }: INumberItem) => {
  const handleOnclick = () => {
    const audio = new Audio(`/numbers/${number}ua.mp3`)
    audio.play()
  };

  return (
    <Card className={`${style.numberCard}`} onClick={handleOnclick}>
      <CardActionArea>
        <CardContent className={`${style.numberCardContent}`}>
          <Typography variant='h1' color='whitesmoke'>{number}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NumberItem;
