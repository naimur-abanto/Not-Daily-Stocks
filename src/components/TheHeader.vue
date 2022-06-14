<template>
    <header>
        <div>
            <img class="logo" src="@/assets/logo.png" alt="">
            <button> Sign In </button>
        </div>
        
        
    </header>
</template>

<style scoped>
    @media screen and (min-width: 640px) {
        div{       
            height: calc( 64px - 1em );
            display: flex;
            justify-content: space-between;
            align-items: center;       
            margin:.5em 2.5em .5em 2.5em;
        }

        button{
            background: #FE4642;
            font: 14px;
            font-weight: 700;
            color: white;
            height: 40px;
            width: 80px;
            border: none;
            border-radius: 10%;       
    }
        button:hover{
            background: #ff655a;
            cursor: pointer;
        }
        .logo{
            height: 100px;
        }    
    }

    @media screen and (max-width: 639px) {
        header{
            overflow-x: hidden;
            display: flex;
            align-items: center;
            width: 100vw; 
        }
        div{
            width: 100%;
            display: flex;   
            justify-content: space-around;
            align-items: center

        }
    }
    header{
        height: 64px;
        background: transparent;                              
    }
    button{
        background: #FE4642;
        font: 14px;
        font-weight: 700;
        color: white;
        height: 40px;
        width: 80px;
        border: none;
        border-radius: 5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;   
    }
    .logo{
        height: 100px;   
    }
</style>

