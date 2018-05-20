<script>
  export default {
    name: 'MultiFile',
    data() {
      return {
        multiple: [],
      };
    },
    methods: {
      newFiles(fileList) {
        console.log(fileList);
        this.$emit('new-files', fileList);
      },
    },
  };
</script>

<template>
    <md-field>
      <label>Attach documents</label>
      <md-file @md-change="newFiles" v-model="multiple" multiple />
    </md-field>
</template>
