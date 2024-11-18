

//block = "Math Riddles"
namespace MathRiddle{


    //block = "Ask a riddle"
    export function askRiddle(): boolean{

        let opA = randint(1,15)
        let opB = randint(1,15)
        let mathOp = randOp()

        switch(mathOp){
            case 1:
            opA = Math.constrain(opA, 1, 10)
            opB = Math.constrain(opB, 1, 10)
        }

        return 0
    }

    function randOp(): number{
        // 1:"+", 2:"-", 3:"*", 4:"/"
        return randint(1, 4)
    }
}