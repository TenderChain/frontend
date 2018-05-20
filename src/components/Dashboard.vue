<script>
import DashboardCard from './DashboardCard';
import DashboardAlert from './DashboardAlert';
  export default {
    name: 'Dashboard',
    data() {
      return {
        recent: this.$store.state.recent,
        tenders: this.$store.state.my_tenders,
        offers: this.$store.state.my_offers,
      };
    },
    components: {
      DashboardCard,
      DashboardAlert,
    },
  };

</script>

<template>
  <div class="centered-container">
    <dashboard-alert
      v-if="$store.state.alert"
      :name="$store.state.alert.name"
      :info="$store.state.alert.info"
      :btn-label="$store.state.alert.btnLabel"
    />
    <dashboard-card :list="recent" name="Recent tenders"/>
    <dashboard-card :list="tenders" name="Your tenders"/>
    <dashboard-card :list="offers" name="Your offers"/>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .highlited {
    background-color: rgba(255, 82, 82, 0.2);
    &:hover {
      background-color: rgba(255, 82, 82, 0.5);
    }
  }

  .centered-container {
    align-content: flex-start;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
  }
</style>
