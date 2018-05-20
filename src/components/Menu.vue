<script>
export default {
  name: 'Menu',
};
</script>

<template>
    <md-list>
      <md-list-item to="/">
        <md-icon>view_compact</md-icon>
        <span class="md-list-item-text">Dashboard</span>
      </md-list-item>
      <md-list-item to="/add">
        <md-icon>control_point</md-icon>
        <span class="md-list-item-text">Create</span>
      </md-list-item>

      <md-list-item md-expand>
        <md-icon>search</md-icon>
        <span class="md-list-item-text">Search</span>

        <md-list slot="md-expand">
            <md-list-item class="md-inset">by Name</md-list-item>
            <md-list-item class="md-inset">by Requirements</md-list-item>
          </md-list>
      </md-list-item>

      <md-list-item md-expand>
        <md-icon>dns</md-icon>
        <span class="md-list-item-text">Manage</span>

        <md-list slot="md-expand">
            <md-list-item class="md-inset">My tenders</md-list-item>
            <md-list-item class="md-inset">My participation</md-list-item>
        </md-list>
      </md-list-item>
    </md-list>
</template>
