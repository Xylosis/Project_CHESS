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
    
    enum BoardColors {
        White = "white",
        Black = "black",
    }
    
    let index: number = 0;
    let rotating: BoardColors = BoardColors.White;
    export class Tiles{
        color: BoardColors;
        empty: boolean;
        piece: ChessPieces;
        black_threatened: boolean;
        white_threatened: boolean;
        constructor(piece: ChessPieces) {
            if(index == 8) {
                console.log(rotating);
                index = 1;
                this.color = rotating;
            } else {
                this.color = rotating;
                (rotating == BoardColors.White) ? rotating = BoardColors.Black : rotating = BoardColors.White;
                index++;
            }
            (piece == ChessPieces.Empty) ? this.empty = true : this.empty = false;
            this.piece = piece;
            this.black_threatened = false;
            this.white_threatened = false;
        }
    }

    export class Board extends Tiles {
        board: Tiles[][];
        constructor() {
            super(ChessPieces.Empty);
            this.board = [
                [new Tiles(ChessPieces.Rook),new Tiles(ChessPieces.Knight),new Tiles(ChessPieces.Bishop),new Tiles(ChessPieces.Queen),new Tiles(ChessPieces.King),new Tiles(ChessPieces.Bishop),new Tiles(ChessPieces.Knight),new Tiles(ChessPieces.Rook)],
                [new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn)],
                [new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty)],
                [new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty)],
                [new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty)],
                [new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty),new Tiles(ChessPieces.Empty)],
                [new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn),new Tiles(ChessPieces.Pawn)],
                [new Tiles(ChessPieces.Rook),new Tiles(ChessPieces.Knight),new Tiles(ChessPieces.Bishop),new Tiles(ChessPieces.Queen),new Tiles(ChessPieces.King),new Tiles(ChessPieces.Bishop),new Tiles(ChessPieces.Knight),new Tiles(ChessPieces.Rook)],
            ];
        }

        public getBoard(): Tiles[][] {
            return this.board;
        }

        public printBoard(): void {
            for(let i: number = 0; i < 8; i++) {
                const tempArray: BoardColors[] = [];
                for(let j: number = 0; j < 8; j++) {
                    tempArray.push(this.board[i][j].color);
                }
                console.log(tempArray.join(" "));
            }
        }
    }
}
