basic.forever(function () {

    let a = input.buttonIsPressed(Button.A)
    if (a = true) {
        let b = input.buttonIsPressed(Button.A)
        if (b != a) {
            music.playTone(100, 200)
        }
    }

})

