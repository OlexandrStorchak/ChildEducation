import { useEffect, useState } from 'react';
import { animals, emotions, food, fruits, nature, sports, sweets, technology, transportation, weather } from '../../constants/english';
import styles from '../../styles/Sweets.module.css'
import { textToSpeach } from '../../utils/textToSpeach';
export default function Home() {

  const [voices, setVoices] = useState<SpeechSynthesisVoice[] | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState<number | null>(0);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const storedVoice = window.localStorage.getItem('voice')
      const availableVoices = window.speechSynthesis.getVoices()
      const filteredVoices = availableVoices.filter(voice => voice.lang.includes('en-US'))
      const voiceIndex = availableVoices.findIndex((v) => v.voiceURI === storedVoice)
      setSelectedVoiceIndex(parseInt(window.localStorage.getItem('voiceIndex')!))
      setVoices(filteredVoices)
      setSelectedVoice(availableVoices[voiceIndex])
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  }, []);

  useEffect(() => {
    if (selectedVoice) {
      window.localStorage.setItem('voice', selectedVoice.voiceURI)
    }
  }, [selectedVoice])

  return (
    <div className={styles['sweets-wrapper']}>
      <div className={styles.sweets}>
        <select onChange={(e) => {
          setSelectedVoice(voices![parseInt(e.target.value)])
          setSelectedVoiceIndex(parseInt(e.target.value))
          window.localStorage.setItem('voiceIndex', e.target.value)
        }}
          value={selectedVoiceIndex!}>
          {voices?.map((voice, index) => (
            <option key={index} value={index}>
              🗣️ {voice.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(fruits).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{fruits[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(sweets).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{sweets[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(animals).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{animals[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(weather).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{weather[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(transportation).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{transportation[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(sports).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{sports[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(emotions).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{emotions[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(technology).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{technology[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(food).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{food[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.sweets}>
        {<>{Object.keys(nature).map(item => <div key={item} className={styles.item} onClick={() => textToSpeach(String(item), selectedVoice!)}>{nature[item]}</div>)}</>}
      </div>
      <div className={styles.separator}></div>
    </div>
  );
}
