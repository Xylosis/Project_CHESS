export module Chess {
    export enum ChessPieces {
        Rook = "R",
        Knight = "N",
        Bishop = "B",
        Queen = "Q",
        King = "K",
        Pawn = "P",
        Empty = " ",
    }
    
    export class Board {
        board: ChessPieces[][];
        constructor() {
            this.board = [
                [ChessPieces.Rook,ChessPieces.Knight,ChessPieces.Bishop,ChessPieces.Queen,ChessPieces.King,ChessPieces.Bishop,ChessPieces.Knight,ChessPieces.Rook],
                [ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn],
                [ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty],
                [ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty],
                [ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty],
                [ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty,ChessPieces.Empty],
                [ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn,ChessPieces.Pawn],
                [ChessPieces.Rook,ChessPieces.Knight,ChessPieces.Bishop,ChessPieces.Queen,ChessPieces.King,ChessPieces.Bishop,ChessPieces.Knight,ChessPieces.Rook],
            ];
        }

        public getBoard(): ChessPieces[][] {
            return this.board;
        }

        public printBoard(): void {
            for(let i: number = 0; i < 8; i++) {
                const tempArray: ChessPieces[] = [];
                for(let j: number = 0; j < 8; j++) {
                    tempArray.push(this.board[i][j]);
                    //console.log(this.board[i][j]);
                }
                console.log(tempArray.join(" "));
            }
        }
    }

    // export class Tiles extends Board {

    // }
}

