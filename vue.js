import Vue from 'vue'
new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
  },
  methods: {
    reverseMessage: function () {
      const reversedMessage = this.message
        .split('')
        .reverse()
        .join('');
      this.message = reversedMessage;
    },
  },
});
