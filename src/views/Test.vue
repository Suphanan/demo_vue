<template>
  <div id="test">
    <h1>test page:Event and Method</h1>
    <button v-on:click="sweetAlert">clickMe</button>
    <button v-on:click="clickMe('welcome')">clickMe2</button>
    <!-- or write in  short form v-on to @ -->
    <button @click="clickMe('only test')">clickMe3</button>
    <h2>{{ getTimeStamp() }}</h2>
  </div>
</template>

<script>
export default {
  name: "Test",
  mounted() {
    //สามารถกำหนดค่าเริ่มต้นได้ mountedอารมณ์function โดย component จะ render ครั้งแรก
    this.initial();
  },
  methods: {
    //all function
    sweetAlert() {
      alert("ei ei");
    },
    clickMe(message) {
      alert(message);
    },
    // clickMe2(message) {
    //   alert(message);
    // },
    getTimeStamp() {
      return Date();
    },
    initial() {
      console.log("okay☺☻");
    },
  },
};
</script>

<style>
</style>