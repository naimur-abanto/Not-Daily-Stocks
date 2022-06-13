<template>
    <card-sign>
        <div class="sign-up-box"> 
            <h3>Sign Up Now</h3>
            <div class="button-holders">
                <button>Sign Up with Facebook</button>
                <button>Sign Up with Google</button>
                <button>Sign Up with Email</button>                
            </div>
            
            <h3>
                Havee an account already? 
                <button>Log In</button> 
            </h3>
        </div>
        
    </card-sign>            
</template>
<script lang="ts">

</script>

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