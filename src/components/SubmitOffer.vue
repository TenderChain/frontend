<script>
import Requirements from './Requirements';
export default {
  name: 'SubmitOffer',
  components: {
      Requirements
  },
  data() {
      return {
        offer: {name: 'asdfadsf'},
        textarea: '',
        number: '',
        showSnackbar: false,
        }
  },
  methods: {
    getRecentTender (timestamp) {
      return this.$store.getters.getTenderByTimestamp(timestamp);
    },
    afterSubmit() {
        this.showSnackbar = !this.showSnackbar;
        window.setTimeout(()=>this.$router.push({path: '/'}), 800);
    }
  },
  
};
</script>

<template>
   <div>
       <h1>{{ getRecentTender($route.params.ts).name}}</h1>
      <requirements :requirementsList="getRecentTender($route.params.ts).requirements" />

       <form novalidate class="md-layout submit-form">
      <md-card class="md-layout-item  md-small-size-100">

          <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="name">Price</label>
                <md-input v-model="number"  name="price" id="price" />
                <span class="md-error" >The price is required</span>
                <span class="md-error" >Invalid price</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                  <md-field>
                      <label> Notes </label>
                      <md-textarea v-model="textarea"></md-textarea>

                  </md-field>
              </div>
          </div>
          </md-card-content>

               <md-card-actions>
          <md-button class="md-primary" @click="afterSubmit()">Submit offer</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="showSnackbar" >The offer was saved with success!</md-snackbar>
       </form>



   </div> 
</template>


<style lang="scss" scoped>
.submit-form {
    margin-top: 2em;
}

</style>
