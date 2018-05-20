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
    array: Array,
    data: Array,
  },
  methods: {
    removeRow() {
      this.array.splice(this.id-1, 1);
      this.data.splice(this.id-1, 1);
    },
  },
};
</script>

<template>
  <md-table-row>
    <md-table-cell>
      <md-field>
        <label>Requirement</label>
        <md-input v-model="data[id-1].name" />
      </md-field>
      <br>
      <transition name="fade">
        <md-field v-if="expand">
          <label>Descriptions</label>
          <md-textarea
            v-model="data[id-1].desc"></md-textarea>
        </md-field>
      </transition>
    </md-table-cell>
    <md-table-cell class="expand">
      <md-button @click="expand = !expand" class="md-icon-button md-primary">
        <md-icon>arrow_drop_down</md-icon>
      </md-button>
      <md-button
        @click="removeRow()"
        class="md-icon-button md-accent"
      >
        <md-icon>remove</md-icon>
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
</style>
