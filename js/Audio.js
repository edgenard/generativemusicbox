
const MyAudio = {
  audioList: undefined,
  audioContext: new window.AudioContext(),
  volume: undefined,
  init: function(audioList) {
    this.audioList = audioList
    this.volume = this.audioContext.createGain()
    this.volume.gain.value = 1
    this.volume.connect(this.audioContext.destination)
  },

  play: function (track, volume) {
    const sound = this.audioContext.createBufferSource();
    this.volume.gain = volume
    sound.connect(this.volume)
    sound.buffer = this.audioList[track]
    sound.start(0)
    sound.stop(this.audioContext.currentTime + 1)
  }
}
