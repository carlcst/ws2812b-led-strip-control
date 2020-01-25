strip = light.create_strip(pins.D9, 30)
def on_forever():
    strip.showAnimation(light.rainbow_animation, 200)
forever(on_forever)