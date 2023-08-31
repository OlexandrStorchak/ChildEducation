import { useEffect, useState } from 'react';
import { animals, emotions, food, fruits, nature, sports, sweets, technology, transportation, weather } from '../../constants/english';
import styles from '../../styles/Sweets.module.css'
import { textToSpeach } from '../../utils/textToSpeach';
export default function Home() {

  const [voices, setVoices] = useState<SpeechSynthesisVoice[] | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  
  useEffect(() => {
    if (selectedVoice) {
      window.localStorage.setItem('voice', selectedVoice.voiceURI)
    }
    if ('speechSynthesis' in window) {
      const availableVoices = window.speechSynthesis.getVoices();
      const filteredVoices = availableVoices.filter(voice => voice.lang.includes('en'));
      setVoices(filteredVoices);
      setSelectedVoice(filteredVoices[0]);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  }, []);

  const speakText = () => {
    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance('This is a test.');
      utterance.voice = selectedVoice;
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('No suitable voice found.');
    }
  };

  return (
    <div className={styles['sweets-wrapper']}>
      <div>
        <p>Select a voice:</p>
        <select onChange={(e) => setSelectedVoice(voices![parseInt(e.target.value)])}>
          {voices?.map((voice, index) => (
            <option key={index} value={index}>
              {voice.name}
            </option>
          ))}
        </select>
        <button onClick={speakText}>Speak</button>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(fruits).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{fruits[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(sweets).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{sweets[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(animals).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{animals[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(weather).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{weather[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(transportation).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{transportation[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(sports).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{sports[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(emotions).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{emotions[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(technology).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{technology[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(food).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{food[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(nature).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item),selectedVoice!)}>{nature[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
    </div>
  );
}
