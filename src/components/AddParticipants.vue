<script>
  export default {
    name: 'AddParticipants',
    data: () => ({
      showDialog: false,
    }),
  };

</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }

</style>

<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Add Participants</md-dialog-title>
      <div>
        <form novalidate class="md-layout">
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">Name</label>
                  <md-input
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                  />
                  <span class="md-error">The first name is required</span>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="last-name">e-mail</label>
                  <md-input
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                  />
                  <span class="md-error">The last name is required</span>
                  <span class="md-error">Invalid last name</span>
                </md-field>
              </div>
            </div>
          </md-card-content>
        </form>
      </div>


      <md-dialog-actions>
        <md-button
          class="md-primary"
          @click="showDialog = false"
        >
          Close
        </md-button>
        <md-button
          class="md-primary"
          @click="showDialog = false"
        >
          Add
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary" @click="showDialog = true">
      Add participants
    </md-button>
  </div>
</template>
