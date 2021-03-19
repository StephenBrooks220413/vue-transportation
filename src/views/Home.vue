<template>
  <div class="home">
    <div class="bg-image">
      <h1 class="display-4">Book your ride.</h1>
      <br />
      <a href="" class="btn button btn-warning">Inquire</a>
    </div>
    <div class="block">
      <div class="row">
        <div class="col-md">
          <i class="fas symbol fa-calendar-check"></i>
          <br />
          <h3>Schedule</h3>
          <p>
            Book a ride with confidence.
          </p>
        </div>
        <div class="col-md">
          <i class="far symbol fa-credit-card"></i>
          <br />
          <h3>Payments</h3>
          <p>
            All major cards accepted.
          </p>
        </div>
        <div class="col-md">
          <i class="fas symbol fa-taxi"></i>
          <br />
          <h3>Transportation</h3>
          <p>
            Choose your pickup car.
          </p>
        </div>
      </div>
    </div>
    <HelloWorld />
    <div class="block1">
      <h1>Contact Us</h1>
      <p>Call 555-555-5555</p>
      <p>Email someone@nomail.com</p>
      <p>
        1151 Main St. - Chicago, IL.
      </p>
      <br /><br />
      <div class="container">
        <form>
          <!-- Name input -->
          <div class="form-outline mb-4">
            <input type="text" id="form4Example1" class="color form-control" />
            <label class="form-label" for="form4Example1">Name</label>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form4Example2" class="color form-control" />
            <label class="form-label" for="form4Example2">Email address</label>
          </div>

          <!-- Message input -->
          <div class="form-outline mb-4">
            <textarea
              class="form-control color"
              id="form4Example3"
              rows="4"
            ></textarea>
            <label class="form-label" for="form4Example3">Message</label>
          </div>

          <!-- Submit button -->
          <center>
            <button type="submit" class="btn btn-warning btn-block mb-4">
              Send
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/index.scss";
</style>
