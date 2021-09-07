// this import is how we tie this scene to the game instance
import k from "../instance/game.js";


export default function HelloWorld() {
  k.add([
    k.pos(0.5 * k.width(), 0.5 * k.height()),
    k.text('Hello World', 16),
    k.origin('center'),
  ])
}