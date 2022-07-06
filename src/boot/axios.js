import Vue from "vue";
import axios from "axios";
const server =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
const api = axios.create({
  baseURL:
    server + "api.php?amount=10&category=18&difficulty=medium&type=multiple",
  withCredentials: false,
});
Vue.prototype.$axios = api;
export { axios, api };
