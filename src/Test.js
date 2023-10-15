class Test extends Phaser.Scene {
    constructor() {
        super('testScene')
    }

    preload() {
        this.load.path = 'assets/'
        this.load.image('cross', 'cross.png')
    }

    create() {
        // set up cursors keys
        this.cursors = this.input.keyboard.createCursorKeys()

        // create group to handle all cross assets
        this.crossGroup = this.add.group()

        // set key delay (in ms for checkDown method)
        this.keyDelay = 350

        // GUI text
        this.childCount = this.add.text(width / 2, 32, '').setOrigin(0.5)
    }

    update() {
        // yes, each of these keyboard checks uses a different syntax 🤷🏻‍♂️
        if(Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
            let cross = this.add.sprite(width / 5, height, 'cross').setScale(2)
            cross.tint = 0xFACADE
            this.crossGroup.add(cross)
        }

        if(Phaser.Input.Keyboard.JustUp(this.cursors.space)) {
            let cross = this.add.sprite(width / 5 * 2, height, 'cross').setScale(2)
            cross.tint = 0xDDAA11
            this.crossGroup.add(cross)
        }

        if(this.cursors.space.isDown) {
            let cross = this.add.sprite(width / 5 * 3, height, 'cross').setScale(2)
            cross.tint = 0x2233FF
            this.crossGroup.add(cross)
        }

        if(this.input.keyboard.checkDown(this.cursors.space, this.keyDelay)) {
            let cross = this.add.sprite(width / 5 * 4, height, 'cross').setScale(2)
            cross.tint = 0xAAFF88
            this.crossGroup.add(cross)
        }

        // run updates on group children
        this.crossGroup.incY(-2)    
        this.crossGroup.children.each(this.checkBounds, this)

        // update text to show current active children in group
        this.childCount.text = `Active Children: ${ this.crossGroup.countActive() }`
    }

    // kill our group children if they cross the top of the screen 🔪👶
    checkBounds(childCross) {
        if(childCross.y < 0) { childCross.destroy() }
    }
}