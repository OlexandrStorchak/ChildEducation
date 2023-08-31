
export const textToSpeach = async (item: string) => {
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(item)
    const voices = speechSynthesis.getVoices()
    const voiceIndex = voices.findIndex((v) => v.voiceURI === 'Google UK English Female') //Google UK English Female
    speech.voice = voices[voiceIndex]
    speech.rate = 0.8;
    speechSynthesis.speak(speech)
  } else {
    alert('Text-to-speech is not supported in this browser.')
  }
}
