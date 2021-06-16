import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

type Player = '' | 'X' | 'O';

type Cell = {
  id: number;
  player: Player;
};

type Cells = Cell[];

export interface State {
  currentPlayer: string;
  playerXWinCount: number;
  playerOWinCount: number;
  cells: Cells;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
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
  mutations: {
    selectPlayer(state: State, player: Player) {
      state.currentPlayer = player;
    },
    incOWinCount(state: State) {
      state.playerOWinCount += 1;
    },
    incXWinCount(state: State) {
      state.playerXWinCount += 1;
    },
    resetBoard(state: State) {
      state.currentPlayer = '';
      state.playerOWinCount = 0;
      state.playerXWinCount = 0;
      state.cells = [
        { id: 0, player: '' },
        { id: 1, player: '' },
        { id: 2, player: '' },
        { id: 3, player: '' },
        { id: 4, player: '' },
        { id: 5, player: '' },
        { id: 6, player: '' },
        { id: 7, player: '' },
        { id: 8, player: '' },
      ];
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
