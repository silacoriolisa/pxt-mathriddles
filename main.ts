/**
 * A math learning helper
 *
 */


//%block="Math Riddle"
namespace MathRiddle{

    

    export class Riddle{
        riddletxt: string;
        result: number;
        answer: number;
 
        //%block = "Create a riddle in |$this"
        //%this.defl = myRiddle
        askRiddle(): void{
            let mathOp = randOp();
            let operator, opA, opB;

            switch (mathOp) {
                case 1:
                    opA = randint(1, 15);
                    opB = randint(1, 15);
                    operator = "+";
                    this.result = opA + opB;
                    break;
                case 2:
                    opA = randint(1, 15);
                    opB = randint(1, opA);
                    operator = "-";
                    this.result = opA - opB;
                    break;
                case 3:
                    opA = randint(1, 10);
                    opB = randint(1, (10 - opA + 1));
                    operator = "*";
                    this.result = opA * opB;
                    break;
                case 4:
            }
            this.riddletxt = (convertToText(opA) + operator + convertToText(opB));
        }

        //%block = "Show |$this"
        showRiddle(): void{
            basic.showString(this.riddletxt); //"?" is automatically displayed when requested for inputs
        }

        //%block = "Show answer to |$this"
        showAnswer(): void{
            basic.showString(convertToText(this.answer));
        }

        //%block = "Check answer to |$this"
        checkAsnwer(): boolean{
            if(this.answer == this.result){
                return true
            }else{
                return false
            }
        }

        //%block = "Wait for a reply to |$this"
        getReply(): void{
        let tens, ones, result = 0;

        tens = this.updateReply(tens);
        basic.pause(200);
        ones = this.updateReply(ones);
        
        this.result = tens * 10 + ones;
        }

        private updateReply(value: number): number{
            while (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
                basic.showNumber(value);
                if (input.buttonIsPressed(Button.A)) {
                    if (value < 9) {
                        value++;
                    } else {
                        value = 0;
                    }
                } else if (input.buttonIsPressed(Button.B)) {
                    if (value > 0) {
                        value--;
                    } else {
                        value = 9;
                    }
                }
            }
            basic.showArrow(ArrowNames.East);
            //basic.clearScreen()
            return value;
        }

    //end of class definition
    }

    function randOp(): number{
        // 1:"+", 2:"-", 3:"*", 4:"/"
        //Division needs to be thought through
        return randint(1, 3);
    }

    //% block="newRiddle"
    //% blockSetVariable=myRiddle
    export function createMyRiddle(): Riddle {
        let myRiddle = new Riddle();
        myRiddle.riddletxt = "";
        myRiddle.result = 0;
        myRiddle.answer = 0;
        return myRiddle;
    }

}
