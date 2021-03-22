<template>
  <div>
    <div class="content-1">
      <h1 class="display-4">Ease of Booking</h1>
      <br />
      <router-link to="/Driver1" class="btn button btn-outline-warning">Book Now</router-link>
    </div>
    <div class="block">
      <h1>
        <i class="fas fa-road"></i>
        Over 400 rides completed daily
        <i class="fas fa-road"></i>
      </h1>
    </div>
    <div class="content-4">
      <h1 class="display-4">Destination pending...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/index.scss";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
