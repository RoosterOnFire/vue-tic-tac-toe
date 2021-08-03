import { Cells, Player } from '@/types/types';

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
