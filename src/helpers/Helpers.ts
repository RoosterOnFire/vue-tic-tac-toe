import { Cells, Player } from '@/type/Types';
import { cloneDeep } from 'lodash';

export const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function findWinCondition(cells: Cells, player: Player): number {
  return winConditions
    .map((condition) =>
      condition
        .map((key) => cells[key])
        .every((value) => value.player === player)
    )
    .findIndex((mapped) => mapped);
}

export function findEmptyCells(cells: Cells): number[] {
  return cells
    .map((cell, index) => (cell.player === '' ? index : -1))
    .filter((cell) => cell !== -1);
}

export function generateNextState(
  cells: Cells,
  player: Player,
  move: number
): { nextState: Cells; move: number } {
  const nextState = cloneDeep(cells);

  nextState[move].player = player;

  return { nextState, move };
}

export function getNextPlayer(player: Player): Player {
  return player === 'X' ? 'O' : 'X';
}
