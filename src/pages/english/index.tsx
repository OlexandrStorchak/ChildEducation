import { fruits, sweets } from '../../constants/english';
import styles from '../../styles/Sweets.module.css'
export default function Home() {

  const onItemClick = (item: string) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(item);
      const voices = speechSynthesis.getVoices();
      speech.voice = voices[66]; //7 9 10 12 17 67
      speech.rate = 0.8;
      speechSynthesis.speak(speech);
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  }

  return (
    <div className={styles['sweets-wrapper']}>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(sweets).map(item => <div className={styles.item} onClick={() => onItemClick(String(item))}>{sweets[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(fruits).map(item => <div className={styles.item} onClick={() => onItemClick(String(item))}>{fruits[item]}</div>)}</>}
      </div>
    </div>
  );
}
