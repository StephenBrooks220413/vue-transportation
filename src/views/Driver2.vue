<template>
    <div class="container">
    <h1 class="display-4">Goerge Lemming</h1>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <br />
        <img 
            src="https://images.unsplash.com/photo-1516862523118-a3724eb136d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
            alt="Mike Boulson"
            class="img-fluid"
        />
        <img
            src="https://images.unsplash.com/photo-1570303278489-041bd897a873?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="2017 Civc TypeR"
            class="img-fluid"
        />       
        <br /><br /><br />
        <h3>Booking with Goerge</h3>
        <p>
            He has been driving for us since September 2019, coming straight from Uber.
            He has driven people to doctor appointments, helped with picking up family,
            transporting groceries, to bringing people to work.
        </p>
        <router-link class="btn btn-outline-warning" to="/checkout">
            PROCEED
        </router-link>
        <div class="next">
            <router-link to="/driver3">
                <small>next driver</small> <br />
                <i class="fas fa-chevron-circle-right"></i>
            </router-link>
        </div>
        <div class="previous">
            <router-link to="/driver1">
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
