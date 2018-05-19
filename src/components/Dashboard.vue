<script>
import DashboardCard from './DashboardCard';
import DashboardAlert from './DashboardAlert';
  export default {
    name: 'Dashboard',
    data() {
      return {
        recent: [
          {
            id: 11234343,
            name: 'Business cards',
            desc:
              'Business cards made from hard cardboard with company\'s logo',
            eta: '1d 23h',
          }, {
            id: 17373,
            name: 'Business cards',
            desc:
              'Business cards made from hard cardboard with company\'s logo',
            eta: '1d 23h',
          }, {
            id: 28493982,
            name: 'Business cards',
            desc:
              'Business cards made from hard cardboard with company\'s logo',
            eta: '1d 23h',
          }],
        tenders: [{}, {}, {}],
        offers: [{}, {}, {}],
        alert: {
          name: 'Your tender is about to end!',
          info:
            `You can start reviewing offers.
             After the deadline you will have 2 weeks to choose a winner.`,
          btnLabel: 'Go to tender',
          },
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
      :name="alert.name"
      :info="alert.info"
      :btn-label="alert.btnLabel"
    />
    <dashboard-card :list="recent" name="Recent tenders"/>
    <dashboard-card :list="recent" name="Your tenders"/>
    <dashboard-card :list="recent" name="Your offers"/>
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
