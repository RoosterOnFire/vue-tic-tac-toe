import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';

type Player = '' | 'X' | 'O';

export type Cell = {
  id: number;
  player: Player;
};

type Cells = Cell[];

export interface State {
  currentPlayer: Player;
  playerXWinCount: number;
  playerOWinCount: number;
  cells: Cells;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  plugins: [createLogger()],
  state: {
    currentPlayer: '',
    playerOWinCount: 0,
    playerXWinCount: 0,
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
    updateCell(state: State, id: number) {
      state.cells.forEach((cell) => {
        if (id === cell.id && cell.player === '') {
          cell.player = state.currentPlayer;
        }
      });

      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
    },
    incOWinCount(state: State) {
      state.playerOWinCount += 1;
    },
    incXWinCount(state: State) {
      state.playerXWinCount += 1;
    },
    reset(state: State) {
      state.currentPlayer = '';

      state.playerOWinCount = 0;

      state.playerXWinCount = 0;

      state.cells.forEach((cell) => (cell.player = ''));
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
