<template>
  <div class="container mt-5">
    <Header />
    <StartRow />
    <div class="row mt-5">
      <div class="col-7">
        <MineBoxLayout />
      </div>
      <div class="col-5">
        <UserPointList />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import StartRow from '../components/StartRow';
import UserPointList from '../components/UserPointList';
import MineBoxLayout from '../components/MineBoxLayout';

export default {
  components: {
    Header,
    StartRow,
    UserPointList,
    MineBoxLayout
  }
};
</script>
