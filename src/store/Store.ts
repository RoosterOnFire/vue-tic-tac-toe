import { InjectionKey } from 'vue';
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from 'vuex';
import { State, Player, Cell } from '@/type/Types';
import { getAIMove } from '@/helpers/AIMain';
import { findWinCondition, winConditions } from '@/helpers/Helpers';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  plugins: [createLogger()],
  state: {
    currentPlayer: 'X',
    playerOWinCount: 0,
    playerXWinCount: 0,
    isGameRunning: false,
    isGameOver: false,
    isAIActive: true,
    isAiThinking: false,
    cells: [
      { id: 0, player: '', hit: false },
      { id: 1, player: '', hit: false },
      { id: 2, player: '', hit: false },
      { id: 3, player: '', hit: false },
      { id: 4, player: '', hit: false },
      { id: 5, player: '', hit: false },
      { id: 6, player: '', hit: false },
      { id: 7, player: '', hit: false },
      { id: 8, player: '', hit: false },
    ],
  },
  getters: {
    isPlayerSelected(state: State): boolean {
      return state.currentPlayer !== '';
    },
    isGameRunning(state: State): boolean {
      return state.isGameRunning;
    },
    isBoardCellDisabled:
      (state: State) =>
      (cell: Cell): boolean => {
        return !!cell.player || state.isAiThinking || state.isGameOver;
      },
    currentPlayer(state: State): string {
      return `Current player: ${state.currentPlayer}`;
    },
    playerXWinCount(state: State): string {
      return `X ${state.playerXWinCount || '-'}`;
    },
    playerOWinCount(state: State): string {
      return `O ${state.playerOWinCount || '-'}`;
    },
    aiStatus(state: State): string {
      return `AI: ${state.isAIActive ? 'ON' : 'OFF'}`;
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
      const foundCell = state.cells.find((cell) => payloadCell.id === cell.id);

      if (foundCell) {
        foundCell.player = state.currentPlayer;
      }
    },
    updateGameOver(state: State) {
      const matchIndex = findWinCondition(state.cells, state.currentPlayer);
      const isBoardFilled = state.cells.every((cell) => cell.player !== '');

      state.isGameOver = matchIndex !== -1 || isBoardFilled;

      if (state.isGameOver && !isBoardFilled) {
        winConditions[matchIndex].map(
          (index) => (state.cells[index].hit = true)
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
        cell.hit = false;
      });
      state.currentPlayer = 'X';
      state.isGameRunning = false;
      state.isGameOver = false;
    },
  },
  actions: {
    updateGame({ commit, state }, cell: Cell) {
      state.isGameRunning = true;

      commit('updateCell', cell);
      commit('updateGameOver');

      if (state.isGameOver) {
        setTimeout(() => commit('resetBoard'), 1700);
        return;
      }

      if (state.isAIActive) {
        state.isAIActive = true;
        commit('switchPlayer');

        const aiMove = getAIMove(state.cells, state.currentPlayer);

        const targetCell = state.cells.find((cell) => cell.id === aiMove);

        if (targetCell) {
          commit('updateCell', targetCell);
          commit('updateGameOver');

          if (state.isGameOver) {
            setTimeout(() => commit('resetBoard'), 1700);
          }
        }

        state.isAiThinking = false;
      }

      commit('switchPlayer');
    },
    toggleAI({ state }) {
      state.isAIActive = !state.isAIActive;
    },
    reset({ commit }) {
      commit('resetBoard');
    },
    resetFull({ commit, state }) {
      commit('resetBoard');

      state.playerXWinCount = 0;
      state.playerOWinCount = 0;
      state.isAIActive = true;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
