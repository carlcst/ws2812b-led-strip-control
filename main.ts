let strip = light.createStrip(pins.D9, 30)
forever(function () {
    strip.showAnimation(light.rainbowAnimation, 200)
})
