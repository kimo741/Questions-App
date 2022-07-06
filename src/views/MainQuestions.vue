<template>
  <div class="home">
    {{ asnwers }}
    <b-container>
      <QuestionsView
        :showReview="doneSelected"
        :quistionNum="quis[id]"
        @previousEmiter="previous"
        @nextEmiter="next"
      />
    </b-container>
  </div>
</template>

<script>
import { api } from "@/boot/axios.js";
import QuestionsView from "@/components/QuestionsView.vue";

export default {
  name: "HomeView",
  components: {
    QuestionsView,
  },
  data() {
    return {
      quis: [],
      id: 0,
      asnwers: [],
      doneSelected: false,
    };
  },
  watch: {
    id(val) {
      this.$route.params.id = val;
      val >= 10 ? (this.doneSelected = true) : false;
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
    next(select) {
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
  },
  created() {
    this.getQuestions();
  },
};
</script>
