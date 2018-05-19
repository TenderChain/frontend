<script>
export default {
  name: 'req',
  data() {
    return {
      expand: false,
    };
  },
  props: {
    id: Number,
    dsc: String,
    reqName: String,    
  },
};
</script>

<template>
<md-table-row>
  <md-table-cell>
    <md-field>
      <label>Requirement</label>
      <p class="specyfic-info">{{reqName}}</p>
    </md-field>
    <br>
    <transition name="fade">
      <md-field v-if="expand">
        <label>Descriptions</label>
        <p class="specyfic-info">{{dsc}}</p>
      </md-field>
    </transition>
  </md-table-cell>
  <md-table-cell class="expand">
    <md-button @click="expand = !expand" class="md-icon-button md-primary">
      <md-icon>arrow_drop_down</md-icon>
    </md-button>
    
  </md-table-cell>
</md-table-row>
</template>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .row-id, .expand{
    padding-top: 25px;
  }
  .md-table-row{
    .md-table-cell {
      transition: all 0.5s ease-out;
      vertical-align: top;
    }
  }
  .expandable{
    border-top:0;
  }
  .specyfic-info {
      margin-top: 3em;
  }
</style>
