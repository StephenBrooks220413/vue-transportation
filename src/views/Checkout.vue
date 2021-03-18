<template>
  <div class="checkout">
    <h1>Confirming....</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
        <br /><br />
          <p class="driver-info">
            Driver's Name: <br />
            Vehicle: <br />
            Date: <br /><br />
          </p>
          <img
            src="https://images.unsplash.com/photo-1557159557-7a93eaadf72a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
            alt="highway"
            class="img-fluid"
          /> <br /><br />
          Buyer Info: If you need to text or call me ahead of time
          or prior to arrival, that can be done by reaching me at
          555-555-5555. <br /> I look forward to assisting you soon.
        </div>
        <div class="col-md-6">
        <br /><br />
          <form>
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input type="text" required id="form6Example1" class="form-control" />
                  <label class="form-label" for="form6Example1">First name</label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input type="text" required id="form6Example2" class="form-control" />
                  <label class="form-label" for="form6Example2">Last name</label>
                </div>
              </div>
            </div>

            <!-- Text input -->
            <div class="form-outline mb-4">
              <input type="text" required id="form6Example4" class="form-control" />
              <label class="form-label" for="form6Example4">Address</label>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" required id="form6Example5" class="form-control" />
              <label class="form-label" for="form6Example5">Email</label>
            </div>

            <!-- Number input -->
            <div class="form-outline mb-4">
              <input type="number" required id="form6Example6" class="form-control" />
              <label class="form-label" for="form6Example6">Phone</label>
            </div>

            <!-- Checkbox -->
            <div class="form-outline d-flex justify-content-center mb-4">
              <h4>Payment Method</h4>
              <select id="paymentForm" required>
                <option selected value=""></option>
                <option value="square">Square</option>
                <option value="debit/credit">Debit/Credit</option>
                <option value="banking">Banking</option>
              </select>
            </div>

            <!-- Payment input -->
            <div class="form-outline mb-4">
              <input type="number" id="form6Example6" maxlength="20" class="form-control" />
              <label class="form-label" for="form6Example6">Credit/Debit Card Number</label>
            </div>

            <!-- Payment input -->
            <div class="form-outline mb-4">
            <p>Card Expiration Date</p>
              <input type="date" required id="form6Example6" class="form-control" />
            </div>

            <!-- Message input -->
            <div class="form-outline mb-4">
              <textarea class="form-control" required id="form6Example7" rows="4"></textarea>
              <label class="form-label" for="form6Example7">Please tell us the date, time, anything that may help us find you better.</label>
            </div>

            <!-- Submit button -->
            <button type="submit" onclick="alert('Order Placed!!!')" class="btn btn-primary btn-block mb-4">Place order</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.checkout {
  margin-top: 110px;
  margin-bottom: 90px;

  .container {
    margin-top: 40px;
  }

  .driver-info {
    display: flex;
    flex-direction: start;
  }
}

form {
  width: 90%;
  height: auto;
}
input {
  background-color: lightgrey !important;
  opacity: 0.6 !important;
}
textarea {
  background-color: lightgrey !important;
  opacity: 0.6 !important;
}
</style>
