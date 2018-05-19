<script>
  export default {
    name: 'MultiFile',
    data: () => ({
      initial: 'vue-material-is-awesome.jpg',
      single: null,
      placeholder: null,
      disabled: null,
      multiple: null
    })
  }
</script>

<template>
    <md-field>
      <label>Attach documents</label>
      <md-file v-model="multiple" multiple />
    </md-field>
</template>