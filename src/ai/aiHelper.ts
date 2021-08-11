import { Cells, Player } from '@/misc/types';
import { cloneDeep } from 'lodash';

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
