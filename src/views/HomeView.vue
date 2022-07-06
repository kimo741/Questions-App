<template>
  <div>
    <div class="h1">are you redy to start questions ?</div>
    <b-button @click="startQ" variant="success"> Start </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    startQ() {
      this.$router.push({ name: "question", params: { id: 0 } });
    },
  },
};
</script>

<style></style>
