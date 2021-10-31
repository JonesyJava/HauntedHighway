export function speak(msg) {
  const sp = new SpeechSynthesisUtterance(msg);
  [sp.voice] = speechSynthesis.getVoices()
  speechSynthesis.speak(sp)
}
