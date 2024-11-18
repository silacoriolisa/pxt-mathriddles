
//% color="#AA278D" weight=100 block="Math Riddles"
namespace MathRiddle{


    //%block = "Ask a riddle"
    export function askRiddle(): number{

        let mathOp = randOp()
        let operator, opA, opB, result
        switch(mathOp){
            case 1:
                opA = randint(1, 15)
                opB = randint(1, 15)
                operator = "+"
                result = opA + opB
                break
            case 2:
                opA = randint(1, 15)
                opB = randint(1, opA)
                operator = "-"
                result = opA - opB
                break
            case 3:
                opA = randint(1, 10)
                opB = randint(1, (10 - opA + 1))
                operator = "*"
                result = opA * opB
                break
            case 4:
                
        }
        //show riddle
        basic.showString(convertToText(opA) + operator + convertToText(opB))
        basic.showString("?")
        basic.pause(500)
        return result

    }

    //%block = "Wait for reply"
    export function waitForReply(): number{
        basic.clearScreen()
        let tens, ones, result = 0
        while (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
            if(input.buttonIsPressed(Button.A)){
                if( tens < 9 ){
                    tens++
                }else{
                    tens = 0
                }
            }else if(input.buttonIsPressed(Button.B)){
                if (tens > 0) {
                    tens--
                } else {
                    tens = 9
                }
            }
            basic.showNumber(tens)
        }
        while (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
            if (input.buttonIsPressed(Button.A)) {
                if (ones < 9) {
                    ones++
                } else {
                    ones = 0
                }
            }else if (input.buttonIsPressed(Button.B)) {
            if (ones > 0) {
                ones--
            } else {
                ones = 9
            }
            basic.showNumber(ones)
            }
        }
        result = tens * 10 + ones
        basic.showNumber(result)
        return result
    }

    function randOp(): number{
        // 1:"+", 2:"-", 3:"*", 4:"/"
        //Division needs to be thought through
        return randint(1, 3)
    }
}