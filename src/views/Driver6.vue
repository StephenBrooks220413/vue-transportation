<template>
  <div class="container">
    <h1 class="display-4">Michelle Wood</h1>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <br />
    <img
      src="https://images.unsplash.com/photo-1524645343120-a4ae9f7d4343?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="Michelle Wood"
      class="img-fluid"
    />
    <img
      src="https://assets.newcars.com/images/car-pictures/original/2020-Kia-Optima-Sedan-LX-4dr-Sedan-Photo.png"
      alt="2019 Chevrolet Blazer"
      class="img-fluid"
    />
    <br /><br /><br />
    <h3>Booking with Michelle</h3>
    <p>
      Michelle has been driving for us since September 2019, coming straight
      from Uber. She has driven people to doctor appointments, helped with
      picking up family, transporting groceries, to bringing people to work.
    </p>
    <router-link class="btn btn-outline-warning" to="/checkout">
      PROCEED
    </router-link>
    <div class="previous">
      <router-link to="/driver5">
        <small>previous driver</small> <br />
        <i class="fas fa-chevron-circle-left"></i>
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.container {
  margin-bottom: 70px;
  h1 {
    margin-top: 110px;
  }
  img {
    max-width: 300px;
    max-height: 300px;
    padding: 10px;
  }
  h3 {
    letter-spacing: 6px;
  }
  p {
    width: 70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    font-size: 20px;
  }
}
i {
  color: goldenrod;
  letter-spacing: 10px;
  font-size: 16px;
}
.next {
  position: absolute;
  top: 60%;
  right: 40px;

  small {
    color: grey;
    text-shadow: 9px 7px 6px;
  }

  i {
    font-size: 30px;
  }
}
.previous {
  position: absolute;
  top: 60%;
  left: 40px;

  small {
    color: grey;
    text-shadow: 9px 7px 6px;
  }

  i {
    font-size: 30px;
  }
}
</style>
