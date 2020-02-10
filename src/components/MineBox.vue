<template>
  <button
    @click="click"
    :class="{
      'mine-box-wrapper': true,
      'grid-4x4': 16 === Number(gridNumber),
      'grid-5x5': 25 === Number(gridNumber),
      'grid-6x6': 36 === Number(gridNumber),
      'grid-7x7': 49 === Number(gridNumber),
      'green-bg': !isDanger && selected,
      'red-bg': isDanger && selected
    }"
  >
    <i
      v-if="selected"
      :class="[isDanger ? 'fas fa-bahai' : 'fas fa-check', ' fa-3x icon-color']"
    ></i>
  </button>
</template>

<script>
export default {
  props: ['id', 'isDanger', 'gridNumber'],
  methods: {
    click() {
      if (this.isDanger) {
        this.$store.commit('selectBox', { id: this.id, status: false });
        setTimeout(() => {
          Swal.fire({
            title: 'Game Over',
            text: this.$store.getters.getScore,
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#25A35C',
            cancelButtonColor: '#FF8A00',
            cancelButtonText: 'Try Again',
            confirmButtonText: 'New Game'
          }).then(result => {
            //do not remove === because result comes as bool
            if (Object.values(result)[0] === true) {
              this.$store.commit('resetGame', { withSameUser: false });
            } else {
              this.$store.commit('resetGame', { withSameUser: true });
            }
          });
        }, 500); //0.5 second
      } else {
        this.$store.commit('selectBox', { id: this.id, status: true });
      }
    }
  },
  computed: {
    selected() {
      const relatedBox = this.$store.state.gameLayout.filter(
        datum => datum.id === this.id
      )[0];
      return relatedBox.selected;
    }
  }
};
</script>

<style>
.mine-box-wrapper {
  margin: 5px;
  display: inline-block;
  left: 216px;
  top: 374px;
  background: #5d6980;
  box-shadow: 0px 5px 0px #dfdfdf;
  border-radius: 10px;
}

.grid-4x4 {
  width: 140px;
  height: 140px;
}

.grid-5x5 {
  width: 110px;
  height: 110px;
}

.grid-6x6 {
  width: 90px;
  height: 90px;
}

.grid-7x7 {
  width: 70px;
  height: 70px;
}
.green-bg {
  background-color: #25a35c;
}
.red-bg {
  background-color: #fa3a3a;
}
.icon-color {
  color: #fff;
}
</style>
