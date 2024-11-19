//%block="Math Riddle"
namespace MathRiddle{

    export enum PuzzleBlockProperty {
        //% block=Y
        Y,
        //% block=N
        N
    }

    export class Riddle{
        private riddletxt: string;
        private result: number;
        private answer: number;
        private score: boolean;
        private init: boolean;
 
        constructor (riddletxt: string, result: number, answer: number,score:boolean, init: boolean){
            this.riddletxt = riddletxt;
            this.result = result;
            this.answer = answer;
            this.score = score;
            this.init = init;
        }

        /**
         * Create a new riddle
         * @param this the myRiddle content to regenerate
         */
        //%blockId=create_new_riddle block="%myRiddle|Create a new puzzle to solve"
        public askRiddle(): void{
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
                    opA = randint(1, 30);
                    opB = randint(1, 10);                    
                    while(opA % opB != 0) {
                        opA = randint(1, 30);
                        opB = randint(1, 10);
                    }
                    operator = "/";
                    this.result = opA / opB;
                    break;
            }
            this.riddletxt = (convertToText(opA) + operator + convertToText(opB));
        }

        /**
         * Display the puzzle test
         * @param this the myRiddle content to show
         */
        //%blockId=display_puzzle_text block="%myRiddle|Display puzzle text"
        public showRiddle(): void{
            basic.showString(this.riddletxt); //"?" is automatically displayed when requested for inputs
        }

        /**
         * Display the answer provided by the User
         * @param this the myRiddle content to show
         */
        //%blockId=display_puzzle_answer block="%myRiddle|Display User answer"
        public showAnswer(): void{
            basic.showString(convertToText(this.answer));
        }

        /**
         * Check the answer provided by the User
         * @param this the myRiddle content to verify
         */
        //%blockId=check_puzzle_answer block="%myRiddle|Check User answer"
        public checkAsnwer(): boolean{
            if(this.answer == this.result){
                this.score = true;
            }else{
                this.score = false;
            }
            return this.score
        }

        /**
         * Get the answer provided by the User
         * @param this the myRiddle to save User answer to
         */
        //%blockId=get_puzzle_answer block="%myRiddle|Get User answer"
       public getReply(): void{
        let tens, ones, result = 0;

        tens = this.updateReply(tens);
        basic.pause(200);
        ones = this.updateReply(ones);
        
        this.answer = tens * 10 + ones;
        }

        /**
         * Complete puzzle workflow in one block
         * @param this the myRiddle to show, answer and veriy
         */
        //%blockId=puzzle_workflow block="%myRiddle|Test yourself!"
        public completePuzzleWorkflow(): boolean {
            this.askRiddle();
            this.showRiddle();
            this.getReply();
            this.checkAsnwer()
            return this.score;
        }

        /**
         * Complete puzzle workflow in one block with repetition and result evaluation
         * @param this the myRiddle to show, answer and veriy
         */
        //%block="%myRiddle|Puzzle to solve, repeat %PuzzleBlockProperty"
        public puzzleBlock(repeat: PuzzleBlockProperty): void {

            if(repeat == PuzzleBlockProperty.Y && !this.init){
                    this.askRiddle()
            }
            this.showRiddle();
            this.getReply();
            if (this.checkAsnwer()) {
                basic.showIcon(IconNames.Heart)
            } else {
                basic.showIcon(IconNames.No)
            }
            basic.pause(1000);
            basic.clearScreen()
            basic.pause(300);
        }

        private updateReply(value: number): number{
            while (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
                
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
                basic.showNumber(value);
            }
            basic.showArrow(ArrowNames.East);
            return value;
        }

    }//end of class

    export let myRiddle: Riddle

    function randOp(): number{
        // 1:"+", 2:"-", 3:"*", 4:"/"
        //Division needs to be thought through
        return randint(1, 4);
    }

    //% block="newRiddle"
    //% blockSetVariable=myRiddle
    export function createMyRiddle(): Riddle {
        let myRiddle = new Riddle("no text",0,0,false,false);
        return myRiddle;
    }

}
