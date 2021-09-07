import k from '../instance/game.js'


export default function big() {
  let biggered = false
  let timer = 0

  return {
    require: ['scale'],

    update() {
      if (biggered) {
        timer -= k.dt()

        if (timer <= 0) this.smallify()
      }
    },

    // custom methods

    isBig() {
      return biggered
    },

    biggify(time=2) {
      this.scale = k.vec2(2)
      timer = time
      biggered = true
    },

    smallify() {
      this.scale = k.vec2(1)
      timer = 0
      biggered = false
    },
  }
}