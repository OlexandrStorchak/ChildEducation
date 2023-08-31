export const textToSpeach = async (item: string) => {
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(item)
    const voices = speechSynthesis.getVoices()
    // speech.voice = voices[50]
    speech.rate = 0.8;
    speechSynthesis.speak(speech)
  } else {
    alert('Text-to-speech is not supported in this browser.')
  }
}
