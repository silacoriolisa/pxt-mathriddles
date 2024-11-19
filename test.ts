let myRiddle = MathRiddle.createMyRiddle()
basic.forever(function () {
    myRiddle.askRiddle()
    myRiddle.showRiddle()
    myRiddle.getReply()
    if (myRiddle.checkAsnwer()) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(200)
})
