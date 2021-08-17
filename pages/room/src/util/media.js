class Media {
 async getCamera(audio = false, video = true) {
  return navigator.getUserMedia({
   video,
   audio
  })
 }
}