<template>
  <b-container class="text-left my-5">
    <b-card
      v-if="!showReview"
      :header="this.$route.params.id + 1 + '_' + quistionNum.question"
    >
      <b-list-group>
        <b-list-group-item v-for="(q, i) in select" :key="i">
          <b-form-radio
            size="lg"
            v-model="selected"
            name="some-radios"
            @change="passSelected"
            :value="q"
            ><p class="mx-2">{{ q }}</p></b-form-radio
          >
        </b-list-group-item>
      </b-list-group>
    </b-card>
    <!-- when complite Questions  -->
    <b-card v-else header="Questions are over, click on review to show results">
    </b-card>

    <b-card>
      <b-btn size="lg" class="mx-4" @click="$emit('previousEmiter')">
        Previous</b-btn
      >
      <b-btn
        variant="dark"
        size="lg"
        @click="nextEmiter(quistionNum, selected)"
      >
        {{ showReview ? "Review" : "Next" }}</b-btn
      >
    </b-card>
  </b-container>
</template>

<script>
import { action } from "../../mixins/actions.js";
import "@/components/nav/MainNav.vue";
export default {
  props: ["quistionNum", "showReview"],
  mixins: [action],
  data() {
    return {
      selected: null,
      showResults: false,
      // correctAnswer: 0,
      notAnswer: false,
    };
  },
  methods: {
    // nextEmit(q) {
    //   this.nextEmiter(q, this.selected);
    // },
    passSelected() {
      this.$emit("passSelected", this.selected);
    },
    showResult() {
      this.showResults = true;
      this.$emit("showResult", this.showResults);
    },
  },
};
</script>
<style>
.qustion-bar {
  background: #ddd !important;
}
.text-left {
  text-align: left !important;
}
</style>
