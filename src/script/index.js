import k from "./instance/game.js";
import Animation from "./scene/animation.js";
import Collision from "./scene/collision.js";
import Components from "./scene/components.js";
import HelloWorld from "./scene/helloWorld.js";
import Level from "./scene/level.js";


k.loadSprite('tiles', './monochrome_tilemap.png', {
  sliceX: 20,
  sliceY: 20,
  anims: {
    idle: { from: 300, to: 300 },
    run: { from: 301, to: 302 },
  }
})


window.addEventListener('load', event=>{
  console.log('window loaded')

  k.scene('animation', Animation)
  k.scene('collision', Collision)
  k.scene('components', Components)
  k.scene('hello-world', HelloWorld)
  k.scene('level', Level)


  k.scene('main', ()=>{
    k.go('components')
  })

  k.start('main')
})