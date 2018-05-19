<template>
  <div class="page-container">
    <md-toolbar class="md-primary">
        <h1 class="md-title">TenderChart</h1>
    </md-toolbar>
    <md-app>

      <md-app-toolbar>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({

  }),
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
