export const textToSpeach = async (item: string) => {
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(item)
    const voices = speechSynthesis.getVoices()
    const index = voices.findIndex((v) => v.lang !== 'en-US');
    speech.voice = voices[index];
    speech.rate = 0.8;
    speechSynthesis.speak(speech)
  } else {
    alert('Text-to-speech is not supported in this browser.')
  }
}
