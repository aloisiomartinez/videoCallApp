class Business {
  constructor({room, media, view }) {
   this.room = room
   this.media = media
   this.view = view

   this.currentStream = {}
  }

  static initialize(deps) {
   const instance = new Business(deps)
   return instance._init()
  }

  //Private
  _init() {
   this.currentStream = this.media.getCamera()
   console.log('init!', this.currentStream)
  }

}