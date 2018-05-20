<script>
  export default {
    name: 'DashboardOffers',
    props: {
      list: Array,
      name: String,
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
      <md-table-head>Description</md-table-head>
      <md-table-head>Time to end</md-table-head>
    </md-table-row>

    <md-table-row v-for="(el, index) in list" :key="el.id">
      <md-table-cell md-numeric>{{index+1}}</md-table-cell>
      <md-table-cell>{{el.name}}</md-table-cell>
      <md-table-cell>{{el.desc}}</md-table-cell>
      <md-table-cell>{{el.eta}}</md-table-cell>
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
