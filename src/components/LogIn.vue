<template>    
    <div >
        <img src="@/assets/logo.png" alt=""> 
        <h3>Log in</h3>
        <card-sign></card-sign>        
        <h3>
            New to Daily Stocks? 
            <router-link to="/SignUp">Sign Up</router-link> 
        </h3>
    </div>            
</template>

<script lang="ts">
import CardSign from './CardSign.vue'
export default{
    components: {
        CardSign
    }
}
</script>

<style scoped>
    body{
        background: none ;
    }
    img{
        width: 540px;
        transform: translateY(-7em);
    }
    
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    a{
        list-style: none;
        text-decoration: none;
        color: #fe4642;;
        font-weight: bold;
    }
</style>

