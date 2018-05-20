<script>
  export default {
    name: 'DashboardOffers',
    props: {
      list: Array,
      name: String,
    },
    methods: {
      eta(deadlineDate) {
        let oneDay = 1000*60*60*24;
        let oneHour = 1000*60*60;
        let today = new Date().getTime();
        let deadline = new Date(deadlineDate).getTime();

        return `
          ${((deadline-today)/oneDay).toFixed(0)}d
           ${(((deadline-today)%oneDay)/oneHour).toFixed(0)}h
           `;
      },
    },
  };

</script>

<template>
  <md-table md-card>
    <md-table-toolbar>
      <h1 class="md-title">{{name}}</h1>
    </md-table-toolbar>

    <md-table-row>
      <md-table-head md-numeric>#</md-table-head>
      <md-table-head>Name</md-table-head>
      <md-table-head>Requirements</md-table-head>
      <md-table-head>Offerents</md-table-head>
      <md-table-head>Time to end</md-table-head>
    </md-table-row>

    <md-table-row v-for="(el, index) in list" :key="el.id">
      <md-table-cell md-numeric>{{index+1}}</md-table-cell>
      <md-table-cell>
          <router-link :to="`/submit/${el.timestamp}`">{{el.name}}</router-link>
      </md-table-cell>
      <md-table-cell>
        <span v-for="req in el.requirements" :key="req.name">
          {{req.name+", "}}
        </span>
      </md-table-cell>
      <md-table-cell>{{el.offerents}}</md-table-cell>
      <md-table-cell>{{eta(el.date)}}</md-table-cell>
    </md-table-row>

    <md-card-actions>
      <md-button>See all</md-button>
    </md-card-actions>
  </md-table>
</template>

<style lang="scss">
  .md-card {
    flex-basis: 100%;
    margin-bottom: 15px;
  }
  .md-content {
    height: 100%;
  }
  .title {
    text-align: center;
    margin-bottom: 30px;
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
</style>
