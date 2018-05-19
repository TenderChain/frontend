<script>
import MultiFileUpload from './MultiFileUpload';
import AddParticipants from './AddParticipants';
import RequirementRow from './RequirementRow';
export default {
  name: 'AddTender',
  components: {
      MultiFileUpload,
      AddParticipants,
      RequirementRow,
  },
  data() {
    return {
      selectedDate: '',
      req_array: [1],
    };
  },
};
</script>

<template>
  <div>
    <form novalidate class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Add Tender</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="name">Name</label>
                <md-input name="name" id="name" autocomplete="given-name"/>
                <span class="md-error" >The name is required</span>
                <span class="md-error" >Invalid name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
                <md-datepicker v-model="selectedDate">
                    <label>Select date</label>
                </md-datepicker>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-table>
                <requirement-row
                  :key="id"
                  :id="id"
                  :array="req_array"
                  v-for="id in req_array"
                >
                </requirement-row>
              </md-table>
              <md-button
                @click="req_array.push(req_array.length+1)"
                class="md-raised"
              >
                Add another requirement
              </md-button>
            </div>
          </div>

          <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
              <multi-file-upload />
              </div>
          </div>

          <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                  <add-participants />
              </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Create tender</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar>The tender was saved with success!</md-snackbar>
    </form>
  </div>
</template>
