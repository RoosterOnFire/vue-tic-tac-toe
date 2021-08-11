export type Player = '' | 'X' | 'O';

export type Cell = {
  id: number;
  player: Player;
  hit: boolean;
};

export type Cells = Cell[];

export type State = {
  currentPlayer: Player;
  playerXWinCount: number;
  playerOWinCount: number;
  isGameRunning: boolean;
  isGameOver: boolean;
  cells: Cells;
  isAIActivate: boolean;
};
