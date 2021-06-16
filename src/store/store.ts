import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';
import { State, Player, Cell } from './types';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  plugins: [createLogger()],
  state: {
    currentPlayer: '',
    playerOWinCount: 0,
    playerXWinCount: 0,
    isGameOver: false,
    cells: [
      { id: 0, player: '' },
      { id: 1, player: '' },
      { id: 2, player: '' },
      { id: 3, player: '' },
      { id: 4, player: '' },
      { id: 5, player: '' },
      { id: 6, player: '' },
      { id: 7, player: '' },
      { id: 8, player: '' },
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
      const matchIndex = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
        .map((condition) =>
          condition
            .map((key) => state.cells[key])
            .every((value) => value.player === state.currentPlayer)
        )
        .indexOf(true);

      state.isGameOver = matchIndex !== -1;

      if (!state.isGameOver) {
        return;
      }

      if (state.currentPlayer === 'X') {
        state.playerXWinCount += 1;
      } else if (state.currentPlayer === 'O') {
        state.playerOWinCount += 1;
      }
    },
    clearBoard(state: State) {
      state.cells.forEach((cell) => (cell.player = ''));
    },
  },
  actions: {
    updateGame({ commit, state }, cell: Cell) {
      if (state.isGameOver) {
        return;
      }

      commit('updateCell', cell);

      commit('updateGameOver');

      if (!state.isGameOver) {
        commit('switchPlayer');
      } else {
        setTimeout(() => {
          (state.isGameOver = false), commit('clearBoard');
        }, 1700);
      }
    },
    reset({ commit, state }) {
      state.currentPlayer = '';

      state.playerOWinCount = 0;

      state.playerXWinCount = 0;

      state.isGameOver = false;

      commit('clearBoard');
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
