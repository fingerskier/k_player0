// this import is how we tie this scene to the game instance
import k from "../instance/game.js";


export default function HelloWorld() {
  const player = k.add([
    k.rect(32, 64,),
    k.pos(0.5*k.width(), 0.5*k.height()),
    k.body(),
    // k.solid(),
  ])


  k.add([
    k.pos(0.5 * k.width(), 0.5 * k.height()),
    k.text('Hello World', 16),
    k.origin('center'),
    k.body(),
    k.solid(),
  ])


  k.add([
    k.pos(0, k.height()-5),
    k.rect(k.width(), 50),
    k.solid(),
  ])
}