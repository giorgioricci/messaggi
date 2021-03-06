input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (facciaFelice))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + (facciaCuore))
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (facciaCacca))
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == facciaFelice) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == facciaTriste) {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == facciaCacca) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == facciaCuore) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("" + (facciaTriste))
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
let facciaCuore = ""
let facciaCacca = ""
let facciaTriste = ""
let facciaFelice = ""
radio.setGroup(5)
music.setVolume(0)
facciaFelice = "facciaFelice"
facciaTriste = "facciaTriste"
facciaCacca = "facciaCacca"
facciaCuore = "facciaCuore"
