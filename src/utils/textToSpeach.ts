
export const textToSpeach = (item: string) => {
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
