import { animals, emotions, food, fruits, nature, sports, sweets, technology, transportation, weather } from '../../constants/english';
import styles from '../../styles/Sweets.module.css'
import { textToSpeach } from '../../utils/textToSpeach';
export default function Home() {

  return (
    <div className={styles['sweets-wrapper']}>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(fruits).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{fruits[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(sweets).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{sweets[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(animals).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{animals[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(weather).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{weather[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(transportation).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{transportation[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(sports).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{sports[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(emotions).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{emotions[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(technology).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{technology[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(food).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{food[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(nature).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item))}>{nature[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
    </div>
  );
}
