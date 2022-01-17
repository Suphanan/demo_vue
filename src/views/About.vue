<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- interpolation -->
    <h1>{{ title }}</h1>
    <h2>{{ count }}</h2>
    <button @click="clickCount">add</button>
    <h3>v-model</h3>
    <!-- MVVM = model view model-->
    <input v-model="message1" type="text" placeholder="Enter your message" />
    <div>{{ message1 }}</div>
    <button @click="message1 = ''">reset</button>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: "hello",
      count: 0,
      message1: "",
    };
  },
  methods: {
    clickCount() {
      //function name
      this.count = this.count + 1;
    },
  },
};
</script>
