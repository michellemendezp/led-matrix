input.onButtonPressed(Button.A, function () {
    led.unplot(HORIZONTAL, VERTICAL)
    HORIZONTAL += -1
    if (HORIZONTAL < H_min) {
        HORIZONTAL = H_min
    }
})
input.onPinPressed(TouchPin.P2, function () {
    led.unplot(HORIZONTAL, VERTICAL)
    VERTICAL += -1
    if (VERTICAL < Min) {
        VERTICAL = Min
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(HORIZONTAL, VERTICAL)
    HORIZONTAL += 1
    if (HORIZONTAL > H_max) {
        HORIZONTAL = H_max
    }
})
input.onPinPressed(TouchPin.P1, function () {
    led.unplot(HORIZONTAL, VERTICAL)
    VERTICAL += 1
    if (VERTICAL > Max) {
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
