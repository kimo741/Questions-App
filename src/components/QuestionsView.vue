<template>
  <b-container class="text-left">
    <b-card :header="this.$route.params.id + 1 + '_' + quistionNum.question">
      <b-card-title v-show="notAnswer" class="text-danger text-center h6">
        you are not sellect any answer , pleas select answer and click next
        again
      </b-card-title>
      <b-list-group>
        <b-list-group-item v-for="(q, i) in select" :key="i">
          <b-form-radio
            size="lg"
            v-model="selected"
            name="some-radios"
            :value="q"
            ><p class="mx-2">{{ q }}</p></b-form-radio
          >
        </b-list-group-item>
      </b-list-group>
    </b-card>
    <b-card>
      <b-btn size="lg" class="mx-4" @click="$emit('previousEmiter')">
        Previous</b-btn
      >
      <b-btn variant="dark" size="lg" @click="nextEmiter(quistionNum)">
        {{ showReview ? "Review" : "Next" }}</b-btn
      >
    </b-card>
  </b-container>
</template>

<script>
export default {
  props: ["quistionNum", "showReview"],
  data() {
    return {
      selected: null,
      notAnswer: false,
    };
  },
  computed: {
    select() {
      const answer = [
        this.quistionNum.correct_answer,
        ...this.quistionNum.incorrect_answers,
      ];
      const shaffle = answer.sort(() => Math.random() - 0.5);
      return shaffle;
    },
  },
  methods: {
    nextEmiter(q) {
      if (this.selected == null) {
        this.notAnswer = true;
      } else if (this.selected == q.correct_answer) {
        const answerTrue = Object.assign(q, { isCorrect: true });
        this.$emit("nextEmiter", answerTrue);
        this.selected == null;
        this.notAnswer = false;
      } else {
        const wrongAnswer = Object.assign(q, { isCorrect: false });
        this.$emit("nextEmiter", wrongAnswer);
        this.selected == null;
        this.notAnswer = false;
      }
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
