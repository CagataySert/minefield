import Vue from 'vue';
import Vuex from 'vuex';
import generateRandomNumber from '../utils/generateRandomNumber';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    oldScores: [
      { name: 'Münevver Sert', score: 55 },
      { name: 'Çağatay Sert', score: 45 },
      { name: 'Tarık Sert', score: 35 },
      { name: 'Şeref Sert', score: 5 }
    ],
    gameLayout: [],
    currentUser: '',
    currentScore: 0
  },
  getters: {
    getGameLayout(state) {
      return state.gameLayout;
    },
    getScore(state) {
      return state.currentScore;
    },
    getScoreList(state) {
      return state.oldScores;
    },
    getCurrentUser(state) {
      return state.currentUser;
    }
  },
  mutations: {
    resetGame(state, payload) {
      const newOldScoresState = state.oldScores;
      newOldScoresState.push({
        name: state.currentUser,
        score: state.currentScore
      });

      state.oldScores = newOldScoresState
        .sort((a, b) => b.score - a.score)
        .splice(0, 10);

      if (payload.withSameUser) {
        state.gameLayout = [];
        state.currentScore = 0;
      } else {
        state.gameLayout = [];
        state.currentUser = '';
        state.currentScore = 0;
      }
    },
    startGame(state, payload) {
      const { name, selectedGrid } = payload;
      this.state.currentUser = name;

      let tempGameLayout = [];
      const totalBoxNumber = Number(selectedGrid) * Number(selectedGrid);

      for (let index = 0; index < totalBoxNumber; index++) {
        const tmepBox = { id: index, isDanger: false, selected: false };
        tempGameLayout.push(tmepBox);
      }

      let generatedRandomNumberList = [];

      for (let index = 0; index < Number(selectedGrid); index++) {
        const randomNumber = generateRandomNumber(
          generatedRandomNumberList,
          selectedGrid,
          totalBoxNumber
        );
        generatedRandomNumberList.push(randomNumber);

        const randomBox = tempGameLayout.filter(datum => {
          return datum.id === randomNumber;
        });
        randomBox[0].isDanger = true;
      }

      this.state.gameLayout = tempGameLayout;
    },
    selectBox(state, payload) {
      const { id, status } = payload;
      const selectedBox = state.gameLayout.filter(datum => datum.id === id)[0];
      if (status) {
        state.currentScore += 5;
        selectedBox.selected = true;
      } else {
        state.gameLayout.map(datum => (datum.selected = true));
      }
    },
    updateUsername(state, payload) {
      this.state.currentUser = payload;
    }
  },
  actions: {},
  modules: {}
});
