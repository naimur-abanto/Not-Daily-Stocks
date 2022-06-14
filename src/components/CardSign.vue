<template>
    <div class="button-holders">
        <button>Continue with Facebook</button>
        <button>Continue with Google</button>
        <button>Continue with Email</button>                
    </div>
</template>

<style scoped>
    .button-holders{
        display: flex;
        flex-direction: column;
        margin: 1em;
        width: 405px;   
    }

    button{
        height: 48px;
        font-size: 16px;
        line-height: 20px;
        font-weight: 700;;
        text-align: center;
        margin: 1em;
    }
</style>