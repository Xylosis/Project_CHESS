export module Chess {
    export enum PieceNames {
        Rook = "R",
        Knight = "N",
        Bishop = "B",
        Queen = "Q",
        King = "K",
        Pawn = "P",
        Empty = " ",
    }
    
    export enum BoardColors {
        White = "white",
        Black = "black",
        NA = "none",
    }

    export enum Files {
        A = 0,
        B = 1,
        C = 2,
        D = 3,
        E = 4,
        F = 5,
        G = 6, 
        H = 7,
    }
    
    export class ChessPieces {
        public piece: PieceNames;
        color: BoardColors;
        file: Files;
        rank: number;

        constructor(piece: PieceNames, color: BoardColors, file: Files, rank: number) {
            this.piece = piece;
            this.color = color;
            this.file = file;
            this.rank = rank;
        }
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
                index = 1;
                this.color = rotating;
            } else {
                this.color = rotating;
                (rotating == BoardColors.White) ? rotating = BoardColors.Black : rotating = BoardColors.White;
                index++;
            }
            (piece.piece === PieceNames.Empty) ? this.empty = true : this.empty = false;
            this.piece = piece;
            this.black_threatened = false;
            this.white_threatened = false;
        }
    }

    export class Board extends Tiles {
        board: Tiles[][];
        constructor() {
            super(new ChessPieces(PieceNames.Empty, BoardColors.Black, Files.A, 10));
            this.board = [
                [new Tiles(new ChessPieces(PieceNames.Rook, BoardColors.White, Files.A, 0)),new Tiles(new ChessPieces(PieceNames.Knight, BoardColors.White, Files.B, 0)),new Tiles(new ChessPieces(PieceNames.Bishop, BoardColors.White, Files.C, 0)),new Tiles(new ChessPieces(PieceNames.Queen, BoardColors.White, Files.D, 0)),new Tiles(new ChessPieces(PieceNames.King, BoardColors.White, Files.E, 0)),new Tiles(new ChessPieces(PieceNames.Bishop, BoardColors.White, Files.F, 0)),new Tiles(new ChessPieces(PieceNames.Knight, BoardColors.White, Files.G, 0)),new Tiles(new ChessPieces(PieceNames.Rook, BoardColors.White, Files.H, 0))],
                [new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.White, Files.A, 1)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.White, Files.B, 1)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.White, Files.C, 1)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.White, Files.D, 1)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.White, Files.E, 1)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.White, Files.F, 1)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.White, Files.G, 1)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.White, Files.H, 1))],
                [new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.A, 2)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.B, 2)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.C, 2)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.D, 2)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.E, 2)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.F, 2)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.G, 2)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.H, 2))],
                [new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.A, 3)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.B, 3)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.C, 3)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.D, 3)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.E, 3)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.F, 3)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.G, 3)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.H, 3))],
                [new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.A, 4)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.B, 4)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.C, 4)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.D, 4)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.E, 4)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.F, 4)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.G, 4)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.H, 4))],
                [new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.A, 5)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.B, 5)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.C, 5)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.D, 5)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.E, 5)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.F, 5)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.G, 5)),new Tiles(new ChessPieces(PieceNames.Empty, BoardColors.NA, Files.H, 5))],
                [new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.Black, Files.A, 6)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.Black, Files.B, 6)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.Black, Files.C, 6)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.Black, Files.D, 6)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.Black, Files.E, 6)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.Black, Files.F, 6)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.Black, Files.G, 6)),new Tiles(new ChessPieces(PieceNames.Pawn, BoardColors.Black, Files.H, 6))],
                [new Tiles(new ChessPieces(PieceNames.Rook, BoardColors.Black, Files.A, 7)),new Tiles(new ChessPieces(PieceNames.Knight, BoardColors.Black, Files.B, 7)),new Tiles(new ChessPieces(PieceNames.Bishop, BoardColors.Black, Files.C, 7)),new Tiles(new ChessPieces(PieceNames.Queen, BoardColors.Black, Files.D, 7)),new Tiles(new ChessPieces(PieceNames.King, BoardColors.Black, Files.E, 7)),new Tiles(new ChessPieces(PieceNames.Bishop, BoardColors.Black, Files.F, 7)),new Tiles(new ChessPieces(PieceNames.Knight, BoardColors.Black, Files.G, 7)),new Tiles(new ChessPieces(PieceNames.Rook, BoardColors.Black, Files.H, 7))],
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

// const gameboard = new Chess.Board;
// const board = gameboard.getBoard();
// const rook = board[7][0].piece;
// console.log(rook.piece);
// console.log(rook.color);
// console.log(rook.file);
// console.log(rook.rank);