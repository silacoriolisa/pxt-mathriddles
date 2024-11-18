

//block = "Math Riddles"
namespace MathRiddle{


    //block = "Ask a riddle"
    export function askRiddle(): void{

        let mathOp = randOp()
        let operator, opA, opB
        switch(mathOp){
            case 1:
                opA = randint(1, 15)
                opB = randint(1, 15)
                operator = "+"
            case 2:
                opA = randint(1, 15)
                opB = randint(1, opA)
                operator = "-"
            case 3:
                opA = randint(1, 10)
                opB = randint(1, (10 - opA + 1))
                operator = "*"
            case 4:
                
        }
        //show riddle
        
        basic.showString(convertToText(opA) + operator + convertToText(opB))

    }

    function randOp(): number{
        // 1:"+", 2:"-", 3:"*", 4:"/"
        //Division needs to be thought through
        return randint(1, 3)
    }
}