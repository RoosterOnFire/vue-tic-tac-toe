export type Player = '' | 'X' | 'O';

export type Cell = {
  id: number;
  player: Player;
  style: string;
};

export type Cells = Cell[];

export type State = {
  currentPlayer: Player;
  playerXWinCount: number;
  playerOWinCount: number;
  isGameRunning: boolean;
  isGameOver: boolean;
  cells: Cells;
};
