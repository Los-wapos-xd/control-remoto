radio.setGroup(132)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(8)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(9)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendNumber(4)
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(3)
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.sendNumber(2)
    } else if (input.isGesture(Gesture.ScreenUp)) {
        radio.sendNumber(132)
    } else if (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(1)
    } else {
        radio.setGroup(132)
    }
})
