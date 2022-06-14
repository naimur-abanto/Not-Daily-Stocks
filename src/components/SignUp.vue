<template>    
    <div> 
        <h3>Sign up</h3>
        <card-sign></card-sign>        
        <h3>
            Have an account already? 
            <router-link to="LogIn">Log In</router-link> 
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
    a{
        list-style: none;
        text-decoration: none;
        color: #fe4642;;
        font-weight: bold;
    }
</style>
