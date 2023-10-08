export module Chess {
    export class Board {
        constructor() {
            const board: string[][] = [
                ["R","N","B","Q","K","B","N","R"],
                ["P","P","P","P","P","P","P","P"],
                [" "," "," "," "," "," "," "," "],
                [" "," "," "," "," "," "," "," "],
                [" "," "," "," "," "," "," "," "],
                [" "," "," "," "," "," "," "," "],
                ["P","P","P","P","P","P","P","P"],
                ["R","N","B","Q","K","B","N","R"],
            ];
        }
    }

    export class Tiles extends Board {

    }
}