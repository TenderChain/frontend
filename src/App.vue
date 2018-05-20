<template>
  <div class="page-container">
    <md-toolbar class="md-primary">
        <h1 class="md-title">TenderChain</h1>
    </md-toolbar>
    <md-app>

      <md-app-toolbar>
        <span class="md-title">{{$route.name}}</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <menu-comp/>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import MenuComp from './components/Menu';
import Store from './store/tenders';
export default {
  name: 'App',
  store: Store,
  components: {
    MenuComp,
  },
};
</script>

<style lang="scss" scoped>
  .page-container{
    height: 93.5vh;
  }
  .md-app {
    height: 100%;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
