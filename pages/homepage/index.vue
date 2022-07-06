<template>
    <div class ="app">
        <div>
            <h1 class="title mb-4">The Forecast<br>Weather App</h1>
            <div class="input">
                <div>
                    <p class="ml-3">Search</p>
                </div>
            </div>
            <div class="text-center">
                <NuxtLink class="link mt-5" to="/meteo">Meteo</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style style="scss" scoped>
    .app {
        background-color:#105C17;
        height: 100vh;
    }

    .title {
        color: white;
        text-align: center;
        font-weight: bold;
        padding-top: 20%;
    }

    .input {
        margin: 0 auto;
        background-color:white;
        width:400px;
    }

    p {
        font-size: 14px;
    }
    h1{
        
    }
    .link{
        text-decoration:none;
        background-color: #000;
        color: #fff;
        padding: 10px;
        border-radius: 48%;
    }
    .link:hover{
        background-color: #fff;
        color: #000;
    }

</style>