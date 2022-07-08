// import { EventBus } from "@/event-bus";

export const action = {
  computed: {
    // to gather correct answer and incorrect answer and shuffle them
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
    // HENDEL IS CORRECT OR NOT
    handelPayload(q, corOrNot, selected) {
      const answer = Object.assign(
        q,
        { isCorrect: corOrNot },
        { yourAnswer: selected }
      );
      return answer;
    },
    // HELPER FUN
    handelNextQuis() {
      this.notAnswer = false;
      this.$emit("checkSelcted", this.notAnswer);
      this.selected = null;
    },

    //next button
    nextEmiter(q, selected) {
      // QUISTION IS FENISHED ;
      if (this.showReview) {
        this.showResult();
      }
      // IF NOT SELECTED
      else if (selected == null || selected === "") {
        this.notAnswer = true;
        this.$emit("checkSelcted", this.notAnswer);
        // IF CORRECT ANSWER
      } else if (selected == q.correct_answer) {
        const correctAnswer = 1;
        this.$emit("addToCorrect", correctAnswer);
        this.$emit("nextEmiter", this.handelPayload(q, true, selected));
        this.handelNextQuis();
      }
      // NOT CORRECT
      else {
        this.$emit("nextEmiter", this.handelPayload(q, false, selected));
        this.handelNextQuis();
      }
    },
  },
};
