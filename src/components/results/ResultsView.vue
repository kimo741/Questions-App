<template>
  <b-container class="text-left py-5">
    <b-row class="bg-secondary text-white">
      <b-col cols="5" class="text-h5">The Question</b-col>
      <b-col cols="3" class="text-h5" >Correct Answer</b-col>
      <b-col cols="2" class="text-h5" >Your Answer</b-col>
      <b-col cols="2" class="text-right-imp text-h5 ">Points</b-col>
    </b-row>
    <b-row v-for="(answer, i) in answers" :key="i" class="py-3">
      <b-col cols="5">{{ answer.question }}</b-col>
      <b-col cols="3">{{ answer.correct_answer }}</b-col>
      <b-col
        cols="2"
        :class="answer.isCorrect ? 'text-success' : 'text-danger'"
      >
        <font-awesome-icon v-if="answer.isCorrect" icon="fa-solid fa-check" />
        <font-awesome-icon v-else icon="fa-solid fa-circle-xmark" />
        {{ answer.yourAnswer }}
      </b-col>
      <b-col
        cols="2"
        class="text-right-imp"
        :class="answer.isCorrect ? 'text-success' : 'text-danger'"
        >{{ answer.isCorrect ? "1" : "0" }}</b-col
      >
    </b-row>
    <b-row class="result-fotter bg-secondary text-white">
      <b-col>The Question</b-col>
      <b-col class="text-right-imp">{{ correctAnwser }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ["answers", "correctAnwser"],
};
</script>

<style lang="scss" scoped>
.result-fotter {
  display: flex;
  justify-content: space-between;
}
.text-right-imp {
  text-align: right !important;
}
</style>
