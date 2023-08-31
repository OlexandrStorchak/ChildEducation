import { fruits, sweets } from '../../constants/english';
import styles from '../../styles/Sweets.module.css'
export default function Home() {

  const onItemClick = (item: string) => {
    console.log('item - ', item)
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
