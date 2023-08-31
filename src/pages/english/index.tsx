import { fruits, sweets } from '../../constants/english';
import styles from '../../styles/Sweets.module.css'
import { textToSpeach } from '../../utils/textToSpeach';
export default function Home() {

  return (
    <div className={styles['sweets-wrapper']}>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(sweets).map(item => <div className={styles.item} onClick={() => textToSpeach(String(item))}>{sweets[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(fruits).map(item => <div className={styles.item} onClick={() => textToSpeach(String(item))}>{fruits[item]}</div>)}</>}
      </div>
    </div>
  );
}
