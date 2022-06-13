<template>
    <div class="footer-combined">
        <div class="upper">
            <div class="left">
                <a href="./Privacy.vue">Privacy</a>
                <a href="./Terms.vue">Terms</a>
            </div>
            <div class="right">
                Right Side
            </div>
        </div>
        <div class="lower"> 
            © 2022 Daily Stocks, all rights reserved
        </div>
        

    </div>
</template>



<style scoped>

    .footer-combined{
        margin: 0;
        padding: 0;
        position: fixed;
        bottom: 0%;
        width: 100%;
        height: 7.5em;
        display: grid;
        grid-auto-rows: 1fr;
    }

    .upper{
        background-color: #ff6b68;;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    

    .lower{
        text-align: center;
    }

    a{
        text-decoration: none;
        color: white;
        cursor: pointer;
        margin: 0 0.75em;
    }

</style>