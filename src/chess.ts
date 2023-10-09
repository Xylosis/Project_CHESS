import { Chess } from "./chess_H";

const chessBoard = new Chess.Board;
chessBoard.printBoard();

const test = new Chess.ChessPieces(Chess.PieceNames.Rook, Chess.BoardColors.White, Chess.Files.A, 0);