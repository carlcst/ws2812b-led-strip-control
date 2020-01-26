let strip = light.createStrip(pins.D13, 150)
strip.setAll(0x0000ff)
forever(function () {
    if (input.touchA5.isPressed()) {
        strip.setAll(0x0000ff)
    } else {
        strip.showAnimation(light.runningLightsAnimation, 1000)
    }
})
