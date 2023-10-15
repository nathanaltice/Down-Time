// Nathan Altice
// 10/15/23
// Demonstrates object groups and four keyboard input types: JustDown, JustUp, isDown, checkDown

let config = {
    type: Phaser.WEBGL,
    width: 480,
    height: 640,
    scene: [ Test ]
}

const game = new Phaser.Game(config)

const { width, height } = game.config