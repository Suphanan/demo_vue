<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- interpolation -->
    <h1>{{ title }}</h1>
    <h2>{{ count }}</h2>
    <button class="addColor" @click="clickCount">add</button>
    <!-- or can do this,ไม่ต้องมีฟังชันก์แต่สามารถเรียกหาตัวแปรที่ประกาศใน data ได้เลย-->
    <button
      @click="
        count++;
        isLogged = true;
      "
    >
      add2
    </button>
    <h3>v-model</h3>
    <!-- MVVM = model view model-->
    <input v-model="message1" type="text" placeholder="Enter your message" />
    <div>{{ message1 }}</div>
    <button @click="message1 = ''">reset</button>
    <h4 v-if="isLogged">Show when true</h4>
    <div>{{ languages }}</div>
    <ul>
      <li v-for="(item, index) in languages" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    //data ควรจะประกาศในรูปแบบฟังชันก์ คือทำ return ออกไป
    return {
      title: "hello",
      count: 0,
      message1: "",
      isLogged: false,
      //dictionaries data(object)
      account: {
        username: "admin",
        password: "1234",
      },
      //array data
      languages: [
        "Thai",
        "English",
        "Mandarin",
        "Japanese",
        "Turkish",
        "Vietnamese",
        "Arabic",
      ],
    };
  },
  methods: {
    clickCount() {
      //function name
      this.count = this.count + 1;
    },
  },
  mounted() {
    //กำหนดค่าตอนเริ่มต้น เมื่อ component ถูกเรียก
    this.message1 = "hello demo";
  },
};
</script>

<style scoped>
li {
  color: rgba(201, 41, 108, 0.774);
}
.addColor {
  color: rgb(102, 160, 15);
}
</style>