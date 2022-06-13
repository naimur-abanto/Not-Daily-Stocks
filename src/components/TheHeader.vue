<template>
    <header>
        <div>
            <img class="logo" src="@/assets/logo.png" alt="">
            <button> Sign In </button>
        </div>
        
        
    </header>
</template>

<style scoped>
    header{
        height: 64px;
        background: transparent;
           
    }
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
</style>

