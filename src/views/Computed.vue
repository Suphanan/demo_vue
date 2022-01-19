<template>
  <div class="Computed">
    <h2>{{ fullname }}</h2>
    <h3>random from computed: {{ getrandom2 }}</h3>
    <h3>random from computed: {{ getrandom2 }}</h3>
    <h3>random from computed: {{ getrandom2 }}</h3>
    <h3>random from methods: {{ getrandom1() }}</h3>
    <h3>random from methods: {{ getrandom1() }}</h3>
    <h3>random from methods: {{ getrandom1() }}</h3>
  </div>
</template>

<script>
//computed ฟังชันก์เรียกได้เหมือนตัวแปร เหมือน getter
//computed vs methods = สมมุติใน function random computed = ให้ค่าเดิมตลอด methods เปลี่ยนค่า เนื่องจาก computed นั้น update ให้เป็นค่าล่าสุดเท่านั้น
export default {
  name: "Computed",
  data() {
    return {
      firstname: "suphanan",
      lastname: "mujarin",
    };
  },
  methods: {
    //or  getrandom1()
    getrandom1: function () {
      return Math.random();
    },
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    getrandom2() {
      return Math.random();
    },
  },
};
</script>

<style scoped>
</style>