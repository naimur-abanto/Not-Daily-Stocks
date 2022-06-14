<template>
    <section>
        <div>
        <h1>
            Daily Stocks
        </h1>
        <p>
            Sends stock price alert when price drops or rises to your specified price.
        </p>     
    </div>
    <div>
        <router-link to="/LogIn" class="si">SIGN IN</router-link>
        <router-link to="/SignUp" class="su">SIGN UP</router-link>
    </div>
    </section>  
</template>

<style scoped>

    

    section{
        position: fixed;
        transform: translateY(-1em);
    }
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
        color: rgb(41, 41, 41);
    }

    p{
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
        font-family: 'Lato', sans-serif;
        font-size: calc(1rem + 1vw);
        max-width: 50%;
        line-height: 1.5;
        color: rgb(41,41,41);
    }

    a{
        list-style: none;
        text-decoration: none;
        padding: 20px 50px;
        width: 200px;
        height: 70px;
        border: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: larger;
        color: white;
        margin-right: 1em;
        /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
                
    }

    a:hover{
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

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