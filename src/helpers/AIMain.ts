import { Cells, Player } from '@/type/Types';
import { cloneDeep, maxBy, minBy, max as _max, min as _min } from 'lodash';
import {
  findWinCondition,
  getNextPlayer,
  generateNextState,
  findEmptyCells,
} from '@/helpers/Helpers';

export function getAIMove(cells: Cells, player: Player) {
  const result = search(cells, player);

  return result.move;
}

function search(
  cells: Cells,
  player: Player,
  max: boolean = true,
  depth: number = 0
): { score: any; move: any } {
  const clone = cloneDeep(cells);

  const moveScores = findEmptyCells(clone).map((possibleMove) => {
    const { nextState, move } = generateNextState(clone, player, possibleMove);

    const hit = findWinCondition(nextState, player) !== -1;
    const hitScore = (hit ? (max ? 100 : -100) : 0) - depth;
    const nextStateEmptyCells = findEmptyCells(nextState);

    if (hit || nextStateEmptyCells.length === 0) {
      return { score: hitScore, move: move };
    }

    const searchResult = search(
      nextState,
      getNextPlayer(player),
      !max,
      depth + 1
    );

    const score = hitScore + searchResult.score;

    return { score, move };
  });

  return max
    ? (maxBy(moveScores, (input) => input.score) as { score: any; move: any })
    : (minBy(moveScores, (input) => input.score) as { score: any; move: any });
}
