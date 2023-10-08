export module Chess {
    enum ChessPieces {
        Rook = "R",
        Knight = "K",
        Bishop = "B",
        Queen = "Q",
        King = "K",
        Pawn = "P",
        Empty = " ",
    }
    
    export class Board {
        board: ChessPieces[][];
        constructor() {
            const board: ChessPieces[][] = [
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

        public getBoard(): string[][] {
            return this.board;
        }

        public printBoard(): void {
            for(let i: number = 0; i < 8; i++) {
                for(let j: number = 0; j < 8; j++) {
                    console.log(this.board[i][j]);
                }
            }
        }
    }

    // export class Tiles extends Board {

    // }
}