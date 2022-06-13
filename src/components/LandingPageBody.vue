<template>
    <div>
        <h1>
            Daily Stocks
        </h1>
        <p>
            Sends stock price alert when price drops or rises to your specified price.
        </p>
        
    </div>

    <div>
        <button class="si">SIGN IN</button>
        <button class="su">SIGN UP</button>
    </div>
</template>

<style scoped>
    div{
        margin: 2em 4.5em 2em 4.5em;
        
    }

    h1{
        /* font-size: calc(4rem + 3vw)!important;   */
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
        font-family: 'Lato', sans-serif;
        font-size: 7em;
        font-weight: bold 800;
        font-stretch: ultra-expanded !important;
        margin: 1em 1.25em 0 0;
    }

    p{
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
        font-family: 'Lato', sans-serif;
        font-size: calc(1rem + 1vw);
        max-width: 50%;
        line-height: 1.5;
    }

    button{
        width: 160px;
        height: 60px;
        border: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: larger;
        color: white;
        margin-right: 1em;
                
    }

    button:hover{
        cursor: pointer;

    }

    .si{
        background-color: #fe4642;
    }

    .si:hover{
        transition: ease-in-out;
        transition-delay: 100ms;
        background-color:#ff655a; 
    }

    .su{
    
        background-color: #4caf50;
    }

    .su:hover{
        transition: ease-in-out;
        transition-delay: 100ms;
        background-color: #43a54d;
    }
</style>