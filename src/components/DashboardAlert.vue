<script>
  export default {
    name: 'DashboardAlert',
    props: {
      name: String,
      info: String,
      btnLabel: String,
    },
  };

</script>

<template>
    <md-card md-with-hover class="md-accent">
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{name}}</div>
        </md-card-header>
        <md-card-content>{{info}}</md-card-content>
        <md-card-actions>
          <md-button>{{btnLabel}}</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
</template>
