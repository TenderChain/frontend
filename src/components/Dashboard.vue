<template>
 <div class="centered-container">
  <md-card md-with-hover class="md-accent">
    <md-ripple>
      <md-card-header>
        <div class="md-title">Your tender is about to end!</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>

      <md-card-actions>
        <md-button>Go to tenter</md-button>
      </md-card-actions>
    </md-ripple>
  </md-card>
  <md-table md-card>
    <md-table-toolbar>
      <h1 class="md-title">Your tenders</h1>
    </md-table-toolbar>

    <md-table-row>
      <md-table-head md-numeric>ID</md-table-head>
      <md-table-head>Name</md-table-head>
      <md-table-head>Description</md-table-head>
      <md-table-head>Time to end</md-table-head>
    </md-table-row>

    <md-table-row class="highlited">
      <md-table-cell md-numeric>1</md-table-cell>
      <md-table-cell>Shawna Dubbin</md-table-cell>
      <md-table-cell>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
         Optio itaque ea, nostrum odio.
        </md-table-cell>
      <md-table-cell>12h</md-table-cell>
    </md-table-row>

    <md-table-row>
      <md-table-cell md-numeric>2</md-table-cell>
      <md-table-cell>Odette Demageard</md-table-cell>
      <md-table-cell>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores,
         sed accusantium quasi non.
      </md-table-cell>
      <md-table-cell>36d 3h</md-table-cell>
    </md-table-row>

    <md-table-row>
      <md-table-cell md-numeric>3</md-table-cell>
      <md-table-cell>Vera Taleworth</md-table-cell>
      <md-table-cell>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-table-cell>
      <md-table-cell>1m 12d</md-table-cell>
    </md-table-row>

    <md-card-actions md-alignment="right">
      <md-button>See all</md-button>
    </md-card-actions>
  </md-table>
    <md-table md-card>
    <md-table-toolbar>
      <h1 class="md-title">Your offers</h1>
    </md-table-toolbar>

    <md-table-row>
      <md-table-head md-numeric>ID</md-table-head>
      <md-table-head>Name</md-table-head>
      <md-table-head>Description</md-table-head>
      <md-table-head>Time to end</md-table-head>
    </md-table-row>

    <md-table-row class="">
      <md-table-cell md-numeric>1</md-table-cell>
      <md-table-cell>Shawna Dubbin</md-table-cell>
      <md-table-cell>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
         Optio itaque ea, nostrum odio.
        </md-table-cell>
      <md-table-cell>1d 12h</md-table-cell>
    </md-table-row>

    <md-table-row>
      <md-table-cell md-numeric>2</md-table-cell>
      <md-table-cell>Odette Demageard</md-table-cell>
      <md-table-cell>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores,
         sed accusantium quasi non.
      </md-table-cell>
      <md-table-cell>36d 3h</md-table-cell>
    </md-table-row>

    <md-table-row>
      <md-table-cell md-numeric>3</md-table-cell>
      <md-table-cell>Vera Taleworth</md-table-cell>
      <md-table-cell>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-table-cell>
      <md-table-cell>1m 12d</md-table-cell>
    </md-table-row>

    <md-card-actions md-alignment="right">
      <md-button>See all</md-button>
    </md-card-actions>
  </md-table>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.highlited{
  background-color: rgba(255,82,82, 0.2);
  &:hover{
    background-color: rgba(255,82,82, 0.5);
  }
}
.centered-container {
  .md-card{
    flex-basis: 100%;
    margin-bottom: 15px;
  }
  .md-content{
    height: 100%;
  }
  align-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
