// this import is how we tie this scene to the game instance
import k from "../instance/game.js";


export default function Animation() {
  const player = k.add([
    k.sprite('tiles', {
      animSpeed: 0.1,
      frame: 300,
    }),
    k.pos(0.5*k.width(), 0.5*k.height()),
    k.origin('center'),
    k.scale(1),
  ])


  k.keyPress('left', ()=>{
    console.log('lefting')
    player.scale.x = -1
    player.play('run')
  })


  k.keyRelease('left', ()=>{
    player.play('idle')
  })


  k.keyPress('right', ()=>{
    console.log('righting')
    player.scale.x = 1
    player.play('run')
  })


  k.keyRelease('right', ()=>{
    player.play('idle')
  })
}