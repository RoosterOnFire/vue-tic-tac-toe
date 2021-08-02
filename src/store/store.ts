import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';
import { State, Player, Cell } from './types';

export const key: InjectionKey<Store<State>> = Symbol();

const windConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const store = createStore<State>({
  plugins: [createLogger()],
  state: {
    currentPlayer: 'X',
    playerOWinCount: 0,
    playerXWinCount: 0,
    isGameRunning: false,
    isGameOver: false,
    cells: [
      { id: 0, player: '', style: '' },
      { id: 1, player: '', style: '' },
      { id: 2, player: '', style: '' },
      { id: 3, player: '', style: '' },
      { id: 4, player: '', style: '' },
      { id: 5, player: '', style: '' },
      { id: 6, player: '', style: '' },
      { id: 7, player: '', style: '' },
      { id: 8, player: '', style: '' },
    ],
  },
  getters: {
    isPlayerSelected(state: State): boolean {
      return state.currentPlayer !== '';
    },
  },
  mutations: {
    selectPlayer(state: State, player: Player) {
      state.currentPlayer = player;
    },
    switchPlayer(state: State) {
      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
    },
    updateCell(state: State, payloadCell: Cell) {
      state.cells.forEach((cell) => {
        if (payloadCell.id === cell.id && payloadCell.player === '') {
          cell.player = state.currentPlayer;
        }
      });
    },
    updateGameOver(state: State) {
      const matchIndex = windConditions
        .map((condition) =>
          condition
            .map((key) => state.cells[key])
            .every((value) => value.player === state.currentPlayer)
        )
        .indexOf(true);
      const isBoardFilled = state.cells.every((cell) => cell.player !== '');

      state.isGameOver = matchIndex !== -1 || isBoardFilled;

      if (state.isGameOver && !isBoardFilled) {
        windConditions[matchIndex].map(
          (index) => (state.cells[index].style = 'board__cell--win')
        );

        if (state.currentPlayer === 'X') {
          state.playerXWinCount += 1;
        } else if (state.currentPlayer === 'O') {
          state.playerOWinCount += 1;
        }
      }
    },
    resetBoard(state: State) {
      state.cells.forEach((cell) => {
        cell.player = '';
        cell.style = '';
      });
      state.currentPlayer = 'X';
      state.isGameRunning = false;
      state.isGameOver = false;
    },
  },
  actions: {
    updateGame({ commit, state }, cell: Cell) {
      if (state.isGameOver) {
        // prevent futher action after game over
        return;
      }
      state.isGameRunning = true;

      commit('updateCell', cell);
      commit('updateGameOver');

      if (state.isGameOver) {
        setTimeout(() => {
          (state.isGameOver = false), commit('resetBoard');
        }, 1700);
      } else {
        commit('switchPlayer');
      }
    },
    reset({ commit }) {
      commit('resetBoard');
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
