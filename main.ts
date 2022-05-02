input.onButtonPressed(Button.A, function () {
    led.unplot(HORIZONTAL, VERTICAL)
    HORIZONTAL += -1
    if (HORIZONTAL < H_min) {
        basic.showIcon(IconNames.Angry)
        basic.clearScreen()
        soundExpression.hello.play()
        HORIZONTAL = H_min
    }
})
input.onPinPressed(TouchPin.P2, function () {
    led.unplot(HORIZONTAL, VERTICAL)
    VERTICAL += -1
    if (VERTICAL < Min) {
        basic.showIcon(IconNames.Angry)
        basic.clearScreen()
        soundExpression.slide.play()
        VERTICAL = Min
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(HORIZONTAL, VERTICAL)
    HORIZONTAL += 1
    if (HORIZONTAL > H_max) {
        basic.showIcon(IconNames.Angry)
        basic.clearScreen()
        soundExpression.soaring.play()
        HORIZONTAL = H_max
    }
})
input.onPinPressed(TouchPin.P1, function () {
    led.unplot(HORIZONTAL, VERTICAL)
    VERTICAL += 1
    if (VERTICAL > Max) {
        basic.showIcon(IconNames.Angry)
        basic.clearScreen()
        soundExpression.giggle.play()
        VERTICAL = Max
    }
})
let H_min = 0
let H_max = 0
let HORIZONTAL = 0
let Max = 0
let Min = 0
let VERTICAL = 0
soundExpression.twinkle.play()
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
VERTICAL = 0
Min = 0
Max = 4
HORIZONTAL = 0
H_max = 4
H_min = 0
basic.forever(function () {
    led.plot(HORIZONTAL, VERTICAL)
})
