<template>    
    <div> 
        <h3>Sign up</h3>
        <card-sign></card-sign>  
    </div>    
    <div class="after-buttons">
        Have an account already?<router-link to="LogIn">Log In</router-link>
    </div>        
</template>

<script lang="ts">

import CardSign from '@/components/CardSign.vue'

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
    .after-buttons{
        text-align: center;
    }
    h3{
        text-align: center;
    }
</style>
