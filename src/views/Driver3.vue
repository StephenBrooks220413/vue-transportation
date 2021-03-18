<template>
    <div class="container">
    <h1 class="display-4">Steven Miles</h1>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <br />
        <img 
            src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
            alt="Steven Miles"
            class="img-fluid"
        />
        <img
            src="https://decepticomics.com/wp-content/uploads/2019/06/63-New-2020-Pontiac-Trans-Am-Spy-Shoot.jpg"
            alt="2019 Chevrolet Blazer"
            class="img-fluid"
        />       
        <br /><br /><br />
        <h3>Booking with Steven</h3>
        <p>
            Steven has been driving for us since September 2019, coming straight from Uber.
            He has driven people to doctor appointments, helped with picking up family,
            transporting groceries, to bringing people to work.
        </p>
        <a href="#" class="btn btn-outline-warning">BOOK</a>
        <div class="next">
            <router-link to="/driver4">
                <small>next driver</small> <br />
                <i class="fas fa-chevron-circle-right"></i>
            </router-link>
        </div>
        <div class="previous">
            <router-link to="/driver2">
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
