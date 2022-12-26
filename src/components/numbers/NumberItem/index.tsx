import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface INumberItem {
  number: number;
}

const NumberItem = ({ number }: INumberItem) => {
  const handleOnclick = () => {
    const audio = new Audio(`/numbers/${number}ua.mp3`);
    audio.play();
  };

  return (
    <Card
      onClick={handleOnclick}
      sx={{ backgroundColor: 'rgb(135, 59, 160)', textAlign: 'center' }}
    >
      <CardActionArea>
        <CardContent sx={{ display: 'block', width: '150px', height: '150px' }}>
          <Typography variant='h1' color='whitesmoke'>
            {number}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NumberItem;
