// this import is how we tie this scene to the game instance
import k from "../instance/game.js";

const level1 = [
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                                                                          ',
  '                  ===                                                     ',
  '                                                                          ',
  '        ===                                                               ',
  '                        ==                                                ',
  '      >                                                             <     ',
  '==========================================================================',
]


export default function Level() {
  const player = k.add([
    k.sprite('tiles', {
      animSpeed: 0.1,
      frame: 300,
    }),
    k.pos(0.5*k.width(), 0.5*k.height()),
    k.origin('center'),
    k.scale(1),
    k.body(),
  ])


  k.addLevel(level1, {
    width: 16,
    height: 16,
    '=': [
      k.sprite('tiles', { frame: 65 }),
      k.solid(),
    ],
    '<': [
      k.sprite('tiles', { frame: 92 }),
    ],
    '>': [
      k.sprite('tiles', { frame: 93 }),
    ],
  })


  k.keyDown('left', ()=>{
    console.log('move left')
    player.move(-100, 0)
  })


  k.keyPress('left', ()=>{
    console.log('lefting')
    player.scale.x = -1
    player.play('run')
  })


  k.keyRelease('left', ()=>{
    player.play('idle')
  })


  k.keyDown('right', ()=>{
    console.log('move right')
    player.move(100, 0)
  })


  k.keyPress('right', ()=>{
    console.log('righting')
    player.scale.x = 1
    player.play('run')
  })


  k.keyRelease('right', ()=>{
    player.play('idle')
  })


  k.keyPress('space', ()=>{
    player.jump(350)
  })


  player.action(()=>{
    k.camPos(player.pos)
  })
}