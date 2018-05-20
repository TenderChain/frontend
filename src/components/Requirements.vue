<template>
  <div>
    <md-table v-model="people" md-card @md-selected="onSelect" >
      <md-table-toolbar>
        <h1 class="md-title">Requirements: </h1>
      </md-table-toolbar>

      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>add</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>
      <row :key="req.name"
            :id="id"
            :dsc="req.desc" 
            :reqName="req.name"
            v-for="(req, id) in requirementsList"/>           


    </md-table>

  </div>
</template>

<script>
import Row from './Row'
  export default {
    name: 'Requirements',
    components: {
        Row
    },
    data: () => ({
      selected: [],
      people: [
        {
          name: 'Odette Demageard',
          email: 'odemageard1@spotify.com',
          gender: 'Female',
          title: 'Account Coordinator'
        }
      ]
    }),
    props: {
      requirementsList: []
    },
    methods: {
      onSelect (items) {
        this.selected = items
      },
      getAlternateLabel (count) {
        let plural = ''

        if (count > 1) {
          plural = 's'
        }

        return `${count} requirement${plural} selected`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
</style>
