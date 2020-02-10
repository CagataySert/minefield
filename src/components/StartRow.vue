<template>
  <div class="row">
    <div class="col-5">
      <Input @change="changeName" />
    </div>
    <div class="col-5">
      <SelectBox @select="selectOption" :options="options" />
    </div>
    <div class="col-2">
      <Button @clicked="startGame" text="Start" orangeBg="true" />
    </div>
  </div>
</template>

<script>
import Button from './Button';
import InfoBox from './InfoBox';
import SelectBox from './SelectBox';
import Input from './Input';

export default {
  components: {
    Button,
    InfoBox,
    SelectBox,
    Input
  },
  data() {
    return {
      name: 'No Name',
      selectedOption: '4',
      options: ['4x4', '5x5', '6x6', '7x7']
    };
  },
  methods: {
    changeName(input) {
      this.name = input;
    },
    selectOption(selectedVal) {
      this.selectedOption = selectedVal.split('').splice(0, 1);
    },
    startGame() {
      const payload = {
        name: this.$store.getters.getCurrentUser,
        selectedGrid: this.selectedOption
      };
      this.$store.commit('startGame', payload);
    }
  }
};
</script>
