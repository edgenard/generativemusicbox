const SOUND_URLS = [
  'js/audio/A4.mp3',
  'js/audio/A5.mp3',
  'js/audio/C4.mp3',
  'js/audio/C5.mp3',
  'js/audio/D4.mp3',
  'js/audio/D5.mp3',
  'js/audio/E4.mp3',
  'js/audio/E5.mp3',
  'js/audio/G4.mp3',
  'js/audio/G5.mp3'
]

window.onload = function () {
  const canvas = document.getElementById('canvas')
  const view = new View(canvas)

  view.clearDisplay()// Hello
  const finishedLoading = (bufferList) => {
    console.log("calling finishedLoading")
    console.log(bufferList)
    MyAudio.init(bufferList)
    canvas.addEventListener('click', (event) => {
      view.handleClick(event)
    })
    setInterval(view.updateDisplay.bind(view), view.frameRate)
  }

  const bufferLoader = new BufferLoader(MyAudio.audioContext, SOUND_URLS, finishedLoading)
  bufferLoader.load()

}
