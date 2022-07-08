<template>
  <b-nav class="bg-grey py-2">
    <b-nav-item class="h5 text-black" to="/">Logo </b-nav-item>
    <b-nav-item class="h5 text-black" @click="$emit('previoueFromNav')"
      >Previoue</b-nav-item
    >
    <b-nav-item
      class="h5 text-black"
      @click="nextEmiter(quistionNum, selectedVal)"
    >
      Next</b-nav-item
    >
    <b-nav-item
      :class="showReview ? 'bg-dark text-white' : ''"
      class="h5"
      :disabled="!showReview"
      @click="showResult"
      >Results</b-nav-item
    >
  </b-nav>
</template>
<script>
import { action } from "../../mixins/actions.js";
export default {
  props: ["quistionNum", "showReview", "selectedVal"],
  mixins: [action],
  data() {
    return {
      notAnswer: false,
      // correctAnswer: 0,
      showResults: false,
    };
  },
  methods: {
    // when qustion in finished
    showResult() {
      this.showResults = true;
      this.$emit("showResult", this.showResults);
    },
  },
  // created() {
  //   EventBus.$on("clicked", (data) => {
  //     this.notAnswer = data;
  //   });
  // },
};
</script>

<style>
.bg-grey {
  background-color: rgba(0, 0, 0, 0.76) !important;
}
</style>
