<template>
  <div>
    <Ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/demo">Demo</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
      <li><router-link to="/computed">Computed</router-link></li>
    </Ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 8px;
}
</style>