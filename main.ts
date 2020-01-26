let strip = light.createStrip(pins.D13, 150)
strip.setAll(0x0000ff)
forever(function () {
    if (input.touchA5.isPressed()) {
        strip.setAll(0xff0000)
    }
    if (input.touchA4.isPressed()) {
        strip.setAll(0x00ff00)
    }
    if (input.touchA3.isPressed()) {
        strip.setAll(0x0000ff)
    }
})
