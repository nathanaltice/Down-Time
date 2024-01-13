// Nathan Altice
// Created: 10/15/23
// Updated: 1/13/24
// Demonstrates object groups and four keyboard input types: JustDown, JustUp, isDown, checkDown

let config = {
    parent: 'game-canvas',
    type: Phaser.WEBGL,
    width: 480,
    height: 640,
    scene: [ Test ]
}

const game = new Phaser.Game(config)

const { width, height } = game.config