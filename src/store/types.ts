export type Player = '' | 'X' | 'O';

export type Cell = {
  id: number;
  player: Player;
};

export type Cells = Cell[];

export type State = {
  currentPlayer: Player;
  playerXWinCount: number;
  playerOWinCount: number;
  isGameOver: boolean;
  cells: Cells;
};
