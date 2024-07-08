input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    cuteBot.moveTime(cuteBot.Direction.forward, 100, 1.5)
    cuteBot.motors(0, 50)
    basic.pause(500)
    cuteBot.stopcar()
    cuteBot.moveTime(cuteBot.Direction.forward, 100, 2)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    # # # # #
    # . . . #
    `)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})
