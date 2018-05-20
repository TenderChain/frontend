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
      selectedFiles: [],
      requirements: [{name: '', desc: ''}],
      req_array: [1],
      showSnackbar: false,
    };
  },
  methods: {
    saveFiles(files) {
      this.selectedFiles = [];
      for (let i=0; i<files.length; i++) {
        this.selectedFiles.push(files[i].name);
      }
    },
    afterSave() {
      let tender = {
        name: document.querySelector('#name').value,
        date: this.selectedDate,
        fileNames: this.selectedFiles,
        requirements: this.requirements,
        timestamp: new Date().getTime(),
      };
      this.showSnackbar = !this.showSnackbar;
      this.$store.commit('add_tender', tender);
      window.setTimeout(()=>this.$router.push({path: '/'}), 800);
    },
    addReq() {
      this.requirements.push({name: '', desc: ''});
      this.req_array.push(this.req_array.length+1);
    },
  },
};
</script>

<template>
  <div>
    <form novalidate class="md-layout">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
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
                <md-datepicker  v-model="selectedDate">
                    <label>Select deadline</label>
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
                  :data="requirements"
                  v-for="id in req_array"
                >
                </requirement-row>
              </md-table>
              <md-button
                @click="addReq()"
                class="md-primary"
              >
                Add another requirement
              </md-button>
            </div>
          </div>
          <br>
          <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <multi-file-upload @new-files="saveFiles" />
              </div>
          </div>

          <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                  <add-participants />
              </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button
            @click="afterSave()"
            class="md-raised md-accent"
          >
            Create tender
          </md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar
        :md-active.sync="showSnackbar"
      >
        The tender was saved with success!
      </md-snackbar>
    </form>
  </div>
</template>
