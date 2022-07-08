<template>
  <div class="home">
    <Nav
      :showReview="doneSelected"
      :quistionNum="quis[id]"
      :selectedVal="selectPass"
      @nextEmiter="next"
      @previoueFromNav="previous"
      @showResult="showResult"
      @addToCorrect="addToCorrect"
      @checkSelcted="checkSelcted"
    />
    <b-container>
      <b-card v-if="notAnswer">
        <b-card-title class="text-danger text-center h6">
          you are not sellect any answer , pleas select answer and click next
          again
        </b-card-title>
      </b-card>

      <QuestionsView
        v-show="!showResults"
        v-if="quis[id]"
        :showReview="doneSelected"
        :quistionNum="quis[id]"
        @previousEmiter="previous"
        @nextEmiter="next"
        @showResult="showResult"
        @passSelected="passSelected"
        @addToCorrect="addToCorrect"
        @checkSelcted="checkSelcted"
      />
      <ResultsView
        v-show="showResults"
        :answers="asnwers"
        :correctAnwser="correctAnwser"
      />
    </b-container>
  </div>
</template>

<script>
import { api } from "@/boot/axios.js";
import QuestionsView from "@/components/question/QuestionsView.vue";
import ResultsView from "@/components/results/ResultsView.vue";
import Nav from "@/components/nav/MainNav.vue";

export default {
  name: "HomeView",
  components: {
    QuestionsView,
    ResultsView,
    Nav,
  },
  data() {
    return {
      quis: [],
      id: 0,
      asnwers: [],
      doneSelected: false,
      correctAnwser: 0,
      selectPass: "",
      showResults: false,
      notAnswer: false,
    };
  },
  watch: {
    id(nVal) {
      this.$route.params.id = nVal;
      if (nVal >= this.quis.length - 1) {
        this.doneSelected = true;
      } else {
        this.doneSelected = false;
      }
    },
  },
  methods: {
    async getQuestions() {
      api
        .get()
        .then((res) => {
          const { data } = res;
          this.quis = data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    paramHandler() {
      this.$router.push({ name: "question", params: { id: this.id } });
    },
    previous() {
      this.id--;
      this.paramHandler();
    },
    handelIncement() {
      this.id++;
      this.paramHandler();
    },
    // check answer before push it
    next(select) {
      this.selectPass = null;
      if (this.asnwers.includes(select)) {
        const getObj = this.asnwers.findIndex((i) => {
          i == select;
        });
        this.asnwers.splice(getObj, select);
        this.handelIncement();
      } else {
        this.asnwers.push(select);
        this.handelIncement();
      }
    },
    showResult(show) {
      this.showResults = show;
      // this.correctAnwser = correctAns;
    },
    passSelected(select) {
      this.selectPass = select;
    },
    addToCorrect(correct) {
      this.correctAnwser += correct;
    },
    checkSelcted(chechAnswer) {
      this.notAnswer = chechAnswer;
    },
  },
  created() {
    this.getQuestions();
  },
};
</script>
