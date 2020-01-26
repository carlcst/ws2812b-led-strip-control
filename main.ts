let strip = light.createStrip(pins.D13, 150)
strip.setAll(0x0000ff)
forever(function () {
    strip.showAnimation(light.rainbowAnimation, 5000)
    strip.showAnimation(light.cometAnimation, 5000)
    strip.showAnimation(light.theaterChaseAnimation, 5000)
})
